function counter() {
    let count = 0;
    return function(action) {
        if (action === 'inc')
            return count++;
        else if (action === 'dec')
            return count--;
        else{
            count = 0;
            return count;
        }
    }
}

const c1 = counter();
console.log(c1("inc"));
console.log(c1("inc"));
console.log(c1());

const c2 = counter();
console.log(c2());