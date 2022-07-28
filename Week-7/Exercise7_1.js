class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function printNode(node) {
    while (node != null) {
        console.log(node.data);
        node = node.next;
    }
}

function insertNewNode(head, new_data) {
    var new_node = new Node(new_data);

    if (head == null) {
        head = new Node(new_data);
        return;
    }
    new_node.next = null;

    var curr = head;
    while (curr.next != null)
        curr = curr.next;

    curr.next = new_node;
    return;
}

function reverse(node) {
    var prev = null;
    var current = node;
    var next = null;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    node = prev;
    return node;
}

let abc = [];
let button = document.getElementById('button');
let input = document.getElementById('input');
button.addEventListener('click', () => {
    input.value.split(',').forEach(val => {
        abc.push(val);
    });
    let head = new Node(abc[0]);
    for (let i = 1; i < abc.length; i++) {
        insertNewNode(head, abc[i]);
    }
    printNode(head);
    console.log('Given list');
    head = reverse(head);
    console.log('reverse list');
    printNode(head);
});