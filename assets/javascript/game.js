//Initialize variables with values of zero
var wins = 0;
var losses = 0;
var sumTotal = 0;
//var sumTotal = [];
var random = 0;
var hiddenValues = [''];

//array: crystal images 
var images = ['assets/images/crystal1.gif','assets/images/crystal5.gif','assets/images/crystal10.gif', 'assets/images/crystal20.gif'];

//for loop(Initialize crystal variables with a random number between 1 and 12)
function createHiddenValues() {
    for(i=0; i < 4; i++) {
        //push hiden value inside hidenValues array
        hiddenValues.push(Math.floor(Math.random() * 11 + 1));
        console.log('crystal hidden values: ' + hiddenValues);
    }
}

//Generate crystals
function generateCrystals() {
    createHiddenValues();
    //add crystal images to empty div
    for(var i=0; i<hiddenValues.length; i++) {
        var crystal = $('<img>');
        crystal.addClass('crystalImg');
        crystal.attr('value', hiddenValues[i]);
        crystal.attr('src', images[i]);
        $('.crystalsDiv').append(crystal);
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

//When user clicks on crystal 1, a random hidden values must be added to the next & previous hidden values
$('.crystalsDiv').on('click', function() {
    console.log(hiddenValues[i]);
    /*add hidden value to var sumTotal
    shorthand operator of sumTotal = sumTotal + crystalOne;*/
    sumTotal += hiddenValues[i];
    console.log('your total so far: ' + sumTotal);
    //print 'score so far' in the html empty tag 
    $('#totalScore').text(sumTotal);
    //conditions();
});

//Define conditions. When user wins or loses, increment points by 1 accordingly
function conditions() {
    if(random === sumTotal) {
        //increment wins
        wins++;
        //print wins(+1 point) on the page & by adding comma function ()... this function will waint until our previous lines of code are executed
        $('.wins').text(wins, (function() {
        //Now, generate a different random number between 19 and 120
        random = Math.floor(Math.random() * 101) + 19;
        //test
        console.log('Random Number: ' + random);
        //print new random number on the page
        $('#randomNumber').text(random);
        //generate a different hidden number per crystal for the next game
        crystalOne = Math.floor(Math.random() * 11 + 1);
        crystalTwo = Math.floor(Math.random() * 11 + 1);
        crystalThree = Math.floor(Math.random() * 11 + 1);
        crystalFour = Math.floor(Math.random() * 11 + 1);
        //reset sumTotal
        sumTotal = 0;
        //test
        console.log('reset' + sumTotal);
        //print sumTotal=0 in the page
        $('#totalScore').text(sumTotal);
        alert('you win');
        }));
       
    }else if(random < sumTotal) {
        //increment losses
        losses++;
        //print incremented losses on the page
        $('.losses').text(losses, $(function() {
        //generate a different random number between 19 and 120
        random = Math.floor(Math.random() * 101) + 19;
        //test
        console.log('Random Number: ' + random);
        //print new random number on the page
        $('#randomNumber').text(random);
        //generate a different hidden number per crystal for the next game
        crystalOne = Math.floor(Math.random() * 11 + 1);
        crystalTwo = Math.floor(Math.random() * 11 + 1);
        crystalThree = Math.floor(Math.random() * 11 + 1);
        crystalFour = Math.floor(Math.random() * 11 + 1);
        //reset sumTotal
        sumTotal = 0;
        //print sumTotal=0 in the page
        $('#totalScore').text(sumTotal);
        alert('Good luck next time!!!!!!!');
        }));
    }






/*
$('.crystalsDiv').on('click', function() {
    //console.log the hidden value of the clicked crystal
    var value = ($(this).attr('value'));
    console.log($(this).attr('value'));
    //console.log($(this.value));

    //convert string into integer
    //sumTotal = parseInt(sumTotal);
    /*add hidden value to var sumTotal
    shorthand operator of sumTotal = sumTotal + crystalOne;*/
    //sumTotal += hiddenValues[i];
    //console.log('your total so far: ' + sumTotal);
    
    //console.log('this: ' + $(this));
    
    

    /*add hidden value to var sumTotal
    shorthand operator of sumTotal = sumTotal + crystalOne;*/
    ////////////sumTotal += value;
    //////////console.log('your total so far: ' + sumTotal);
    //convert string into integer
    //sumTotal = parseInt(sumTotal);
    //print 'score so far' in the html empty tag and add call back function
    //////////$('#totalScore').text(sumTotal, $(function(){
    //recall 'retur function conditions'
    //conditions();
    //$('.firstCrystal').slideToggle(200); //wow! se desaparece*/
    
//});