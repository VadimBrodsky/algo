let { it } = require('../_utils/test.js');
let { Node } = require('../_utils/graph.js');

// Time O(V + E)
// Space O(V)
let depthFirstSearch = (graph) => {
  let result = [];
  let queue = [graph];

  while (queue.length) {
    let currentNode = queue.shift();
    result.push(currentNode.data);

    if (currentNode.children) {
      queue.unshift(...currentNode.children);
    }
  }

  return result;
};

// Time O(V + E)
// Space O(V)
depthFirstSearch = (graph) => {
  function recurse(graph, result) {
    result.push(graph.data);
    graph.children.forEach((child) => recurse(child, result));
    return result;
  }

  return recurse(graph, []);
};

it('test 1', ({ deepEqual }) => {
  //        A
  //    /   |   \
  //    B   C   D
  //  /  \     /
  //  E  F     G
  //    / \    |
  //    I J    K
  let graph = new Node('A');
  graph.add('B');
  graph.add('C');
  graph.add('D');
  graph.children[0].add('E');
  graph.children[0].add('F');
  graph.children[2].add('G');
  graph.children[2].add('H');
  graph.children[0].children[1].add('I');
  graph.children[0].children[1].add('J');
  graph.children[2].children[0].add('K');

  deepEqual(depthFirstSearch(graph), [
    'A',
    'B',
    'E',
    'F',
    'I',
    'J',
    'C',
    'D',
    'G',
    'K',
    'H',
  ]);
});
