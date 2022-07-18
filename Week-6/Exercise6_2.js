function printSpiral(a, m, n) {
    let k = 0,
        l = 0,
        i;

    while (k < m && l < n) {
        // print the first row from the remaining rows

        for (i = l; i < n; ++i) {
            console.log(a[k][i]);
        }
        k++; // print the last column from the remaining columns

        for (i = k; i < m; ++i) {
            console.log(a[i][n - 1]);
        }
        n--; // print the last row from the remaining rows

        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                console.log(a[m - 1][i]);
            }
            m--;
        } // print the first column from the remaining columns

        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                console.log(a[i][l]);
            }
            l++;
        }
    }
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

var r = arr.length;
var c = arr[0].length;
printSpiral(arr, r, c);
