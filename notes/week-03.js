/**
 * Created by VicYork on 7/28/15.
 */

// looping backward

function each(collection, action) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i]);
        }
    } else {
        for (var key in collection) {
            action(collection[key]);
        }
    }
}


//  each right  //

function eachRight(collection, action) {
    if (Array.isArray(collection)) {
        for (var i = collection.length - 1; i > -1; i--) {
            action(collection[i]);
        }
    } else {
        var keys = Object.keys(collection);
        for (var j = keys.length - 1; j > -1; j--) {
            action(collection[keys[j]]);
        }
    }
}


eachRight([1, 2, 3, 4, 5, 6], console.log);
eachRight({place: "nola", state: "cali", planet: "pluto"}, console.log);


//  reduce right  //

function reduceRight(collection, combine, start) {
    var combined = start;
    eachRight(collection, function (value) {
        combined = combine(combined, value);
    });
    return combined;
}

console.log(reduceRight([1, 2, 3, 4, 5, 6], function (prev, next) {
    return prev + next;
}, ""));


//  contains  //

function contains(collection, value) {
    if (Array.isArray(collection)) {
        return collection.indexOf(value) > -1;
    } else {
        for (var key in collection) {
            if (collection[key] === value) {
                return true;
            }
        }
        return false;
    }
}

console.log(contains([1, 2, 3, 4, 5, 6], 4));
console.log(contains({place: "nola", state: "cali", planet: "pluto"}, 4));


//  unique //

var visit = {place: "nola", state: "cali", planet: "pluto", city: "nola"};
var hasDupes = [1.123, 2.232, 2.232, 3.41, 3.2346, 466.3, 5.66, 23.634, 24, 3, 4.34, 234.00001];

function unique(collection, primer) {
    var uniqueValues = [];
    each(collection, function (value) {
        var primed = primer ? primer(value) : value;
        if (!contains(uniqueValues, primed)) {
            uniqueValues.push(primed);
        }
    });
    return uniqueValues;
}
console.log(unique(hasDupes, function (float) {
    return Math.floor(float);
}));