window.onload = pageLoaded;


function pageLoaded() {
    var daily = ["images/salad.jpg", "images/chickensandwich.jpg", "images/tacos.jpg", "images/waffles.jpg", "images/french-toast.jpg", "images/fishandchips.jpg", "images/burger.jpg"];

    var weekly = ["images/ale.jpg", "images/stout.jpg", "images/pilsner.jpg", "images/porter.jpg"];

    var monthly = ["Half Price Burgers!", "2 for 1 Desserts!", "Half Price Zombie Apocalypse!", "Kids Eat Free!", "Half Price Breakfast!", "Half Price Drinks!", "Annual Food Drive!", "All You Can Eat Fries!", "Half Price Salad!", "HALF PRICE OFF EVERYTHING SPOOKY!", "No Taxes on Drinks", "Holiday Givings -$10 Gift Cards"];

    var time = 6000;
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth();

    /* Rough estimate of the what number week in a month we are in*/
    var nextmonth = new Date(date.getFullYear(), month + 2);
    var subtractAday = new Date(nextmonth.getTime() - 86400000);
    var daysinmonth = subtractAday.getDate();
    var fullweeks = Math.floor(daysinmonth / 7);
    var weeknumber = Math.ceil(date.getDate() / 7)-1;

    setImages(day, weeknumber, month);

    function setImages(day, week, month) {
        $('#daily').find('img').attr("src", daily[day]);
        $('#weekly').find('img').attr("src", weekly[3]);
        $('#monthly').find('#monthlySpecial').html(monthly[month]);
        
        $('#monthlyDeal').find('#monthlyDeal1').html(monthly[month]);
        
       if(month === 11){
           $('#monthlyDeal').find('#monthlyDeal2').html(monthly[0]);
       } else{
           $('#monthlyDeal').find('#monthlyDeal2').html(monthly[month+1]);
       }

        switch (day) {
            case 0:
                $('#daily').find('#specialName').append("Serpentine Sundays!");
                break;
            case 1:
                $('#daily').find('#specialName').append("Monster Mondays");
                break;
            case 2:
                $('#daily').find('#specialName').append("Toxic Tuesdays");
                break;
            case 3:
                $('#daily').find('#specialName').append("Warlock Wednesdays");
                break;
            case 4:
                $('#daily').find('#specialName').append("Threatening Thursdays");
                break;
            case 5:
                $('#daily').find('#specialName').append("Freakier Friday");
                break;
            case 6:
                $('#daily').find('#specialName').append("Satiable Saturday");
                break;
            default:
                $('#daily').find('#specialName').append("");
        }

        switch (week) {
            case 0:
                $('#weekly').find('#specialName').append("Ale - $4");
                break;
            case 1:
                $('#weekly').find('#specialName').append("Stout - $4");
                break;
            case 2:
                $('#weekly').find('#specialName').append("Pilsner - $4");
                break;
            case 3:
                $('#weekly').find('#specialName').append("Porter - $5");
                break;
        }
        
        var slideIndex = 0;
        slideShow();

        function slideShow() {
            var i;
            var slides = document.getElementsByClassName("main-item");

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;

            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(slideShow, time);
        }
        
        $('#seeDaily').click(function(){
            $('#dayDisplay').toggleClass("hidden");
        })
        
          $('#seeWeekly').click(function(){
            $('#weekDisplay').toggleClass("hidden");
        })
        
        $('#seeMonthly').click(function(){
            $('#monthDisplay').toggleClass("hidden");
        })
        
        
        
/* Slideshow Reference: https://www.w3schools.com/howto/howto_js_slideshow.asp
         */

    }
}
