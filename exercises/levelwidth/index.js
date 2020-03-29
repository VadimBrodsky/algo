// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let nodes = [root, 'STOP'];
  let counters = [0];

  while (nodes.length > 1) {
    let currentNode = nodes.shift();

    if (currentNode === 'STOP') {
      counters.push(0);
      nodes.push(currentNode);
    } else {
      nodes.push(...currentNode.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
