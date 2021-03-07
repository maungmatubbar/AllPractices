$(document).ready(function(){
    // super slide 
    $('#slides').superslides({
        animation : 'slide',
        play: 4000,
        pagination: false,
    });
    // Typed js 
    var typed = new Typed('.element', {
        strings: ['This is a JavaScript library', 'This is an ES6 module'],
        smartBackspace: true, // Default value
        loop: true,
        showCursor: false,
        typeSpeed: 70,
        startDelay:1000
      });
      //carowsel
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    //jqery pei chart
    
    var skillTopOffset = $('.skillSection').offset().top;
    $(window).scroll(function(){
        if(window.pageYOffset>skillTopOffset - $(window).height()+200){
            $('.chart').easyPieChart({
                easing:'easingOut',
                barColor:'#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 3,
                size: 152,
                onStep:function(from,to,percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
        
            });
        }
    });
    
});