var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];
var arr4 = [10,20,54,5];

//combine all the array
var combined = [...arr1,...arr2,...arr3];

//find max element in arr
var max = Math.max(...arr4);


//some more examples

function smallestValue(...args) {
    return Math.min(...args);
}

function placeInMiddle(arr,vals) {
    let mid = Math.floor(arr.length / 2);
    arr.splice(mid,0,...vals);
}

function joinArrays(...args) {
    return args.reduce( (acc,next) => acc.concat(next),[] );
}