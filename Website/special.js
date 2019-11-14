/* Created By: Ishpreet Singh Bhasin and Manav Singh Gadhoke from Bal Bharati Public School, Pitampura */

$("#menu").fadeOut(0);
$(".one > img:nth-child(12)").fadeOut(0);
$(".one > img:nth-child(1), .one > img:nth-child(3)").fadeOut(0);
$(".one > img:nth-child(2)").css('height', '0px');
$logoHold = 0;
$limbsHold = 0;

$(window).load(function(){
	setTimeout(function(){
		$("html, body").scrollTop(0);
		$(".one > img:nth-child(1)").fadeIn(500);
		setTimeout(function(){
			$(".one > img:nth-child(2)").css('width', $(".one > img:nth-child(1)").width() + "px");
			$(".one > img:nth-child(2)").animate({height: $(".one > img:nth-child(1)").height() + "px"}, 1000);
			setTimeout(function(){
				$logoHold = 1;
				setTimeout(function(){
					$(".one > img:nth-child(2)").css('webkitAnimationName', 'mShrink').css('animationName', 'mShrink');
					$(".one > img:nth-child(2)").fadeOut(1000);
					$(".one > img:nth-child(3)").fadeIn(1000);
					setTimeout(function(){
						$(".one > img:nth-child(4)").animate({top: "125px"}, 500);
						setTimeout(function(){
							$(".one > img:nth-child(5)").animate({top: "125px"}, 500);
							$(".one > img:nth-child(8)").css('opacity', '0.25');
							setTimeout(function(){
								$(".one > img:nth-child(6)").animate({top: "125px"}, 500);
								$(".one > img:nth-child(8)").css('opacity', '0.5');
								setTimeout(function(){
									$(".one > img:nth-child(7)").animate({top: "125px"}, 500);
									$(".one > img:nth-child(8)").css('opacity', '0.75');
									setTimeout(function(){
										$(".one > img:nth-child(8)").css('opacity', '1');
										$(".one > img:nth-child(9)").animate({top: "125px"}, 500);
										setTimeout(function(){
											$(".one > img:nth-child(10)").animate({top: "125px"}, 500);
											setTimeout(function(){
												$limbsHold = 2;
												$(".limbs > img:nth-child(1)").animate({left : ($(window).width() - $(".one img").width())/2 + "px" }, 500);
												setTimeout(function(){
													$(".limbs > img:nth-child(2)").animate({left : ($(window).width() - $(".one img").width())/2 + "px" }, 500);
													setTimeout(function(){
														$(".limbs > img:nth-child(3)").animate({left : ($(window).width() - $(".one img").width())/2 + "px" }, 500);
														setTimeout(function(){
															$(".limbs > img:nth-child(4)").animate({left : ($(window).width() - $(".one img").width())/2 + "px" }, 500);
															setTimeout(function(){
																end();
															},500);
														},250);
													},250);
												},250);
											},1000);
										},300);
									},500);
								},500);
							},500);
						},500);
					},1000);
				},1000);
			},1000);
		},500);
	},500);
});

$("#skip").click(function(){
	$(".one").html('<img src="img/logo.png">');
	end();
});

function end(){
	$("html").css('overflow', 'auto');
	$("#menu").fadeIn(500);
	$("#skip").fadeOut(500);
	$(".one > img:nth-child(12)").fadeIn(0);
	$limbsHold = 1;
}

setInterval(function(){

$(".one > img").css('left', ($(window).width() - $(".one > img").width())/2 + "px");

if ($limbsHold == 0) {
	$(".limbs > img:nth-child(1), .limbs > img:nth-child(3)").css('left', (-1) * $(".one > img").width() + 'px');
	$(".limbs > img:nth-child(2), .limbs > img:nth-child(4)").css('left','100%' );
}
else if ($limbsHold == 1){
	$(".limbs > img:nth-child(1), .limbs > img:nth-child(2), .limbs > img:nth-child(3), .limbs > img:nth-child(4)").css('left', ($(window).width() - $(".one img").width())/2 + "px");
}
else if ($limbsHold == 2){

}

if($logoHold == 1){
	$(".one > img:nth-child(2)").css('width', $(".one > img:nth-child(1)").width() + "px").css('height', $(".one > img:nth-child(1)").height() + "px");
}

},1);

$("#countdown").countdown("2015/09/01", function(event) {
	$(this).text(event.strftime('%D days %Hh %Mm %Ss'));
});