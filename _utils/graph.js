class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((el) => el.data !== data);
  }
}

class Graph {
  constructor() {
    this.root = null;
  }
}

module.exports = { Graph, Node };
