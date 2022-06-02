function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message=`Count is ${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}
const [increment,log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged? Count is 0

/* 
    because the scope of count++ is only till the block of increment function (line 3). 
    Outside it, it has the value that is defined in the global scope. This is called closure when the
    global variable can be accessed by all children but not children unless it returns and passes it to another function.
*/