// function createStack() {
//     return {
//         items:[],
//         push(item) {
//             this.items.push(item);
//         },
//         pop() {
//             return this.items.pop();
//         }
//     };
// }
// const stack=createStack();
// stack.push(10);
// stack.push(5);
// stack.pop(); // => 5
// console.log(stack.items); // => [10,100,1000]; // Encapsulation broken!

function createStack() {
    let items= [];
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    };
}

// Removing the items array from the scope of returned object. 

const stack=createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5 
console.log(stack.items); // => undefined
