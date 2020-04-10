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
    this.nodes[node] = [];
  }

  removeNode(node) {
    // console.log(this, this.nodes)
    console.log(node, this.nodes);
    for (const el in this.nodes) {
      console.log(node, el, this.nodes);
      this.removeEdge(node, el);
    }
    delete this.nodes[node];
  }

  contains(node) {
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
    const index1 = this.nodes[node1].indexOf(node2);
    const index2 = this.nodes[node2].indexOf(node1);

    this.nodes[node1].splice(index1, 1);
    this.nodes[node2].splice(index2, 1);
    //cons t indeindex1 = this.nodes[node].indexOf(node2)
    // console.log(this.nodes)
    // console.log(this.nodes[node1])
    // console.log(this.nodes[node2])
    // this.nodes[node1].filter(el => el !== node2)
    // this.nodes[node2].filter(el => el !== node1)
    // console.log(this.nodes[node1])
    // console.log(this.nodes[node2])
  }

  hasEdge(node1, node2) {}
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
