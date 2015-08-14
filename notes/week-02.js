/**
 * Created by VicYork on 7/24/15.
 */

//  Higher Order functions  //

// Let's define a couple of collections to work with... we have an object called places and an array called names. We'll try to apply our functions on these collections.
var names = ["vic", "pab", "eli", "james", "yanti", "michel", "ursula", "alice", "sarah", "alexander", "tim", "melvin"];

var places = {
    reality: "Reality",
    universe: "The Known Universe",
    SuperCluster: "Laniakea",
    LocalSuperCluster: "Virgo Super Cluster",
    galaxy: "Milky Way Galaxy",
    galaxyArm: "Orion Spur",
    planet: "Earth",
    continent: "Americas",
    country: "United States of America",
    state: "Louisiana",
    city: "New Orleans",
    neighbourhood: "Desire"
};

var victor = new Array("human", "man", 34, "5'6''", "afro");
console.log(victor);

// Array.isArray() checks if an array is ana array.
console.log(Array.isArray(victor));
// Object.keys() returns an array of the object's keys.
console.log(Object.keys(places));

console.log("||-----|-----||--------------------||-----|-----||");
console.log("||-----|----------------------------------|-----||");
console.log("||-----|Implementing 'each' on collections|-----||");
console.log("||-----|----------------------------------|-----||");
console.log("||-----|----------------------------------|-----||");

// Each Function described/defined
// this each function list the elements or values in the array or object, not the index or key, respectively...
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

console.log("||-----|collection: array; action console.log|-----||");
each(names, console.log);
console.log("||-----|collection: object; action console.log|-----||");
each(places, console.log);


console.log("||-----|-----||--------------------||-----|-----||");
console.log("||-----|----------------------------------|-----||");
console.log("||-----|Implementing 'filter' on collections|-----||");
console.log("||-----|----------------------------------|-----||");
console.log("||-----|----------------------------------|-----||");


function filterWithEach(collection, test) {
    var output = [];
    each(collection, function (value) {
        if (test(value)) {
            output.push(value);
        }
    });
    return output;
}

var filterOnVowel = function (string) {
    return string[0] === 'L';
};

console.log("||-----|collection: array; test filter s|-----||");
var filteredArr = filterWithEach(names, filterOnVowel);
console.log(filteredArr);
console.log("||-----|collection: object; test filter s|-----||");
var filteredObj = filterWithEach(places, filterOnVowel);
console.log(filteredObj);


console.log("||-----|-----||--------------------||-----|-----||");
console.log("||-----|----------------------------------|-----||");
console.log("||-----|Implementing 'map' on collections|-----||");
console.log("||-----|----------------------------------|-----||");
console.log("||-----|----------------------------------|-----||");

// Map Function defined as a higher order function because each is embedded.
//
var map = function (collection, transform) {
    var output = [];
    each(collection, function (value) {
        output.push(transform(value));
    });
    return output;
};

var anon = function (value) {
    return value.toUpperCase();
};

console.log("||-----|collection: array; transform to upper case|-----||");
var mappedArr = map(names, anon);
console.log(mappedArr);
console.log("||-----|collection: object; transform to upper case|-----||");
var mappedObj = map(places, anon);
// or
var mappedObjj = map(places, function (value) {
    return value.toUpperCase();
});
console.log(mappedObj);
console.log(mappedObjj);


console.log("||-----|-----||--------------------||-----|-----||");
console.log("||-----|----------------------------------|-----||");
console.log("||-----|Understanding Filter|-----||");
console.log("||-----|----------------------------------|-----||");
console.log("||-----|----------------------------------|-----||");


/*
 * 1, Declare a function that takes two parameters, a coll. an a  cb.
 * 2, create an empty arr that golds the filtered information
 * 3, iterate ove the collection
 *   a, write oir if statement which passes each element of the coll. through the test
 *       i, push the truthy element into the nex arr
 * 4, return the new array
 * */

function filter(coll, test) {
    var filterArr = [];
    for (var i = 0; i < coll.length; i++) {
        if (test(coll[i])) {
            filterArr.push(coll[i]);
        }
    }
    return filterArr;
}

// let's return only the event numbers in this array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 7000, 10000000000, 23423, 45645, 56784265, 112, 1234, 457456, 13, 123, 4325134756745661234, 123, -4563464356, -314251, -4567, -9353, -213413452345345345341234, 0];

function numbersEven(arr) {
    return arr % 2 === 0;
}

console.log(filter(numbers, numbersEven));

console.log(filter(numbers, function (elm) {
    return elm > 5000;
}));


console.log("||-----|-----||--------------------||-----|-----||");
console.log("||-----|----------------------------------|-----||");
console.log("||-----|Understanding Reduce|-----||");
console.log("||-----|----------------------------------|-----||");
console.log("||-----|----------------------------------|-----||");

/*  Reduce is a function that takes 3 parameters. A coll. a callback, and an accumulator(the start value) It loops over the coll. and applies the accumulator against the callback. The call back takes 2 parameters, the accumulator, and every element of the collection. returns the accum.
 *
 * 1, declare the function with 3 parameters; a coll. a cb, and accum.
 * 2, loop over the coll.
 *   a, apply the accum. against the cb
 *       i, the cb takes 2 parameters; the accum. and every element in the collection
 * 3, return the accum.
 * */

function
(coll, cb, accum) {
    var curr = accum;
    for (var i = 0; i < coll.length; i++) {
        curr = cb(curr, coll[i]);
    }
    return curr;
}
// total
console.log(reduce(numbers, function (a, b) {
    return a + b
}, 0));
// factorials
console.log(reduce(numbers, function (a, b) {
    return a * b
}, 1));


/*reduce with each*/

/*function reduceWithEach(coll, cb, accum){
 var curr = accum;
 each(cb, function(coll, cb){
 curr = cb(curr, coll[i]);
 });
 return curr
 }*/

/*function each(collection, action) {
 if (Array.isArray(collection)) {
 for (var i = 0; i < collection.length; i++) {
 action(collection[i]);
 }
 } else {
 for (var key in collection) {
 action(collection[key]);
 }
 }
 }*/


var many = [1, 1];

function reduceWithEach(coll, cb, accum) {
    var curr = accum;
    each(coll, function () {
        for (var i = 0; i < coll[i]; i++)
            curr = cb(curr, coll[i]);
    });
    return curr;
}

console.log(reduceWithEach(many, function (a, b) {
    return a + b
}, 0));



