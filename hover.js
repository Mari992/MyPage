$(document).ready(function() {
	
	/*hover za slike Usluge*/
	
    $('#image1 .apear').hide();
    $('#image1 img').animate({
        opacity:1     
    });

    $('#image1 img').hover(function() {
        $(this).stop().animate({opacity:.3},200);
        $('#image1 .apear').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('#image1 .apear').fadeOut();
    });
	
	
	$('#image2 .apear').hide();
    $('#image2 img').animate({
        opacity:1     
    });

    $('#image2 img').hover(function() {
        $(this).stop().animate({opacity:.3},200);
        $('#image2 .apear').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('#image2 .apear').fadeOut();
    });
	
	
	$('#image3 .apear').hide();
    $('#image3 img').animate({
        opacity:1     
    });

    $('#image3 img').hover(function() {
        $(this).stop().animate({opacity:.3},200);
        $('#image3 .apear').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('#image3 .apear').fadeOut();
    });
	
	
	$('#image4 .apear').hide();
    $('#image img').animate({
        opacity:1    
    });

    $('#image4 img').hover(function() {
        $(this).stop().animate({opacity:.3},200);
        $('#image4 .apear').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('#image4 .apear').fadeOut();
    });
	
	
	$('#image5 .apear').hide();
    $('#image5 img').animate({
        opacity:1    
    });

    $('#image5 img').hover(function() {
        $(this).stop().animate({opacity:.3},200);
        $('#image5 .apear').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('#image5 .apear').fadeOut();
    });
	
/*Pojavljivanje i nestajanje teksta u Uslugama*/

		$("#image1 img").click(function () {
            $("#image1 div .tekst1").slideToggle();
        });
		$("#image2 img").click(function () {
            $("#image2 div .tekst2").slideToggle();
        });
		$("#image3 img").click(function () {
            $("#image3 div .tekst3").slideToggle();
        });
		$("#image4 img").click(function () {
            $("#image4 div .tekst4").slideToggle();
        });
		$("#image5 img").click(function () {
            $("#image5 div .tekst5").slideToggle();
        });
	
	
/*fade za tekst O nama*/
	
	$('#about p').hide();
	$('#about h1').hide();
	
	$("#about .col-sm-12").mouseover(function(){
        $("#about p").show(3000);
		$("#about h1").show(3000);
    });
	
	/*Hide/show Novosti*/
	$(".row .novosti").mouseover(function(){
	$(".row .novosti").hide(1000);
	$(".row .novosti").show(1000);
	});
	$(".row .novosti").mouseleave(function(){
	$(".posts").stop();
	});
	$(".posts").mouseover(function(){
	$(".posts").stop();	
	});
	
	/*Hover za posts u Novosti*/
	$('#news .posts a').hover(function() {
        $(this).stop().animate({opacity:.6},200);
	}, function(){
		$(this).stop().animate({opacity:1},500);
	});
});
/*next/preview*/
$("#slider-prev").click(function(){
	if($(".slider-a").is(":visible")){
		$(".slider-a").hide(2000);
	}else{
		$(".slider-b").hide(2000);
	}     				
});

$("#slider-next").click(function(){
	if(($(".slider-a").not(":visible")) && ($(".slider-b").is(":visible"))){
		$(".slider-a").show(2000);
	}else if(($(".slider-a").not(":visible")) && ($(".slider-b").not(":visible"))){
		$(".slider-b").show(2000);
	}
});


