import { rocketLaunch } from "@rocket/launch";
import { addPlugin, adjustPluginOptions } from "plugins-manager";

/** @type {import('@rocket/cli').RocketCliOptions} */
export default {
  presets: [rocketLaunch()],
};
