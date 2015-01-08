
$(document).ready(function() {
    /* Scroll event handler */
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
});

/* Scroll the background layers */

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#parallax-bcg1').css('top',(0-(scrolled*.25))+'px');
    $('#parallax-bcg2').css('top',(0-(scrolled*.5))+'px');
    $('#parallax-bcg3').css('top',(0-(scrolled*.75))+'px');
}

/* Gallery slide out */

$(document).ready(function(){
    $('.gallery02').hide();
    $('.gallery03').hide();
    $(".container").hide();
    $('.smDot01').fadeTo(300, 1.0);

    $('.arrow').click(function(event){
        event.preventDefault ();
        $(this).next(".container").toggle();
    });

    $('.smDot01').click(function(event){
        event.preventDefault ();
        $("[class^=gallery]").hide()
        $('.gallery01').show();
        $('.smDot01').fadeTo(300, 1.0);
        $('.smDot02').fadeTo(300, .50);
        $('.smDot03').fadeTo(300, .50);
    });


    $('.smDot02').click(function(event){
        event.preventDefault ();
        $("[class^=gallery]").hide()
        $('.gallery02').show();
        $('.smDot02').fadeTo(300, 1.0);
        $('.smDot01').fadeTo(300, .50);
        $('.smDot03').fadeTo(300, .50);
    });

    $('.smDot03').click(function(event){
        event.preventDefault ();
        $("[class^=gallery]").hide()
        $('.gallery03').show();
        $('.smDot03').fadeTo(300, 1.0);
        $('.smDot01').fadeTo(300, .50);
        $('.smDot02').fadeTo(300, .50);

    });
});

/* Slide Out Message */

$(document).ready(function() {

    $(".arrow01").click(function () {
        if ($(this).css("margin-left") == "150px") {

            $('.message').stop().animate(
                {"margin-left": '-=150'})
            $('.arrow01').stop().animate(
                {"margin-left": '-=150'});
        }

        else {
            $('.message').stop().animate({"margin-left": '+=150'});
            $('.arrow01').stop().animate({"margin-left": '+=150'})


        }

        });
});

/* Froggie Move */


$(document).ready(function() {
    var mouseFollow = false;
    $('#froggieArea').mousemove(function (e) {
        var xCord = e.pageX;
        var yCord = e.pageY;

        if (mouseFollow){
            $('.froggie').offset({
                left: e.pageX,
                top: e.pageY

            })
        }

    });

    $(window).click(function (e) {

        if (mouseFollow){
            mouseFollow=false;
        }

        else {
            mouseFollow = true;
        }

    })

});












