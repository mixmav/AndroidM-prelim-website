/* Created By: Ishpreet Singh Bhasin and Manav Singh Gadhoke from Bal Bharati Public School, Pitampura */

setInterval(function(){
	$("#menuSpacer").css('width', $("#menu").width() - $("#andM").outerWidth() - $("#home").outerWidth() - $("#info-cont").outerWidth() - 50 + "px");
	$(".pattern").css('height', $(".four").height() + 100);
},1);

$("#info").hover(
	function(){
		$("#info").attr("src", "design/info-h.png")
	},
	function(){
		$("#info").attr("src", "design/info.png")
	}
);

$("#andM").click(function(){
	$("html, body").animate({scrollTop: 0});
});