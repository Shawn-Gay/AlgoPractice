// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node
//  values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. 
//  The tree s could also be considered as a subtree of itself


/**
  Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 **/

 var isSubtree = function(s, t) {
    
    const stack = [s];
    
    while (stack.length){
        
        const node = stack.pop()
        
        if(node.val == t.val && isSameTree(node, t)){
            return true
        }
        
            if (node.left) {
      stack.push(node.left);
    }

            if (node.right) {
      stack.push(node.right);
    }
        
    }
    return false
    
};


const isSameTree = (s, t) => {
    if(!s && !t){
        return true;
    }
    
   if (!s || !t || s.val !== t.val) {
    return false;
  }
    
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}