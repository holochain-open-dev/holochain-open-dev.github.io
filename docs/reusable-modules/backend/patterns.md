# Backend >> Patterns ||10

If you don't want to include any of the frontend code each of the module exposes, you can just include its backend and develop your own custom UI.

## Zomes

The majority of the modules export a zome for you to include in one of your DNAs. This is because if we are to develop frontend modules that can call directly the zome functions from the backend, we need to define and assume which zome calls are available, and its input and output structures.

You can explore which [zomes are available right now in holochain-open-dev](https://github.com/holochain-open-dev/?q=topic%3Azome&type=all&language=&sort=).

> Keep in mind that many of these zomes are still in early development.

## Mixins

"Mixins" are a way to define a "configurable zome".

Imagine a generic gaming zome, that implements the whole functionality associated with specifically turn-based games (chess, go, etc.). Validation in Holochain is specific to each zome, which means that the zome itself should validate any entries that same zome creates. But, this means that we have to override the validation function for that zome, which is not possible to do elegantly if we just export a normal zome. Also, we may want to customize the behavior of normal zome functions.

The "mixin" pattern aims to be a solution to this problem. It consists of exporting a declarative macro, that when called defines all the necessary zome functions in your zome. This way, we can also assume which shape the zome functions will have, and develop accompanying UI elements that are able to communicate with any zome that has that mixin defined.

- Using a mixin:

```rust
pub struct TicTacToe;

impl TurnBasedGame for TicTacToe {
  fn custom_validation() -> ExternResult<ValidateCallbackResult> {
    ...
  }
}

mixin_turn_based_game!(TicTacToe);

```

- Defining a mixin:

```rust
pub trait TurnBasedGame {
    fn custom_validation() -> ExternResult<ValidateCallbackResult>;
}

#[macro_export]
macro_rules! mixin_turn_based_game {
    ( $turn_based_game:ty ) => {
        #[hdk_extern]
        fn make_move(
            input: $crate::MakeMoveInput,
        ) -> ExternResult<hdk::prelude::holo_hash::HeaderHashB64> {
          ...
        }

        #[hdk_extern]
        fn validate_create_entry_game_entry(
            validate_data: ValidateData,
        ) -> ExternResult<ValidateCallbackResult> {
            // Called the custom behavior defined in the consuming zome
            $turn_based_game::custom_validation()?;

            // Other behavior
        }
    }
}
```

Examples of mixins:

- [@eyss/elo](https://github.com/eyss/elo/blob/main/mixin/src/mixin.rs)
- [@eyss/turn-based-game](https://github.com/eyss/turn-based-game/blob/main/mixin/src/mixin.rs)

## Libs

There are a lot of reusable patterns that shouldn't actually define any zome function by themselves, by rather define functions that zomes can import if they need them. 

These libs don't have any accompanying frontend module, since they don't define the shape or input/output structures that the elements would need to interact with the backend.

You can explore which [libs are available right now in holochain-open-dev](https://github.com/holochain-open-dev/?q=topic%lib&type=all&language=&sort=).
