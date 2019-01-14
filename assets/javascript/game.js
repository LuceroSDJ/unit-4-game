$(document).ready(function() {


//Initialize global variables with values of zero
var wins = 0;
var losses = 0;
var sumTotal = 0;
var random = 0;
var hiddenValues = [];

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
        //prop help to store values 
        crystal.prop('value', hiddenValues[i]);
        crystal.prop('src', images[i]);
        //append crystals to empty div
        $('.crystalsDiv').append(crystal);
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
    generateCrystals();
random = Math.floor(Math.random() * 101) + 19; 
$('#randomNumber').text(random);
console.log(random);
hiddenValues = [];
sumTotal = 0; 
$('#totalScore').text(sumTotal); 
}

function onImageClick(image){
    var value = image.val(); //value of clicked image
    console.log(value);
    //add value to previous sumTotal
    sumTotal = sumTotal + value;
    $('#totalScore').text(sumTotal);
    //conditions
    if(random === sumTotal) {
        wins++;
        $('.wins').text(wins);
        alert('You win!');
        reset();
    }else if(random < sumTotal) {
        reset();
        losses++;
        $('.losses').text(losses, (function(){
        alert('Good luck next time!');
        })); 
    }
}
 
//closes $(document).ready(function()
});