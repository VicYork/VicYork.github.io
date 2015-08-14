/**
 * Created by VicYork on 8/4/15.
 */

$(function () {
	var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp", "Captain Planet", "Son Goku", "Jesus?"];


	$('.content')
		.append(createUnorderedList(avengers, 'list-avengers', 'avenger'));

	// Code goes here!
	function createUnorderedList(array, listId, className) {
		// list = list.sort();
		var $ul = $('<ul/>')
			.attr('id', listId);
		array.forEach(function (item) {
			// given Iron Man => iron-man //
			var id = item.toLowerCase().split(" ").join("-");
			$('<li/>')
				.attr('id', id)
				.addClass(className)
				.text(item)
				.appendTo($ul);
		});
		return $ul;
	}

	function removeAvenger(avenger) {
		var className = avenger.toLowerCase().split(" ").join("-");
		$("." + className).remove();
	}

	// removeAvenger('Iron Man');
	// removeAvenger('Wasp');

	function getData(className) {
		var output = [];
		var $listItems = $(className);
		//console.log($listItems);
		$listItems.each(function (key) {
			output.push($listItems[key].innerHTML);
		});
		return output;
	}

	var data = getData($('.avenger')).sort();
	$('#avengers').empty();
	var $ul = createUnorderedList(data);
	$('#avengers').append($ul);


	function onMouseOver() {
		var currentBgColor = $(this).css("background-color");
		if (currentBgColor === "rgb(255, 0, 0)") {
			$(this).css("background-color", "blue");
		}
		else {
			$(this).css("background-color", "red");
		}
	}

	$("#iron-man").on("mouseover", onMouseOver).fadeIn(5000);

	$("#ant-man").fadeTo(10000, .75);

	var $sonGoku = $("#son-goku");

	function addKeydownHandler($elm, callback) {
		$elm.keydown(callback);
	}

	addKeydownHandler($("#target"), function(){
		console.log("dude")
	});

	/*on(keydown, function () {
	 $sonGoku.css("color", "yellow")
	 });


	 $sonGoku.keydown(function () {
	 this.css("color", "yellow");
	 });
	 */

	//function goSuperSayian($element, callback){
	//	$element+.+callback;
	//}
	//
	//goSuperSayian($sonGoku, keyDown);


});