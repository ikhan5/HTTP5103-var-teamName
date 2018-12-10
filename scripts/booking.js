window.onload = pageLoaded;


function pageLoaded() {
    var formHandle = document.forms[0];
    var name = formHandle.name;
    var email = formHandle.email;
    var phone = formHandle.phone;
    var dateSelect = document.getElementById("reserveDate");
    var fullTime = document.getElementById("fullHours");
    var fullStart = formHandle.fullStart;
    var size = formHandle.eventSize;
    var required = document.getElementById("requiredFields");
    var confirm = document.getElementById("confirmation");
    var special = document.getElementById("accomodation");
    var room = $("input[name=room]:checked").val();
    var valMsg = document.getElementsByClassName("specific");
    /* Form Validation Functions */

    formHandle.onsubmit = processForm;

    function processForm() {
        formHandle.style.display = 'none';
        confirm.style.display = 'block';
        var phoneValidation = /\d{10}/;
        var emailValidation = /\S+@\S+\.\S+/;

        confirmationDetails();
        validateEmail();
        validatePhone();
        function validateEmail() {
            if (!(emailValidation.test(email.value))) {
                error(email);
                valMsg[0].classList.remove("hidden");
                return false;
            } else{
                valMsg[0].classList.add("hidden");
                noerror(email);
            }
        }
        
          function validatePhone() {
            if (!(phoneValidation.test(phone.value))) {
                error(phone);
                valMsg[1].classList.remove("hidden");
                return false;
            } else{
                valMsg[1].classList.add("hidden");
                noerror(phone);
            }
        }




        function confirmationDetails() {
            confirm.innerHTML = "<h2>Here are the details of your booking:</h2>"
            confirm.innerHTML += "<h3>Contact Information: </h3>";
            confirm.innerHTML += "<p> Name: " + name.value + "</p>";
            confirm.innerHTML += "<p> Email: " + email.value + "</p>";
            confirm.innerHTML += "<p> Phone Number:" + phone.value + "</p>";
            confirm.innerHTML += "<h3>Event Details:</h3>"
            confirm.innerHTML += "<p>Event Date:" + dateSelect.value + "</p>";
            confirm.innerHTML += "<p>Start Time:" + fullStart.value + "</p>"
            confirm.innerHTML += "<p>Event Size:" + size.value + "</p>"
            confirm.innerHTML += "<p>Room Type:" + room + "</p>";
            confirm.innerHTML += "<h3>Special Accomodations:</h3>"
            confirm.innerHTML += "<p>" + special.value + "</p>";
            confirm.innerHTML += "<p class='thanks'><em> Thank you for booking at our restaurant! Hope to <span class='crossed'>eat</span> see you soon!</em></p>"
        }
        checkEmpty(size);
        checkEmpty(fullStart);
        checkEmpty(dateSelect);
        checkEmpty(name);
        //        checkEmpty(email);
        //        checkEmpty(phone);

        function checkEmpty(field) {
            if (field.value === "" || field.value === null) {
                error(field);
                return false;
            } else {
                noerror(field);
                return false;
            }
        }

        function error(field) {
            field.classList.add("error");
            required.classList.remove("hidden");
            formHandle.style.display = 'block';
            confirm.style.display = 'none';
        }

        function noerror(field) {
            field.classList.remove("error");
            required.classList.add("hidden");
        }


        return false;
    }


    /* Modal Functions */
    $('.modal').click(function () {
        $('#modal-image-area').show(500);
        $('#modal-img').attr('src', $(this).attr('src'));
        $('#caption').html($(this).attr('title'));
    })

    $('.close').click(function () {
        $('#modal-image-area').hide();
    })

    /* Time and Date Functions */

    var date = new Date();
    var closingTime = new Date(date.getFullYear(), date.getMonth());


    for (var i = 1; i < 15; i++) {
        var futuredates = new Date(date.getFullYear(), date.getMonth(), date.getDate() + i);

        var option = document.createElement("option");
        option.text = futuredates.toDateString();
        dateSelect.add(option);
    }

    dateSelect.onchange = dateTime();

    function dateTime() {
        var closing;

        if (date.getDay() === 5 || date.getDay() === 6 || date.getDay === 0) {
            closing = 27;

        } else {
            closing = 20;
        }

        function clearOptions(list) {
            var length = list.options.length;
            for (i = 1; i < length; i++) {
                select.options[i] = null;
            }
        }
        fullHours(closing);

        function fullHours() {
            clearOptions(fullStart);
            var option = document.createElement("option");
            var endtime = closingTime;
            var startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
            var timeString;

            startTime.setHours(12);
            for (var i = 0; i < closing; i++) {
                startTime.setMinutes(startTime.getMinutes() + 30);
                timeString = startTime.toTimeString().substring(0, 5);

                if (startTime.getHours() < 12) {
                    timeString += " AM";
                } else {
                    timeString += " PM";
                }
                var option = document.createElement("option");
                option.text = timeString;
                fullStart.add(option);
            }
        }
    }
}
