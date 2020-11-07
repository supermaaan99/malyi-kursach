/**
 * Ensure that target is list
 */
const ensureIsList = <T>(source: T) =>
  (Array.isArray(source) ? source : [source]) as T[];

export { ensureIsList };
