$(document).ready(function(){
    $('#play').click(function(){
        $('#slider').cycle('resume');
    })
    $('#pause').click(function(){
        $('#slider').cycle('pause');
    })

    $('#slider').cycle({
        fx:'all',
        next:'#next',
        prev:'#prev',
        pager:'#pager'
    });
})