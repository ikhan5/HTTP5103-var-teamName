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

    $('.accordion-apply-btn').click(function(e) {
        // console.log(document.getElementById('application-form'));
        document.getElementById('application-form').scrollIntoView();
        if (this === $('#applyHeadChef')[0]) {
            $("#position_dropdown>option:eq(0)").prop("selected", true);
        }
        else if(this === $('#applyAssCook')[0]){
            $("#position_dropdown>option:eq(1)").prop("selected", true);
        }
        else if(this === $('#applyStoreManager')[0]){
            $("#position_dropdown>option:eq(2)").prop("selected", true);
        }
        else if(this === $('#applyWaiter')[0]){
            $("#position_dropdown>option:eq(3)").prop("selected", true);
        }
    })

    $('#application-form').submit(function() {
        if ($('#inFirstName')[0].value == ""){
            $('#inFirstName').css("border-top", "2px solid red");
            $('#inFirstName').focus();
        }
        else if ($('#inLastName')[0].value == ""){
            $('#inFirstName').css("border-top", "1px solid lightgrey");
            $('#inLastName').css("border-top", "2px solid red");
            $('#inLastName').focus();
        }
        else if ($('#inEmail')[0].value == ""){
            $('#inLastName').css("border-top", "1px solid lightgrey");
            $('#inEmail').css("border-top", "2px solid red");
            $('#inEmail').focus();
        }
        else if ($('#inResume')[0].value == ""){
            $('#inEmail').css("border-top", "1px solid lightgrey");
            $('#inResume').css("border-top", "2px solid red");
            $('#inResume').focus();
        }
        else {
            $('#inResume').css("border-top", "1px solid lightgrey");
            $('#myModal-text span').text("," + $('#inFirstName')[0].value);
            $('#myModal').css("display", "flex");
        }
        return false;
    })

    $('body').click(function(e) {
        if (e.target == $('#myModal')[0]) {
            $('#myModal').css("display", "none");
        }
    })

    $('#continueBtn').click(function() {
        $('#myModal').css("display", "none");
    })

    $('#homeBtn').click(function() {
        window.location.href = "index.html";
    })
})