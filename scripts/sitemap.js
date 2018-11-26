$(window).ready(function() {
    $('.grid-item').hover(
        function(){
            $(this).toggleClass('grid-focus');
        },
        function(){
            $(this).toggleClass('grid-focus');
        }
    
    );
})