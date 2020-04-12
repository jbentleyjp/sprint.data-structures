class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    //O(1)
    let child = new Tree(value);
    this.children.push(child);

    return child;
  }

  contains(value) {
    //O(n)
    let exists = false;

    const innerFunc = (testTree) => {
      if (testTree.value === value) {
        exists = true;
      } else {
        for (const item of testTree.children) {
          innerFunc(item);
        }
      }
    };
    innerFunc(this);
    return exists;
  }

  remove(value) {
    //O(n)
    //write some tests if you can!
    let removedVal;

    const innerFunc = (branch) => {
      if (branch.value === value) {
        removedVal = branch;
        // delete branch
        branch = null;
      } else {
        for (const item of branch.children) {
          innerFunc(item);
        }
      }
    };
    innerFunc(this);
    return removedVal;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  // traverseDepthFirst(fn) {}

  // traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = Tree;
