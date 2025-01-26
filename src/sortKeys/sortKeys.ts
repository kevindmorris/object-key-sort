/**
 * The options object.
 */
export type SortKeysOptions = { nested?: boolean };

/**
 * Sort an object's keys.
 * @param {object} object An object.
 * @param {object} [options] An options object.
 * @param {boolean} [options.nested=true] Whether to sort any nested objects or not.
 * @returns Returns A sorted object.
 */
export function sortKeys(
  object: object,
  { nested = true }: SortKeysOptions = {}
): object {
  // Get an array of the objects keys.
  const keys = Object.keys(object);

  // Sort the objects keys alphabetically.
  keys.sort();

  // Iterate over the object's keys.
  const newObject = keys.reduce((previousValue, currentValue) => {
    // If the key is found in the object.
    if (keys.indexOf(currentValue) !== -1) {
      // If nested = true and the value is an object.
      if (nested && typeof object[currentValue] === "object") {
        // Sort the keys of the nested object.
        previousValue[currentValue] = sortKeys(object[currentValue]);
      } else {
        // Add the key-value pair to the new object.
        previousValue[currentValue] = object[currentValue];
      }
    }

    return previousValue;
  }, Object.create(null));

  // Retrun the sorted object.
  return newObject;
}
