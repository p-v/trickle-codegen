import { Step } from "./types";
import perform from "./perform";
import transform from "./transform";
import validate from "./validate";

type PluginDictionary = {
  [key: string]: (step: Step) => string;
};

const getAll = (): PluginDictionary => {
  return {
    perform,
    transform,
    validate,
  };
};

export default {
  getAll,
};
