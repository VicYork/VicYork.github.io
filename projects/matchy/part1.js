// Use this file to implement Part One of your project

// creating an animal object
var animal = {};
// creating a key named species and assign it a value of primates.
animal.species = "Primates";
// check
console.log(animal.species);
// used bracket notation to add a tagline property
animal["tagline"] = "Big brains!";
// check
console.log(animal["tagline"]);
// added a moise to the animal
animal.noises = null;
// check
console.log(animal.noises);
// check's animal
console.log(animal);
// create noise array
var noiseArray = [];
// att sound to noise array
noiseArray[0] = "MANNN!!!";
console.log(noiseArray);
//
noiseArray.push("FIRE");

console.log(noiseArray);

noiseArray.unshift("Ohh, ohh, ahh, ahhh");
console.log(noiseArray);
noiseArray[3] = "Food... HOT!!!";
console.log(noiseArray);
console.log(noiseArray.length);
console.log(noiseArray.length - 1);
console.log(noiseArray.indexOf("Food... HOT!!!"));
console.log(noiseArray);

noizes = "noises";

//animal.noise(noizes);
console.log(animal[noizes]);
animal[noizes] = noiseArray;
console.log(animal);
//animal.noise = noiseArray;
//console.log(animal);


//////////////////////////////////////////////////////////////////////


var animals = [];

animals.push(animal);

//console.log(animals);

var quakers = {species: 'duck', tagline: 'Afflack', noises: ['quack', 'honk', 'sneeze', 'growl']};


animals[1] = quakers;

console.log(animals);

var pup = {
        species: "k9s",
        tagline: "I is da dog!",
        noises: ["RUFF, ruff", "Bark!", "Ahhh WOOO", "growl... wait... am I a quakers?"]
    },
    fishGuy = {
        species: "flying-fish",
        tagline: "I is da moose?! no... wait. I mean fish!/**/",
        noises: ["...", "......", "I'm a gosh darn fish!", "waters"]
    };

animals.push(pup);
animals.push(fishGuy);

console.log(animals.length);


var friends = [];

console.log(animals);


friends.push(animals[animals.indexOf(pup)].species, animals[animals.indexOf(animal)].species);

/*
 friends.push(animals[animals.indexOf(pup)]);
 friends.push(animals[animals.indexOf(fishGuy)]);
 friends.push(animals[animals.indexOf(animal)]); */
 friends.push(animals[animals.indexOf(quakers)]);


console.log("////////////////////  animals  ////////////////////");
console.log(animals);
console.log("////////////////////  friends  ////////////////////");
console.log(friends);

var relationships = {};

relationships["friends"] = friends;

console.log(relationships);

var matches = [];

relationships["matches"] = matches;

relationships.matches.push(animals[animals.indexOf(fishGuy)].species, animals[animals.indexOf(pup)].species, animals[animals.indexOf(animal)].species);

console.log(relationships);

for (var i = 0; i < animals.length; i++) {
    animals[i].relationships = relationships;
}

//for (var i =0]; i < animals.length; i++) {
//    animals[i].relationships = relationships
//}

console.log("---------------------");
console.log(animals);






















