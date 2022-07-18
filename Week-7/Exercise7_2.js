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

function rotate(K, head) {
    if (K == 0) {
        return;
    }
    let last = head;
    while (last.next != null) {
        last = last.next;
    }

    let kth = head;
    let count = 0;
    while (count < K) {
        kth = kth.next;
        count++;
        // console.log("kth node " + kth.data);
    }

    let kplus = kth.next;

    while (kplus.next != null) {
        kplus = kplus.next;
        // console.log("kplus node " + kplus.data);
    }
    last.next = head;
    kth.next = null;
    head = kplus;
    printNode(head);
}

let abc = [];
let button = document.getElementById('button');
let input = document.getElementById('input');
let K = document.getElementById('k');
button.addEventListener('click', () => {
    input.value.split(',').forEach(val => {
        abc.push(val);
    });
    let n = abc.length;
    let head = new Node(abc[0]);
    for (let i = 1; i < abc.length; i++) {
        insertNewNode(head, abc[i]);
    }
    printNode(head);
    console.log('Given list');
    // head = reverse(head);
    rotate(K.value, head);
    console.log('Rotated list');
});