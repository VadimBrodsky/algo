let { it } = require('../_utils/test.js');
let BST = require('../_utils/bst.js');

let closestVaultInBST = (bst, vaule) => {

};

it('test 1', ({ equal }) => {
  //      10
  //    5    15
  //  2  5  13  22
  // 1       14
  let tree = new BST(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(2);
  tree.insert(5);
  tree.insert(1);
  tree.insert(13);
  tree.insert(22);
  tree.insert(14);

  equal(closestVaultInBST(tree, 12), 13);
});
