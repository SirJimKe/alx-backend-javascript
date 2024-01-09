export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || !(startString) || !(set) || typeof startString !== 'string') {
    return '';
  }

  const filteredValues = [...set].filter((value) => value.startsWith(startString));

  const cleanedValues = filteredValues.map((value) => value.slice(startString.length));

  const resultString = cleanedValues.join('-');

  return resultString;
}
