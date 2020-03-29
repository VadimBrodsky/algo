// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let temp = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = temp;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let centerIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, centerIndex);
  let right = arr.slice(centerIndex);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let merged = [];

  while (left.length && right.length) {
    let smaller = left[0] < right[0] ? left : right;
    merged.push(smaller.shift());
  }

  return [...merged, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
