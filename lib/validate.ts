import {ValidateStep, ValidateArg, Step} from './types'

const argBuilder = (arg: ValidateArg) =>
  `_.get(obj, "${arg.inspect}") === ${arg.expected}`

const template = (args: ValidateArg[]) => 
  `.validate((obj) => ${args.map(argBuilder).join(" && ")})`;

export default function (step: Step) {
  const input = <ValidateStep>step;
  const {args} = input.data;

  return template(args);
}
