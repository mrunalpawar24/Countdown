// Set the date we're counting down to
var endDate = new Date("OCT 25, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = endDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in elements with id="cdDays", "cdHours", etc.
    document.getElementById("daysNum").innerHTML = ("0" + days).slice(-2);
    document.getElementById("hoursNum").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minsNum").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("secsNum").innerHTML = ("0" + seconds).slice(-2);

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
