$(document).ready(function() {


    /* Scroll event handler */
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });

    /* Next/prev and primary nav btn click handlers */
    $('a.web').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });
    $('a.copy').click(function(){
        $('html, body').animate({
            scrollTop:$('#copy').offset().top
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });
    $('a.design').click(function(){
        $('html, body').animate({
            scrollTop:$('#design').offset().top
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });
    $('a.illustration').click(function(){
        $('html, body').animate({
            scrollTop:$('#illustration').offset().top
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });

    $('a.photography').click(function(){
        $('html, body').animate({
            scrollTop:$('#photography').offset().top
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });

    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
        function () {
            $(this).prev('h1').show();
        },
        function () {
            $(this).prev('h1').hide();
        }
    );

});

/* Scroll the background layers */
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#parallax-bcg1').css('top',(0-(scrolled*.25))+'px');
    $('#parallax-bcg2').css('top',(0-(scrolled*.5))+'px');
    $('#parallax-bcg3').css('top',(0-(scrolled*.75))+'px');
}





