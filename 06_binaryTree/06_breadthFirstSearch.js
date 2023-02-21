/*
  Breadth First Search AKA Level Order

  In breadth first search you traverse all the neighbouring nodes first then move to the next level.

  Here N means null
    Our tree looks like this:
    
    preOrder = [3,1,2,4,6,5]
    
    inOrder = [1,2,3,4,5,6]

    postOrder = [2,1,5,6,4,3]
    
    BFS = [3,1,4,2,6,5]
          
             3
          /    \
         1      4 
        / \    / \
        N  2  N  6
                / \
               5   N
*/
function bfs(node) {
  let queue = [];
  queue.push(node);
  let results = [];
}
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class binaryTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    if (this.root == null) {
      this.root = new Node(val);
    } else {
      let curr = this.root;
      while (true) {
        if (val < curr.val) {
          if (curr.left == null) {
            curr.left = new Node(val);
            break;
          } else {
            curr = curr.left;
          }
        } else {
          if (curr.right == null) {
            curr.right = new Node(val);
            break;
          } else {
            curr = curr.right;
          }
        }
      }
    }
  }
}

let directory = new binaryTree();
directory.insert(3);
directory.insert(4);
directory.insert(6);
directory.insert(5);
directory.insert(1);
directory.insert(2);
console.log(directory);
console.log('inOrder Traversal');
inOrder(directory.root);
console.log('preOrder Traversal');
preOrder(directory.root);
console.log('postOrder Traversal');
postOrder(directory.root);

/*
  Here N means null
    Our tree looks like this: 
          
             3
          /    \
         1      4 
        / \    / \
        N  2  N  6
                / \
               5   N
*/
