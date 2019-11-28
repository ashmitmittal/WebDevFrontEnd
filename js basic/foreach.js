function doubleValues(array){
    var newarr = [];
    array.forEach(function(val){
        newarr.push(val*2);
    });
    return newarr;
}
var arr = [1,2,3];
var arr2=[];
arr2= doubleValues(arr);
console.log(arr2);