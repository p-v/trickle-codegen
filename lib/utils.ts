
export const transformArg = (arg: string): string => {
  if (typeof arg === 'number') {
    return arg;
  }
  return `"${arg}"`;
}
