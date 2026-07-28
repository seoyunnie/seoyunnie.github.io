export function capitalize<T extends string>(str: T): Capitalize<T> {
  // oxlint-disable-next-line typescript/no-unsafe-type-assertion
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;
}
