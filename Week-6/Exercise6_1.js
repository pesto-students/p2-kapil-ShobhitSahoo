function sumMax(arr,n){
    var currentMax = arr[0];
    var maxSoFar = arr[0];

    for(var i=1 ; i<n ; i++){
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        maxSoFar = Math.max(maxSoFar , currentMax);
    }
    return maxSoFar;
}

const arr = [1, 2, 3, 4, -10];
const arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const n = arr.length;
const n2 = arr2.length;
console.log('Max sum of contiguous array', sumMax(arr, n))
console.log('Max sum of contiguous array', sumMax(arr2, n2))