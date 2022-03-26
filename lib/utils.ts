
export const transformArg = (arg: any): string => {
  if (typeof arg === 'string') {
    return `"${arg}"`;
  }
  return arg;
}
