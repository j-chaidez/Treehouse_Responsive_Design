var open = 0;

function showOrHide(width) {
    width >= 748 ? $('.main-nav').show() : $('.main-nav').hide();
}

showOrHide($(document).width());

$(window).resize(function () {
    if (open != 1) {
        showOrHide($(document).width());
    }

    if ($(document).width() >= 748) {
        showOrHide($(document).width());
        open = 0;
    }

});

$('.menu-icon').click(function () {
    open == 0 ? ($('.main-nav').slideDown("medium"), open = 1) : ($('.main-nav').slideUp("medium"), open = 0);
});

