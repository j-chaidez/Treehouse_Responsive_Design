var carouselReminder = 0;

$('.logos').hide();

$('#html5').fadeIn("medium");

var imgArray = ['#html5', "#css3", "#javascript", "#jquery"];

var carousel = function () {

    $(imgArray[carouselReminder]).fadeOut("medium", function() {
        carouselReminder == imgArray.length - 1 ? carouselReminder = 0 : carouselReminder += 1;
        $(imgArray[carouselReminder]).fadeIn("medium");   
    });


}

setInterval(carousel, 2000);