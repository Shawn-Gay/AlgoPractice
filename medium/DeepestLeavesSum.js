/* 
Given the root of a binary tree, 
return the sum of values of its deepest leaves.
*/


const deepestLeavesSum = (root) => {

    

    const depthSearch = (node, depth = -1) => {

        if(!node){
            return depth == -1 ? 0 : depth
        }
            depth++
            const left = depthSearch(node.left, depth)
            const right = depthSearch(node.right, depth)

        return left > right ? left : right
    }

    const totalDepth = depthSearch(root)

    const depthAdd = (node, totalDepth, currentDepth = 0) => {

        if(totalDepth == currentDepth){
            return node.val
        }

        currentDepth++
        let left = 0;
        let right = 0;
        if(node.left){
            left = depthAdd(node.left, totalDepth, currentDepth)
        }
        if(node.right){
            right = depthAdd(node.right, totalDepth, currentDepth)
        }

        return left + right

    }

    return depthAdd(root, totalDepth)


}

