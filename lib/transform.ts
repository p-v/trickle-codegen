import { Step, TransformStep } from "./types";

const template = (fn: string) => `.transform(${fn})`;

export default function (step: Step) {
  const { data } = <TransformStep>step;
  let fn;
  if (Array.isArray(data.args)) {
    const args = data.args
      .map(({ to, from }) => `${to}: _.get(obj, "${from}")`)
      .join(",");
    fn = `(obj) => ({${args}})`;
  } else {
    fn = `(obj) => _.get(obj, "${data.args}")`;
  }

  return template(fn);
}
