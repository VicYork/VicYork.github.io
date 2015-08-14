/**
 * Created by VicYork on 12/08/15.
 */

$(function () {
	// ALL YOUR CODE GOES BELOW HERE //

	// Load the product.json //
	$.getJSON('data/product.json', function (data) {
		console.log(data);
		$('main').attr('class', "list-group");
		var $pageList = $('<div/>');

		var $rows = $.map(data, function(products){
			var $row = $('<div/>')
				.attr('id', + products.id)
				.addClass("list-group-item")
				.css({'display' : 'flex'});

			$('<img/>')
				.attr('src', 'img/product/thumbs/' + products.image)
				.appendTo($row);


			var $ul = $('<ul/>')
				.appendTo($row);

			for (var key in products) {
				if (Array.isArray(products[key])) {
					var $li = $('<li/>').text(key + ": " + products[key]);
					$ul.append($li);
				}
			}
			return $row;
		});
		$pageList.append($rows);
		$('main').append($pageList);
		console.log(data);
	});

	// ALL YOUR CODE GOES ABOVE HERE //
});

