# Frontend >> Using a UI Module ||10

Each frontend module is packaged as an NPM package and has (at least) these exports: types, services, stores, elements and its context.

All of these exports are designed so that you can import and use whatever makes more sense for your use case. Pick carefully the layer at which you import the objects.

> All the examples here use the `@holochain-open-dev/profiles` module, but any other module that follows this pattern will basically have the same kind of exports available for you to use.

## Types

These are typescript types that replicate the rust structs and types used by the zome at the backend layer.

Its usage is very straightforward:

```ts
import { AgentProfile, SearchAgentInput } from '@holochain-open-dev/profiles';
```

## Services

A service is a typescript class that wraps the `AppWebsocket` from `@holochain/client` and exposes the function calls that are available in the zome.

## Stores

A store is a typescript class as well that maintains the shared state for the elements exported by this module. This shared state is crucial in order to have cool optimizations, like skipping zome calls because we already have the necessary information, or updating all the elements at once reacting to a signal that came from the zome.

## Elements

## Context 