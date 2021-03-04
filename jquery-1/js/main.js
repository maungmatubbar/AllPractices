$(document).ready(function(){
    //$('h2').show(1000);
    //$('h2').show(1000);
    // $('h2').click(function(){
    //     alert("hello World");
    // });
    // $('h2').dblclick(function(){
    //     alert("hello World");
    // });

    // $('li:even').addClass('even');
    // $('li:odd').addClass('odd');
    // $('#b1').mouseover(function(){
    //     $('div.one').hide(1000);
    // });
    // $('#b1').mouseover(function(){
    //     $('div.one').show(1000);
    // });
    // $('#b1').mouseout(function(){
    //     $('div.one').toggle(1000);
    // });
        // $('#b1').mouseover(function(){
        //     $(this).val('Show the div');
        //     $('div.one').stop().show(1000);
        // });
        //  $('#b1').mouseout(function(){
        //     $(this).val('Hide the div');
        //      $('div.one').stop().hide(1000);
        //  });
        //  $('#b1').mouseover(function(){
        //     $(this).val('Show the div');
        //     $('div.one').stop().fadeOut(1000);
        // });
        //fade
        //  $('#b1').mouseout(function(){
        //     $(this).val('Hide the div');
        //      $('div.one').stop().fadeIn(1000);
        //  });
        //  $('#b1').mouseover(function(){
        //     $(this).val('Show the div');
        //     $('div.one').fadeToggle(1000);
        // });
        //slide
        // $('#b1').mouseover(function(){
        //     $(this).val('Show the div');
        //     $('div.one').stop().slideUp(1000);
        // });
        //  $('#b1').mouseout(function(){
        //     $(this).val('Hide the div');
        //      $('div.one').stop().slideDown(1000);
        //  })
        //  $('#b1').mouseout(function(){
        //     $(this).val('Hide the div');
        //      $('div.one').slideToggle(1000);
        //  });

     
        //Color plate
        // color = $('#colors').val();
        // $('body').css('background',color);
        //  $('#colors').change(function(){
        //     color = $('#colors').val();
        //     $('body').css('background',color);
        //  });
        // slide Animated Menu
        // $('a').mouseover(function(){
        //     $(this).stop().animate({'width':'300px'},500);
        // });
        // $('a').mouseout(function(){
        //     $(this).stop().animate({'width':'150px'},500);
        // });
        $('ul li').hover(function(){
            $(this).find('ul li').slideToggle(1000);
        });


});