// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   let nonWords = /[^\w]/g;

//   function strToCharHash(string) {
//     return Array.from(string).reduce((acc, c) => {
//       acc[c] = acc + 1 || 0;
//       return acc;
//     }, [])
//   }

//   let hashA = strToCharHash(stringA.replace(nonWords, '').toLowerCase());
//   let hashB = strToCharHash(stringB.replace(nonWords, '').toLowerCase());

//   if (Object.keys(hashA).length !== Object.keys(hashB).length) {
//     return false;
//   }

//   return Object.keys(hashA).every((char) => hashA[char] === hashB[char]);
// }

function anagrams(stringA, stringB) {
  const sortString = (string) =>
    string
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join();

  return sortString(stringA) === sortString(stringB);
}

module.exports = anagrams;
