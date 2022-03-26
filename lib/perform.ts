import { Step, PerformStep } from "./types";
import {transformArg} from './utils';

const allArgs = (args: string[]) => args.map(transformArg).join(",");
const template = (fn: string, args: string[]) =>
  `.perform(${fn}, [${allArgs(args)}])`;

export default function (step: Step): string {
  const input = <PerformStep>step;
  return template(input.data.fn, input.data.args);
}
