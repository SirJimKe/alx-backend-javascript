export default function appendToEachArrayValue(array, appendString) {
  const updatedArray = [...array];

  for (const value of updatedArray) {
    const index = updatedArray.indexOf(value);
    updatedArray[index] = appendString + value;
  }

  return updatedArray;
}
