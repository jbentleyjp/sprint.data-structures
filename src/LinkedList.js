function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
    }
  }

  appendToTail(value) {
    const output = new Node(value);
    if (!this.head) {
      this.head = output;
      this.tail = output;
      return this.tail;
    } else {
      this.tail.next = output;
      this.tail = output;
      return this.tail;
    }
  }

  removeHead() {
    const removedHead = this.head;
    this.head = this.head.next;
    return removedHead;
  }

  findNode(value) {
    let currentNode = this.head;

    while (currentNode.value !== value) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        return currentNode;
      }
    }
    return currentNode;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  // forEach(callback) {}

  // print() {}

  // insertHead(value) {}

  // insertAfter(refNode, value) {}

  // removeAfter(refNode) {}
}

module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
