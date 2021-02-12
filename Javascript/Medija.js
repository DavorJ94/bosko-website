$( document ).ready(function() {

function backgroundcols(){
	var col = $('.medija.gadgeti.menjanjepozadine.padajucimeni, option:checked').val();
	if (col == "2"){	
		$('.pozadina').css({background:'linear-gradient(155deg, rgba(17,13,4) 0%, rgba(36,8,8) 10%, rgba(47,10,10) 20%, rgba(100,13,13) 30%, rgba(150,13,13) 40%, rgba(200,13,13) 50%, rgba(150,13,13) 60%, rgba(100,13,13) 70%, rgba(47,10,10) 80%, rgba(36,8,8) 90%, rgba(0,0,0) 100%'});
	}
	else if (col == "1"){
		
		$('.pozadina').css({background:'linear-gradient(155deg, rgba(17,13,4) 0%, rgba(36,16,8) 10%, rgba(47,21,10) 20%, rgba(100,38,13) 30%, rgba(150,71,13) 40%, rgba(200,92,13) 50%, rgba(150,73,13) 60%, rgba(100,47,13) 70%, rgba(47,19,10) 80%, rgba(36,8,8) 90%, rgba(0,0,0) 100%'});
	}
	else if (col == "3"){
		$('.pozadina').css({background: 'linear-gradient(155deg, rgba(0,0,0,1) 0%, rgba(34,36,8,1) 10%, rgba(70,59,14,1) 20%, rgba(107,105,20,1) 30%, rgba(166,181,21,1) 40%, rgba(206,212,11,1) 50%, rgba(128,131,14,1) 60%, rgba(84,89,14,1) 70%, rgba(87,81,16,1) 80%, rgba(36,34,8,1) 90%, rgba(0,0,0,1) 100%)'});
	}
	else if (col=="4"){
		$('.pozadina').css({background: 'linear-gradient(155deg, rgba(0,0,0) 0%, rgba(8,23,36) 10%, rgba(14,41,70) 20%, rgba(20,62,107) 30%, rgba(21,74,181) 40%, rgba(11,85,212) 50%, rgba(14,63,131) 60%, rgba(14,54,89) 70%, rgba(16,47,87) 80%, rgba(8,25,36) 90%, rgba(0,0,0) 100%)'});
	}
}
$("#medium").change(backgroundcols);
backgroundcols();


$(":input").bind('keyup mouseup', function () {
  var bcol = $('[name = granice]').val();
	if(bcol=="1"){
	$('.muzika').css("border", "5px solid white");
	$('.klip').css("border", "5px solid white");
	$('.gadgeti').css("border", "5px solid white");
}
if(bcol=="2"){
	$('.muzika').css("border", "10px solid white");
	$('.klip').css("border", "10px solid white");
	$('.gadgeti').css("border", "10px solid white");
}
if(bcol=="3"){
	$('.muzika').css("border", "15px solid white");
	$('.klip').css("border", "15px solid white");
$('.gadgeti').css("border", "15px solid white");
}
if(bcol=="4"){
	$('.muzika').css("border", "20px solid white");
	$('.klip').css("border", "20px solid white");
$('.gadgeti').css("border", "20px solid white");
}
if(bcol=="5"){
	$('.muzika').css("border", "25px solid white");
	$('.klip').css("border", "25px solid white");
	$('.gadgeti').css("border", "25px solid white");
}
if(bcol=="0"){
	$('.muzika').css("border", "1px solid black");
	$('.klip').css("border", "1px solid black");
	$('.gadgeti').css("border", "none");
}

  });
function promenavideanajmom(){
$('#najmom').click(function(){
	$("#preuzeti").attr("href","Datoteke/Najbolji momenti.mp4");
	$("#preuzeti").attr("download","Najbolji momenti.mp4");
	$("#nm1").attr('src', "Datoteke/Najbolji momenti.mp4");
	$("#nm2").attr('src', "Datoteke/Najbolji momenti.ogg");
	$(".tekstklip").text('Najbolji momenti 1');
	$("#vid").attr('autoplay','');
	$("#vid")[0].load();
});
}
promenavideanajmom();

function promenavideanajmom2(){
$('#najmom2').click(function(){
	$("#preuzeti").attr("href","Datoteke/formula 1.mp4");
	$("#preuzeti").attr("download","formula 1.mp4");
	$("#nm1").attr('src', "Datoteke/formula 1.mp4");
	$("#nm2").attr('src', "Datoteke/formula 1.ogg");
	$(".tekstklip").text('Najbolji momenti 2');
	$("#vid").attr('autoplay','');
	$("#vid")[0].load();
});
}
promenavideanajmom2();

function promenavideatop10(){
$('#top10').click(function(){
	$("#preuzeti").attr("href","Datoteke/Top 10.mp4");
	$("#preuzeti").attr("download","Top 10.mp4");
	$("#nm1").attr('src', "Datoteke/Top 10.mp4");
	$("#nm2").attr('src', "Datoteke/Top 10.ogg");
	$(".tekstklip").text('Top 10');
	$("#vid").attr('autoplay','');
	$("#vid")[0].load();
});
}
promenavideatop10();

$('#klip').delay(500).animate({'opacity':'1'},1500);
$('#muzika').delay(2000).animate({'opacity':'1'},1500);
$('#poz').delay(4000).animate({'opacity':'1'},1000);
$('#bor').delay(6000).animate({'opacity':'1'},1000);
$('#vd').delay(4000).animate({'opacity':'1'},1000);


document.getElementById("a1").onclick = function() {pustiPauziraj()};

var video = document.getElementById("vid"); 

function pustiPauziraj() { 
  if (video.paused)
    video.play(); 
  else
    video.pause();
}


document.getElementById("a2").onclick = function() {zvukNa50ili100()};

function zvukNa50ili100(){
	if(video.volume!=1)
	video.volume=1;
else
	video.volume=0.5;
}

 
document.getElementById("a3").onclick = function() {sirina()};
function sirina() { 
   video.style.width = "300px";
}

document.getElementById("a4").onclick = function() {duzina()};
function duzina() { 
   alert("Dužina videa je "+video.duration+" sekundi");
}

var audio=document.getElementById("aud");

document.getElementById("b1").onclick = function() {pusti()};

function pusti() { 
    audio.play(); 
}

document.getElementById("b2").onclick = function() {pauziraj()};

function pauziraj() { 
    audio.pause(); 
}
document.getElementById("b3").onclick = function() {zvukNa50ili100aud()};
function zvukNa50ili100aud(){
	if(audio.volume!=1)
	audio.volume=1;
else
	audio.volume=0.5;
}
document.getElementById("b4").onclick = function() {duzinaaudio()};
function duzinaaudio() { 
   alert("Dužina muzike je "+audio.duration+" sekundi");
}
});

