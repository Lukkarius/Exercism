// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let n1 = 0;
  let n2 = 0;
  for (let i = 0; i < array1.length; i++) {
    n1 += array1[i] * (10 ** (array1.length - 1 - i));
  } 
  for (let i = 0; i < array2.length; i++) {
    n2 += array2[i] * (10 ** (array2.length - 1 - i));
  } 
  return n1 + n2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const copy = String(value);
  const umgedreht = copy.split('').reverse().join('');
 return copy === umgedreht;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === '' || input === null || input === undefined) {
    return 'Required field';
  }
  
  if (!Number(input)) {
    return 'Must be a number besides 0';
  }
  return "";
}
