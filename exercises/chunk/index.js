// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunked = [];
//   let newChunk = [];

//   for (let el of array) {
//     if (newChunk.length === size) {
//       chunked.push([...newChunk]);
//       newChunk = [];
//     }

//     newChunk.push(el);
//   }

//   if (newChunk.length) {
//     chunked.push([...newChunk]);
//   }

//   return chunked;
// }

function chunk(array, size) {
  let chunked = array.reduce(
    (acc, el) => {
      let lastSubArray = acc[acc.length - 1];

      if (lastSubArray.length < size) {
        lastSubArray.push(el);
      }

      if (lastSubArray.length === size) {
        acc.push([]);
      }

      return acc;
    },
    [[]],
  );

  console.log({ chunked });
  return chunked;
}

module.exports = chunk;
