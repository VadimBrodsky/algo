// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (node === null) {
    return true;
  }

  if (node.left) {
    if (min === null) {
      return validate(node, node.data, max);
    } 
      return validate(node.left, null, node.data);
  }

  if (node.right) {
    if (max === null) {
      return validate(node.right, node.data, node.data);
    } else {
      return validate(node.right, node.data, null);
    }
  }

  if (node.data > max || node.data < min) {
    return false;
  }

  return true;
}

module.exports = validate;
