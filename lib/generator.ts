import { Step } from "./types";
import plugins from "./plugins";

const allPlugins = plugins.getAll();

const generate = (steps: Step[]) =>
  `Trickle${steps.map((step) => allPlugins[step.type](step)).join("")}.done()`;

export default { generate };
