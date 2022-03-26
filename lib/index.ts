import {Step} from './types';
import plugins from './plugins'

const allPlugins = plugins.getAll()

const generator = (steps: Step[]) => `Trickle${steps.map(step => allPlugins[step.type](step)).join("")}.done()`;

const steps: Step[] = [
  {
    type: "perform",
    data: {
      fn: "myFunc",
      args: ["x", "y"]
    }
  },
  {
    type: "transform",
    data: {
      args: [
        {
          "from": "x.y.z",
          "to": "x"
        },
        {
          "from": "x.y.zx",
          "to": "y"
        }
      ]
    }
  },
]

console.log(generator(steps));
