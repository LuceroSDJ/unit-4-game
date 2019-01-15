$(document).ready(function() {


//Initialize global variables with values of zero
var wins = 0;
var losses = 0;
var sumTotal = 0;
var random = 0;
var hiddenValues = [];
var delayedAlert;

//create array to store crystal images
var images = ['assets/images/crystal1.gif','assets/images/crystal5.gif','assets/images/crystal10.gif', 'assets/images/crystal20.gif'];

//Initialize crystal variables with a random number between 1 and 12
function createHiddenValues() {
    for(i=0; i < 4; i++) {
        //push hiden value at the end of the array inside hidenValues array
        hiddenValues.push(Math.floor(Math.random() * 11 + 1));
        console.log('crystal hidden values: ' + hiddenValues);
    }
}

//Generate crystals with hidden values on the fly and add them to the DOM
function generateCrystals() {
    createHiddenValues();
    //add crystal images to empty div
    for(var i=0; i<hiddenValues.length; i++) {
        var crystal = $('<img>');
        crystal.addClass('crystalImg');
        //note: prop helps to store values 
        crystal.prop('value', hiddenValues[i]);
        crystal.prop('src', images[i]);
        //append crystals to empty div
        $('.crystalsDiv').append(crystal);
        /*since my crystal images are created on the fly, I decided to target the <img> 
        by calling my 'var crystal' on line 28 and create my EVENT CLICK FUNCTION.
        When I start playing the game everything seems to be working fine, however, when I either win or lose,
        the game re-starts and MY CRYSTALS ARE GENERATED AGAIN.
        As a result, I end up with more than 4 crystals in my second game */
        crystal.click(function() {
            onImageClick($(this));
       });
    }
}

//As the page loads, create a random number between 19 and 120 and display it on the page
$(window).on('load', function() {
    generateCrystals();
    //random number between 19-120
    random = Math.floor(Math.random() * 101) + 19;
    console.log('Random Number: ' + random);
    $('#randomNumber').text(random);
   
});

//reset function
//use this function later
function reset() {
    //clear
    hiddenValues = [];
    $('.crystalsDiv').empty(); //this step will empty our div
    //generate new randomly selected hidden values
    generateCrystals();
    //Different random number
    random = Math.floor(Math.random() * 101) + 19; 
    $('#randomNumber').text(random);
    console.log(random);
    sumTotal = 0; 
    $('#totalScore').text(sumTotal); 
}

function onImageClick(image){
    var value = image.val(); //value of clicked image
    console.log(value);
    //add value to previous sumTotal
    sumTotal = sumTotal + value;
    $('#totalScore').text(sumTotal);
    //conditions if else statement
    if(random === sumTotal) {
        wins++;
        $('.wins').text(wins);
        //result('wins');
        /* Delay alert message for a very small period of time. 
        In this case, I am delaying it by 0.05 seconds because if I keep this gap of time too long, 
        and keep clicking on a crystal even after I lose or win, it will still register these clicks. 
        As a result, I end up getting several alert boxes if I delay too long to execute my timeout function. 
        Reference to in-class activity 06.Timeout. 
        This fucntion prevents my alert box and reset function from being executed right away allowing the user to 
        literally see 'random number' and 'total score number' matching if user wins.
        On the other hand, if the user loses, then she/he can also literally see that 'total score number' is greater than the random number. */
        delayedAlert = setTimeout(function() {
            alert("You win!");
            reset();
            }, 50);
           
        
    }else if(random < sumTotal) {
        losses++;
        $('.losses').text(losses);
        //result('losses');
        delayedAlert = setTimeout(function() {
            alert("Good Luck Next Time!");
            reset();
            }, 50);
    }
}

//This approach still makes my alert pop up right away
/*function result(R) {
    if(R === 'wins') {
        alert('you win');
    }else{
        alert('good luck next time!');
    } */
//}); 

 
//closes $(document).ready(function()
});