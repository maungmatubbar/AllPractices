$(document).ready(function(){
    $('#pass').keyup(function(){
        len = $(this).val().length;
        if(len==0){
            $('#checker').removeClass('weak');
            $('#checker').removeClass('good');
            $('#checker').removeClass('strong');
            $('#checker').text(' ');
        }
        else if(len<=4){
            $('#checker').addClass('weak');
            $('#checker').removeClass('good');
            $('#checker').removeClass('strong');
            $('#checker').text('Weak Password');
        }
        else if(len<=8){
            $('#checker').addClass('good');
            $('#checker').removeClass('weak');
            $('#checker').removeClass('strong');
            $('#checker').text('Good Password');
        }
        else if(len<=12){
            $('#checker').addClass('strong');
            $('#checker').removeClass('good');
            $('#checker').removeClass('weak');
            $('#checker').text('Strong Password');
        }
    })
});