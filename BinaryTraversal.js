// Given the root of a binary tree, return the level order 
// traversal of its nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}




const levelOrder = (root) => {
    const levels = []

    if(!root) {
        return levels
    }

    const queue = [root]
    while (queue.length){
       const queueLength = queue.length
       const level = []

       for(let i = 0; i < queueLength; i++){

        node = queue.shift()

        if(node.left){
            queue.push(node.left)
        }

        if(node.right){
            queue.push(node.right)
        }

        level.push(node.val)

       }
       levels.push(level)
    }
    return levels
}
const tree = new TreeNode(3,new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
console.log(levelOrder(tree))