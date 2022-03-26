import {Step, PerformStep} from './types'

const allArgs = (args: string[]) => args.map(arg => `"${arg}"`).join(",")
const template = (fn: string, args: string[]) => `.perform(${fn}, [${allArgs(args)}])`;

export default function(step: Step): string {
  const input = <PerformStep>step;
  return template(input.data.fn, input.data.args)
}
