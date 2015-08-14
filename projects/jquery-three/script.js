/**
 * Created by VicYork on 06/08/15.
 */

$(function () {

// Guardians
	var oldGuardians = [
		{
			name: "Star Lord",
			notes: "Team leader"
		},
		{
			name: "Drax the Destroyer"
		},
		{
			name: "Adam Warlock"
		},
		{
			name: "Quasar",
			notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
		},
		{
			name: "Rocket",
			notes: "Served as temporary leader during Star-Lord's absence"
		},
		{
			name: "Gamora"
		}
	];
	var newGuardians = [
		{
			name: "Mantis",
			notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
		},
		{
			name: "Groot",
			notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
		},
		{
			name: "Jack Flag"
		},
		{
			name: "Quasar",
			notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
		},
		{
			name: "Cosmo the Spacedog",
			notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
		},
		{
			name: "Major Victory",
			notes: "Also member of the alternate reality Guardians of the Galaxy team."
		},
		{
			name: "Bug"
		},
		{
			name: "Moondragon",
			notes: "Resurrected by Drax and Phyla-Vell."
		}
	];


// Consolidated guardians
	var all = $.merge(oldGuardians, newGuardians);
	console.log(all);


// Mapped guardians
	var allMapped = all.map(function (guardian) {
		return guardian.name;
	});
	console.log(allMapped);


// Filtered guardians
	var allFiltered = all.filter(function (guardian) {
		return guardian.name !== "Groot";
	});
	console.log(allFiltered
			.map(function (guardian) {
				return guardian.name
			})
	);


// Table guardians' notes

	/*
	 * this is what i want...
	 *
	 *   <table>
	 *       <tr>
	 *           <td>guardian a</td>
	 *           <td>guardian b</td>
	 *           </tr>
	 *       <tr>
	 *   </table>
	 *
	 * */

	function listHeros(guard) {
		var $tbl = $("<table/>");
		var $tr = $("<tr/>").appendTo($tbl);
		$("<th/>")
			.html("Names: ")
			.appendTo($tr);
		$("<th/>")
			.html("Notes: ")
			.appendTo($tr);

		guard.forEach(function (hero) {
			var $tr = $("<tr/>").appendTo($tbl);

			$("<td/>")
				.html(hero.name)
				.appendTo($tr);
			$("<td/>")
				.html(hero.notes || " ... no notes available... ")
				.appendTo($tr);

		});

		$(".the-guardians").append($tbl);
		$($tbl).css("padding", "5px");
		$("$tr").css("padding", "5px");
		$("th").css("padding", "5px");

	}

	listHeros($.merge(oldGuardians, newGuardians));


});

