const camelize = (str: string) =>
  str.replace(/-./g, (subStr) => subStr[1].toUpperCase());

export { camelize };
