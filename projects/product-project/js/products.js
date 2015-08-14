/**
 * Created by VicYork on 07/08/15.
 */

//var _ = require('lodash');

$(function () {
	// ALL YOUR CODE GOES BELOW HERE //

	// initialize JSON data
	$.getJSON("data/product.json", function (products) {
		// check data in console
		console.log(products);

		//search
		var $search = function () {
			var $form = $("<form>"),
				$inputBox = $("<input>")
					.attr({"type": "text", "name": "search"}),
				$inputButton = $("<input>")
					.attr({"type": "submit", "value": "Submit"});

			$($inputBox).appendTo($form);
			$($inputButton).appendTo($form);
			$($form).prependTo("main");
		};
		$search();

var $productList
		//var searchProducts;
		// loop over data and format and populates the page
		var productList = $.map(products, function (item) {
			// $divItem holds each product, it's a product's space
			var $itemLink = $("<a>").addClass("prod"),
				counter = 0,
				$divItem = $("<div>")
					.click(function () {
						counter += 1;
						if (counter % 2 !== 0) {
							//game
							$("<li>")
								.attr("id", "item-y" + item.id)
								.append($("<h6>")
									.text("Product Destription: " + item.specs.join(". ")))
								.appendTo($ul);
							// Animation complete.};
						} else {
							$("#item-y" + item.id).remove();
						}
					})
					.addClass("list-group-item")
					.attr("id", "product"),
			// the image of the product
				$divItemImg = $("<div>")
					.addClass("product-image")
					.attr("id", "item-0" + item.id),
			// the info of the product
				$divItemInfo = $("<div>")
					.addClass("product-info")
					.attr("id", "item-x" + item.id),
			// a list to hold each product
				$ul = $("<ul>");
			$($divItem)
				// attach the product image space to the product space
				.append($divItemImg);
			// attach the product info space to the product space
			$($divItem)
				.append($divItemInfo);
			// attach image to the product image space
			$("<img>")
				.addClass("item-" + item.id)
				.attr("src", "img/product/thumbs/" + item.image)
				.appendTo($divItemImg);
			// attach a list to the product info space with product info
			$($ul)
				.appendTo($divItemInfo);
			$("<li>")
				.append($("<h5>")
					.text("Product Destription: " + item.desc))
				.appendTo($ul);
			$("<li>")
				.text("Price: $" + item.price)
				.appendTo($ul);
			$("<li>")
				.text("In stock: " + item.stock)
				.appendTo($ul);
			$("<h3>")
				.text(item.name)
				.appendTo($divItemImg)
				.css("text-align", "center");


			$($itemLink)// ... with the ability to hide or reveal more product information
				.append($divItem);
			return $itemLink;
			//return $divItem;
		});

		$("main").addClass("list-group");

		//$( "#clickme" ).click(function() {
		//	$( "#book" ).toggle( "slow", function() {
		//		// Animation complete.
		//	});
		//});

		$(".list-group").append(productList);
		$(".list-group-item")
			.css("display", "flex");
		$(".list-group-item")
			.css("padding", "2.5%");

	});
	// ALL YOUR CODE GOES ABOVE HERE //
});