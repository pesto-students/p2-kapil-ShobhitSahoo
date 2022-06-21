function closest(a, x) {
    a.sort((a, b) => a - b);
    // To store the closest sum not using INT_MAX to avoid overflowing condition
    let closestSum = 1000000000;

    for (let i = 0; i < a.length - 2; i++) {
        let ptr1 = i + 1;
        let ptr2 = a.length - 1;

        while (ptr1 < ptr2) {
            let sum = a[i] + a[ptr1] + a[ptr2];

            // If the sum is more closer than the current closest sum
            if (Math.abs(1 * x - sum) < Math.abs(1 * x - closestSum)) {
                closestSum = sum;
            }
            if (sum > x) {
                ptr2--;
            }
            else {
                ptr1++
            }
        }
    }
    return closestSum
}

let arr = [-1, 2, 1, -4];
let x = 1;
console.log(closest(arr, x));