import {Step} from './types'
import perform from './perform';
import transform from './transform';

type PluginDictionary = {
  [key: string]: (step: Step) => string
}

const getAll = (): PluginDictionary => {
  return {
    perform,
    transform
  }
}

export default {
  getAll
}
