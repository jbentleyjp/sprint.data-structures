class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(node) {
    //O(1)
    this.nodes[node] = [];
  }

  removeNode(node) {
    //O(n)
    for (const el in this.nodes) {
      this.removeEdge(node, el);
    }
    delete this.nodes[node];
  }

  contains(node) {
    //O(1)
    return this.nodes[node] ? true : false;
  }

  addEdge(fromNode, toNode) {
    if (!this.nodes[fromNode] || !this.nodes[toNode]) {
      return "Invalid node value";
    } else {
      if (!this.nodes[toNode].includes(fromNode)) {
        this.nodes[fromNode].push(toNode);
        this.nodes[toNode].push(fromNode);
      }
    }
  }

  removeEdge(node1, node2) {
    this.nodes[node1] = this.nodes[node1].filter((el) => el !== node2);
    this.nodes[node2] = this.nodes[node2].filter((el) => el !== node1);
  }

  hasEdge(node1, node2) {
    //O(N -> N is the # of connections each node has)
    if (
      this.nodes[node1].includes(node2) &&
      this.nodes[node2].includes(node1)
    ) {
      return true;
    }
    return false;
  }
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = Graph;
