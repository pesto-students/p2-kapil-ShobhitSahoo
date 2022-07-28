
class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

function isBST(root, l, r) {
    if (root == null)
        return true;

    if (l != null && root.data <= l.data)
        return false;

    if (r != null && root.data >= r.data)
        return false;

    return isBST(root.left, l, root) &&
        isBST(root.right, root, r);
}



let root = new Node(3);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(4);
root.right.left = new Node(6);
root.right.right = new Node(7);

/*
        3
    2       5
1      4 6    7
*/

if (isBST(root, null, null))
    console.log("Is BST");
else
    console.log("Not a BST");
