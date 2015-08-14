//Any code in part1.js is still accessible in this file! 
//Try it out. See if you can console.log a variable from part1 (like animals) from this page.


console.log("-----------///-------------");
console.log("-----------/Part Two: Accessing and Manipolating our Data/-------------");
console.log("-----------/Scenario 1: Animal Profile Page/-------------");
console.log("-----------/1a: Log the Animal Personal Data/-------------");
// 1a: Log the Animal Personal Data
var profileAnimal = animals[animals.indexOf(fishGuy)];


console.log(profileAnimal);
console.log("-----------///-------------");
for (var key in profileAnimal) {
    if (profileAnimal[key] instanceof Array) {
        console.log(key + ": " + profileAnimal[key])
    } else if (profileAnimal[key] instanceof Object) {
        console.log(key + ": click here for more data...");
    } else {
        console.log(key + ": " + profileAnimal[key]);
    }
}
// --> A1
/*var profileAnimal = animals[0];
console.log(profileAnimal);
console.log("-----------///-------------");
for (var key in profileAnimal) {
    console.log("key" + key)
    if (profileAnimal[key]Array) {
        console.log(key + ": " + profileAnimal[key])
    } else if (profileAnimal[key] instanceof Object) {
        console.log(key + ": click here for more data...");
    } else {
        console.log(key + ": " + profileAnimal[key]);
    }
}*/
// -->A2
console.log("-----------/1a: Animal Relationship Data/-------------");
// 1a: Animal Relationship Data
// Access the relationships fo the profileAnimal and log friends
console.log("Friends: " + profileAnimal.relationships.friends);
// Access the relationships fo the profileAnimal and log matches
console.log("Matches: " + profileAnimal.relationships.matches);
//console.log(profileAnimal.relationships.friends.indexOf("k9s"));
// Delete k9s from my friends list safely
console.log("-----------/k9s was removed safely/-------------");
profileAnimal.relationships.friends.splice(profileAnimal.relationships.friends.indexOf("k9s"), 1);
console.log("Friends: " + profileAnimal.relationships.friends);
console.log("-----------/Scenario 2: Browse Animals Page/-------------");
console.log("-----------/2a: Log the Animals in a List/-------------");
// 2a: Log the Animals in a List
for (var i = 0; i < animals.length; i++) {
    console.log((i + 1) + ". " + animals[i].species + ":" + animals[i].tagline)
}
/*



 console.log("-----------/2b: Filter Animals (extra credit)/-------------");



 */


console.log("-----------/Scenario 3: Search and Add Friends/-------------");
// Loop through the animals collection to log the list of species
function seaAnimals(input) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].species === input) {
            return console.log(animals[i].species);
        }
    }
}
// log the input; the k9s
seaAnimals("k9s");
// Now add an animal to the animal we searched for

 //var k9s = animals[animals.indexOf(pup)];
 var k9s = animals[animals.indexOf(pup)].species;
 var it = "flying-fish";
 for (var i = 0; i < animals.length; i++) {
 if (animals[i].species === it) {
     animals[i].relationships.friends.push(input);
     animals[i].relationships.friends.push(input);
     return console.log(animals[i].relationships.friends.push(input) + " : " +
     animals[i].relationships.friends.push(input))
 }


 console.log("-----------/Logged in Animal/-------------");
 var profileAnimal2 = animals[animals.indexOf(animal)];

 console.log(profileAnimal2);

 profileAnimal2.species = "turtle";
 console.log(profileAnimal2.species);
 console.log(profileAnimal2);
 profileAnimal2.noises = ["turtle, turtle...", "SAAANAP!", "munch", "slow"];
 console.log(profileAnimal2.noises);
 //animals[2].relationships.matches.push(profileAnimal2.species);

 for (i = 0; i < animals.length; i++) {
 console.log(animals[i].relationships.matches);

 //animals[i].relationships.matches.push(profileAnimal2.species);
 }


 for (var q = 0; q < animals.length; q++) {
 animals[q]['name'] = animals[q]['species'];
 delete animals[q]['species'];
 }

 console.log(animals[0].name);
 console.log(animals[1].name);
 console.log(animals[2].name);
 console.log(animals[3].name);
 //console.log(animals[3].relationships.matches);


 //// Higher Order finctions
 //
 //var names = ["vic", "pab", "yo"];
 //
 //var bootcamp = {
 //    students: names
 //};
 //
 //function each(collection, action) {
 //    if (Array.isArray(collection)) {
 //        for (var  i=0; i < collection.length; i++) {
 //            action(collection[i]);
 //        }
 //    } else {
 //        for (var key in collection) {
 //            action(collection[key]);
 //        }
 //    }
 //}
 //
 //each(bootcamp, console.log);
 //
 //
 //each(names, console.log);

 */



