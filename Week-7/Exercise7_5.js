let arr = [6, 8, 0, 1, 3]

// for (let i = 0; i < x.length; i++) {
//     let max = -1;
//     for (let j = i + 1; j < x.length; j++) {
//         if (x[j] > x[i]) {
//             max = x[j];
//             break;
//         }
//     }
//     console.log(max);
// }

// time complexity: O(n^2)


function nextLargerElement(arr, n) {
    var s = [];

    // for (var i = 0; i < arr.length; i++) {
    //     while (s.length > 0 && s[s.length - 1]["value"] < arr[i]) {
    //         var d = s.pop();
    //         arr[d["ind"]] = arr[i];
    //     }
    //     s.push({ "value": arr[i], "ind": i });
    // }

    while (s.length > 0) {
        d = s.pop();
        arr[d["ind"]] = -1;
    }
    return arr;

}

console.log(nextLargerElement(arr, 5));