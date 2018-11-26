// $(document).ready(function() {
//     $('#careers-accordion h3').click(function() {
//         $('#careers-accordion>div').hide(400);
//         $(this).next('div').fadeToggle(2000);
//     })
// });


$(document).ready(function() {
    $('#careers-accordion h3').click(function() {
        if ($(this).next('div')[0].style['display'] === 'block') {
            $(this).next('div').hide(400, 'swing');
            $(this).removeClass('accordion-bg-color');
            return;
        }
        $('#careers-accordion>div').hide(400, 'swing');
        $('#careers-accordion>h3').removeClass('accordion-bg-color');
        $(this).next('div').show(400, 'swing');
        $(this).addClass('accordion-bg-color');
    })

    $('body').click(function(event) {
        if (!$(event.target).hasClass('accordion-block')) {
            $('#careers-accordion>div').hide(400, 'swing');
            $('#careers-accordion>h3').removeClass('accordion-bg-color');
        }
    })
})