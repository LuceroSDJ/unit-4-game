//Initialize variables with values of zero
var wins = 0;
var losses = 0;
var sumTotal = 0;
//var sumTotal = [];
var random = 0;
//Then, when user clicks on the crystal, add the value of the clicked crystal to the empty array or as a string to evaluate later. Explore which option is better?


//Initialize crystal variables with a random number between 1 and 12
var crystalOne = Math.floor(Math.random() * 11 + 1);
var crystalTwo = Math.floor(Math.random() * 11 + 1);
var crystalThree = Math.floor(Math.random() * 11 + 1);
var crystalFour = Math.floor(Math.random() * 11 + 1);

//As the page loads, create a random number between 19 and 120 and display it on the page
$(window).on('load', function() {
    //random number between 19-120
    random = Math.floor(Math.random() * 101) + 19;
    console.log('Random Number: ' + random);
    $('#randomNumber').text(random);
    //return random; test it 
});

//****************************** 
//create reset function to recall in future functions
//******************************
                    //convert sumTotal into a real operation (strings to integers and operators)

//Define conditions. When user wins or loses, increment points by 1 accordingly
function conditions() {
    if(random === sumTotal) {
        //increment wins
        wins++;
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
        //test
        console.log('reset' + sumTotal);
        //print sumTotal=0 in the page
        $('#totalScore').text(sumTotal);
        //print score on the page
        $('.wins').text(wins);
        //****************************************************** 
        //congratulate user
        alert('You win!');
        /*right now my alert is preventing the user from seeing the actual FINAL total amount.
        The alert box pops up before the final score is displayed and resets my totalSum back to zero right away*/
        //******************************************************
    }else if(random < sumTotal) {
        //increment losses
        losses++;
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
        //print score on the page
        $('.losses').text(losses);
        alert('I win!!!!!!!');

    }
}


//When user clicks on crystal 1, a random hidden values must be added to the next & previous hidden values
$('.firstCrystal').on('click', function() {
    /************************************************** 
    A new hidden value is generated.......now, it is generated in our if/else statement when user wins or loses. Is this what we want???
    crystalOne; also, there is no need to recall my variable here since my variable is already defined in the global scope
    //**************************************************/
    console.log(crystalOne);
    //add hidden value to var sumTotal. 
    sumTotal = sumTotal + crystalOne;
    console.log('your total so far: ' + sumTotal);
    //convert string into integer
    //sumTotal = parseInt(sumTotal);
    //print 'score so far' in the html empty tag
    $('#totalScore').text(sumTotal);
    //recall 'retur function conditions'
    conditions();
});

//When user clicks on crystal 2, a random hidden values must be added to the next & previous hidden values
$('.secondCrystal').on('click', function() {
    console.log(crystalTwo);
    //add hidden value to var sumTotal. 
    sumTotal = sumTotal + crystalTwo;
    //test
    console.log('your total so far: ' + sumTotal);
    //convert sumTotal from string into integer
    //sumTotal = parseInt(sumTotal);
    //print 'score so far' in the html empty tag
    $('#totalScore').text(sumTotal);
    conditions();
});

//When user clicks on crystal 3, a random hidden values must be added to the next & previous hidden values
$('.thirdCrystal').on('click', function() {
    console.log(crystalThree);
    //add our hidden value to var sumTotal. 
    sumTotal = sumTotal + crystalThree;
    //test
    console.log('your total so far: ' + sumTotal);
    //convert sumTotal from string into integer
    //sumTotal = parseInt(sumTotal);
    //print 'score so far' in the html empty tag
    $('#totalScore').text(sumTotal);
    conditions();
});

//When user clicks on crystal 4, a random hidden values must be added to the next & previous hidden values
$('.fourthCrystal').on('click', function() {
    console.log(crystalFour);
    //add our hidden value to var sumTotal. 
    sumTotal = sumTotal + crystalFour;
    //test
    console.log('your total so far: ' + sumTotal);
    //convert sumTotal from string into integer
    //sumTotal = parseInt(sumTotal);
    //print 'score so far' in the html empty div
    $('#totalScore').text(sumTotal);
    conditions();
});



///////when clicking the crystal, the hidden value must be added to the current sum(previous sumSubTotal) until it matches the random number or it goes over 
///////when clicking the same crystal(same game), the crystal should have the same hidden value

//if sum is egual to random number, increment wins & start game over
//else increment losses

//restart game without lossing the score

//also, I want to add a prompt window to cancel the game
//add an alert "congratulations" if user wins
//reset button????

