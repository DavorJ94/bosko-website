
$(document).ready(function(){
	$("button").hover(function(){
   $("#myCarousel").carousel('pause');
})
$("button").mouseleave(function(){
   $("#myCarousel").carousel('cycle');
})
});
