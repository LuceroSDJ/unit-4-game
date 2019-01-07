//As the page loads, reate a random number between 19 and 120 and display it on the page
$(window).on('load', function() {
    //random number between 19-120
    var random = Math.floor(Math.random() * 120 + 1);
    console.log('Random Number: ' + random);
    $('#randomNumber').text(random);
})











