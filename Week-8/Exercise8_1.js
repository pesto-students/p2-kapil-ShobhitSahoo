class Node {
    constructor(item) {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}

function maxDepth(node) {
    if (node == null)
        return 0;
    else {
        let leftDepth = maxDepth(node.left);
        let rightDepth = maxDepth(node.right);
        if (leftDepth > rightDepth)
            return (leftDepth + 1);
        else
            return (rightDepth + 1);
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

/*
        1
    2       3
4       5
*/

console.log("Height of tree is : " + maxDepth(root));