// Start of function Node
function Node (data) {
  this.data = data
  this.left = null
  this.right = null
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree () {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data)

      return this.root
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data)
      } else {
        root.left = new Node(data)
      }
    } else {
      if (root.right) {
        this.insert(root.right, data)
      } else {
        root.right = new Node(data)
      }
    }

    return this.root
  }

  // Start of function levelOrder
  this.levelOrder = function (root) {
    // Add your code here
    // To print values separated by spaces use process.stdout.write(someValue + ' '
    const queue = []
    let outString = ''
    if (root) {
      queue.unshift(root)

      while (queue.length > 0) {
        const tree = queue.pop()
        if (outString === '') {
          outString = tree.data.toString()
        } else {
          outString += ' ' + tree.data.toString()
        }
        if (tree.left) {
          queue.unshift(tree.left)
        }
        if (tree.right) {
          queue.unshift(tree.right)
        }
      }
    }
    console.log(outString)
  } // End of function levelOrder
}; // End of function BinarySearchTree

process.stdin.resume()
process.stdin.setEncoding('ascii')

let _input = ''

process.stdin.on('data', function (data) {
  _input += data
})

process.stdin.on('end', function () {
  const tree = new BinarySearchTree()
  let root = null

  const values = _input.split('\n').map(Number)

  for (let i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i])
  }

  tree.levelOrder(root)
})
