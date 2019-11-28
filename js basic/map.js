function doublevalues(arr){
    return arr.map(function(val){
        return val*2;
    })
}

function valTimesIndex(arr){
    return arr.map(function(val,ind){
        return val*ind;
    })
}

function extractFullName(arr){
    return arr.map(function(val){
        return val.first+" "+val.last;
    })
}