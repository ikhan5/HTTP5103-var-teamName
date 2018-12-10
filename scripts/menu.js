$(document).ready(function() {
    // Hamburger Menu
   $('.accordion-text').hide();

    $('#menu-accordion h3').click(function() {
        if ($(this).next('div')[0].style['display'] === 'none') {
            $('#menu-accordion>div').hide(400, 'swing');
            $(this).next('div').show(400, 'swing');
            // return;
        }
        else {
            $(this).next('div').hide(400, 'swing');
        }
        
    })

    // $('body').click(function(event) {
    //     if (!$(event.target).hasClass('accordion-block')) {
    //         $('#menu-accordion>div').hide(400, 'swing');
    //     }
    // })

    // Image Modal Functionality

    $('.dish-img').click(function() {
        $('#modal-image-area').show(500);
        $('#modal-img').attr('src',$(this).attr('src'));
        $('#caption').html($(this).attr('title'));
    }) 

    $('.close').click(function() {
        $('#modal-image-area').hide();
    })

    // $('#modal-image-area').click(function(){
    //     $('modal-image-area').hide();
    // })

})