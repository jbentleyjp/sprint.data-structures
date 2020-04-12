class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left;
    this.right;
  }

  // Insert Method
  insert(value) {
    //O(log n)
    const child = new BinarySearchTree(value);

    let innerFunc = (tree) => {
      if (value < tree.value) {
        if (!tree.left) {
          tree.left = child;
        } else {
          innerFunc(tree.left);
        }
      }
      if (value > tree.value) {
        if (!tree.right) {
          tree.right = child;
        } else {
          innerFunc(tree.right);
        }
      }
    };
    innerFunc(this);
    return this;
  }

  // Contains Method
  contains(value) {
    //O(log n)
    let exists = false;

    let innerFunc = (tree) => {
      if (value === tree.value) {
        exists = true;
        return exists;
      } else if (value < tree.value) {
        if (tree.left) {
          innerFunc(tree.left);
        } else {
          return false;
        }
      } else {
        if (tree.right) {
          innerFunc(tree.right);
        } else {
          return false;
        }
      }
    };
    innerFunc(this);
    return exists;
  }

  // The traverseDepthFirstInOrder Method
  traverseDepthFirstInOrder(callback) {
    //O(log n)
    const innerFunc = (tree) => {
      if (tree.left) {
        innerFunc(tree.left);
      }
      callback(tree);
      if (tree.right) {
        innerFunc(tree.right);
      }
    };
    innerFunc(this);
    return undefined;
  }
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = BinarySearchTree;
