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

function createLoop(head, x) {
    let last = head, curr = null;
    count = 1;

    while (last.next != null) {
        last = last.next;
    }
    let first = head;
    while (count < x) {
        curr = first.next;
        count++;
    }
    last.next = curr;
    // printNode(head);

    detectLoop(head);
}

function detectLoop(head) {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            console.log("Loop detected");
            break;
        }
    }
    if (fast == null || fast.next == null) {
        console.log("No loop detected");
    }
}

let abc = [];
let button = document.getElementById('button');
let input = document.getElementById('input');
let x = document.getElementById('k');
button.addEventListener('click', () => {
    input.value.split(',').forEach(val => {
        abc.push(val);
    });
    let head = new Node(abc[0]);
    for (let i = 1; i < abc.length; i++) {
        insertNewNode(head, abc[i]);
    }
    console.log('Given list');
    printNode(head);

    createLoop(head, x.value);

});