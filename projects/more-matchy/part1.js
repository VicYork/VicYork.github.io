//Use this file to implement Part One of your project
function each(collection, iterator) {
	if (Array.isArray(collection)) {
		for (var i = 0; i < collection.length; i++) {
			iterator(collection[i], i, collection)
		}
	} else {
		for (var key in collection) {
			iterator(collection[key], key, collection);
		}
	}
}
// ---
function filter(collection, test) {
	var output = [];
	each(collection, function (value) {
		if (test(value)) {
			output.push(value);
		}
	});
	return output;
}
// ---
function map(collection, transform) {
	var output = [];
	each(collection, function (value) {
		output.push(transform(value));
	});
	return output;
}
// ---
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
// ---
$.getJSON("data/animals.json", function (data) {
	var animals = data;
	var animalA = data[0];
	console.log(animalA);
	// -----> define a function that prints the keys in that animal function
	function objKeyPrinter(obj) {
		return Object.keys(obj).join(" ");
	}

	console.log("objKeyPrinter: " + objKeyPrinter(animalA));
	// ----->
	function objValuePrinter(obj) {
		var val = [];
		for (var key in obj) {
			if (typeof obj[key] === "string") {
				val.push(obj[key]);
			}
		}
		return val.join(" ");
	}

	console.log("objValPrinter: " + objValuePrinter(animalA));
	// ----->
	function arrValuePrinter(obj) {
		//var val = [];
		for (var key in obj) {
			if (Array.isArray(obj[key])) {
				//val.push(obj[key]);
				return obj[key].join(" ");
			}
		}
		//return val.join(" ");
	}

	console.log("arrKeyPrinter: " + arrValuePrinter(animalA));
	// ----->
	function dataTypeChecker(obj) {
		for (var key in obj) {
			if (Array.isArray(obj[key])) {
				console.log("DataTypeChecker: " + "array");
			} else if (obj[key] instanceof Object) {
				console.log("DataTypeChecker: " + "object");
			} else {
			}
		}
	}

	dataTypeChecker(animalA);
	// ----->
	function capitalizeVals(obj) {
		for (var key in obj) {
			var oldKVP;
			if (typeof obj[key] === "string") {
				oldKVP = obj[key];
				var newKVP = oldKVP[0].toUpperCase() + oldKVP.substring(1);
				obj[key] = newKVP;
				delete obj[oldKVP];
			}
		}
		return obj
	}

	console.log("capitalizeVals: " + capitalizeVals(animalA));
	// ----->

	//function strCapitalizer (obj) {
	//
	//	for (var key in obj) {
	//		if (typeof obj[key] === "string") {
	//
	//			var output = obj[key].split(" "); // split the string with a space
	//			for (var i = 0; i < output.length; i++) { // compared the length of output to i,
	//				output[i] = output[i].charAt(0).toUpperCase() + output[i].slice(1);
	//			}
	//		}
	//	}
	//}
	//console.log(strCapitalizer(animalA));
	function strCapitalizer(str) {
		var output = str.split(" "); // split the string with a space
		for (var i = 0; i < output.length; i++) { // compared the length of output to i,
			output[i] = output[i].charAt(0).toUpperCase() + output[i].slice(1);
		}
		return output.join(" ");
	}

	console.log("strCapitalizer: " + strCapitalizer(data[0].tagline));
	/*function strCap(str) {
	 return str.split(" ")
	 .map(function (string) {
	 return string[0].toUpperCase() + string.slice(1)
	 })
	 .join(" ");
	 }

	 console.log(strCap);*/

	// ----->
	/*function unique(collection, primer) {
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
	 }));*/
	// -----> extend takes two objects and copies the properties of the first object on to the second. It does not return anything.
	function extend(destination, source) {
		for (var key in source) {
			destination[key] = source[key];
		}
	}

	extend(animalA, {life: 100, age: 10});
	console.log("extend: " + animalA);
	// ----->
	function welcomeMessage(animal) {
		var message = "Welcome " + strCapitalizer(animal.species) + "!";
		return message;
	}

	console.log("welcomeMessage: " + welcomeMessage(animalA));
	// -----?
	function profileData(animal) {
		var profData = [],
			profDataSpec = "species: " + strCapitalizer(animal.species),
			profDataTag = "tagline: " + strCapitalizer(animal.tagline);
		profData.push(profDataSpec, profDataTag);
		return profData.join(", ");
	}

	console.log("profileData: " + profileData(animalA));

	// with noises array
	function profileData(animal) {
		var profData = [],
			profDataSpec = "species: " + strCapitalizer(animal.species),
			profDataTag = "tagline: " + strCapitalizer(animal.tagline),
			profDataNois = "noises: " + animal.noises;
		profData.push(profDataSpec, profDataTag, profDataNois);
		return profData.join(", ");
	}

	// -----> 1.b.1
	function relationshipLogger(animal) {
		return animal.relationships || "You have no relationships :(";
	}

	console.log(relationshipLogger(animalA));
	console.log(relationshipLogger({}));
	// -----> 1.b.2
	function correlation(species, animal) {
		var corr = "";
		var relationships = animal.relationships;
		if (relationships.friends.indexOf(species) > -1) {
			corr += species + "is a friend of " + animal.species
		}
		if (relationships.matches.indexOf(species) > -1) {
			//corr += corr === "" ? "" : "and";
			corr += species + "is a match of " + animal.species
		}
		if (corr == "") {
			corr += species + "has no relationship with " + animal.species
		}
		return corr
	}

	console.log(correlation("rabbit", animalA));
	// -----> 1.b.3
	function addFriend(friend, animal) {
		animal.relationships.friends.push(friend);
	}

	addFriend("rabbit", animalA);
	console.log(animalA);

	// -----> non-friend
	function nonFriends(user, collection) {
		var notFriends = [];
		for (var i = 0; i < collection.length; i++) {
			if (user != collection[i]) {
				if (user.relationships.friends.indexOf(collection[i]['species']) === -1) {
					notFriends.push(collection[i].species);
				}
			}
		}
		return notFriends;
	}

	console.log(nonFriends(data[3], data));

	// ----->
	console.log("<-------------->search<-------------> start");
	function search(collection, query) {
		var matches = [];
		each(collection, function (inspectee) {
			if (isComplex(inspectee)) {
				if (search(inspectee, query).length) {
					matches.push(inspectee);
				}
			} else {
				if (typeof inspectee === 'string' && typeof query === 'string') {
					if (inspectee.toUpperCase().indexOf(query.toUpperCase()) > -1) {
						matches.push(inspectee);
					}
				} else {
					if (inspectee === query) {
						matches.push(inspectee);
					}
				}
			}
		});
		return matches;
	}
	function isComplex(value) {
		if ((value !== null && typeof value === "object") || (Array.isArray(value))) {
			return true;
		} else {
			return false;
		}
	}
	/*var count = 0;
	function search(collection, query) {
		count++;
		var matches = [];
		_.each(collection, function (value) {
			if (isComplex(value)) {
				if (search(value, query).length) {
					// if (!_.contains(matches, value)) {
					//     matches.push(value);
					// }
					matches.push(value);
				}
			} else {
				if (typeof value === 'string' && typeof query === 'string') {
					if (value.toUpperCase().indexOf(query.toUpperCase()) > -1) {
						// if (!_.contains(matches, value)) {
						//     matches.push(value);
						// }
						matches.push(value);
					}
				} else {
					if (value === query) {
						// if (!_.contains(matches, value)) {
						//     matches.push(value);
						// }
						matches.push(value);
					}
				}
			}
		});
		return matches;
	}
	console.log(search(data, 'snake'));
	console.log('search was called ', count, 'times');*/
	console.log(search(animals, "true"));
	console.log("<-------------->search<-------------> end");


	// ----->
	function editPage(animal, key, value) {
		animal[key] = value;
		return animal;
	}

	editPage(data[3], "birthday", "03/18/1992");
	console.log(data[3]);

	// ----->
	function newUser(species, tagline, noises, friends, matches) {
		var newAnimal = {};
		newAnimal.species = species;
		newAnimal.tagline = tagline;
		newAnimal.noises = noises;
		newAnimal.friendships = {};
		newAnimal.friendships.friends = friends;
		newAnimal.friendships.matched = matches;
		data.push(newAnimal);
	}

	newUser("bat", "I want to drink your blood!", ["ekkk", "squeek"], ["lizard", "frog"], ["shrimp", "catfish"]);
	console.log(data[4]);
	console.log(data);


	// ----->
	/*function cleanseData(collection, searchedKey) {
	 var cleansedCollection = {};
	 for (var i = 0; i < collection.length - 1; i++) {
	 for (var key in collection[i]) {
	 if (key === searchedKey) {
	 cleansedCollection.push(collection[i][key]);
	 }
	 }
	 }
	 return cleansedCollection;
	 }

	 */


	map = function (collection, iterator) {
		var mapped = [];
		each(collection, function (item) {
			mapped.push(iterator(item));
		});
		return mapped;
		// map() is a useful primitive iteration function that works a lot
		// like each(), but in addition to running the operation on all
		// the members, it also maintains an array of results.

	};

	pluck = function (collection, key) {
		return map(collection, function (item) {
			return item[key];
		});
	};


	console.log("/----->");

	function cleanseData(collection, key) {
		return map(collection, function (item) {
			return item[key];
		});
	};

	console.log(cleanseData(data, "species"));


	/*function cleanseData(collection, searchedKey) {
	 var cleansedCollection = {};
	 var newCollection = [];
	 for (var i = 0; i < collection.length; i++) {
	 for (var key in collection[i]) {
	 if (key === searchedKey) {
	 extend(cleansedCollection,{[key]: collection[i][key], });
	 }
	 }
	 }
	 newCollection.push(cleansedCollection);
	 return newCollection;


	 function cleanseData(collection, searchedKey) {
	 var cleansedCollection = {};
	 var newCollection = [];
	 for (var i = 0; i < collection.length; i++) {
	 for (var key in collection[i]) {
	 if (key === searchedKey) {
	 extend(cleansedCollection,{[key]: collection[i][key], });
	 }
	 }
	 }
	 newCollection.push(cleansedCollection);
	 return newCollection;*/


	//console.log(cleanseData(data, "tagline"));
	//console.log(cleanseData(data, "noises"));

})


	.fail(function (error) {
		console.log("Your JSON maybe malformed!")
	});




