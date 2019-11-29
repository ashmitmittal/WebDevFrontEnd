function filterByValue(arr,key)
{
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
}

function find(arr,search) {
    return arr.filter(function(val){
        return val === search;
    });
}

 function removeVowels(str) {
     var vowels = "aeiou";
     return str.toLowerCase().split("").filter(function(val){
         return vowels.indexOf(Val) === -1; 
     }).join('');
 }

 function doubleOddNumbers(arr){
     return arr.filter(function(val){
         return val % 2 !== 0;
     }).map(function(val){
         return val*2;
     })
 }