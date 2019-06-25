$(document).ready(function() {
//Initialize global variables with values of zero
var wins = 0;
var losses = 0;
var sumTotal = 0;
var random = 0;
var hiddenValues = [];
//create array to store crystal images
var images = ["assets/images/crystal1.gif","assets/images/crystal5.gif","assets/images/crystal10.gif", "assets/images/crystal20.gif"];

//create a function to generate a random integer between 19 & 120 & store it in a variable
var random19to120 = function() {
    //assign random number between 19-120 [BOTH INCLUDED] to variable random
    //syntax:  Math.floor(Math.random() * (max - min + 1) ) + min;
    random = Math.floor(Math.random() * (102)) + 19;
    //render random number to the page
    $("#randomNumber").text(random);  
    console.log("Random Number: " + random);
};

//As the page loads, generate the crystals and render the random number on the page
$(window).on("load", function() {
    //call functions
    generateCrystals();
    random19to120();
});

//loop through the images array & push a random number between 1 and 12 into hiddenValues array
function createHiddenValues() {
    for(let i = 0; i < images.length; i++) {
        //push hiden value at the end of the array inside hidenValues array
        hiddenValues.push(Math.floor(Math.random() * 12) + 1);
        console.log("crystal hidden values: " + hiddenValues);
    }
};

//Generate crystals with hidden values on the fly and add them to the DOM
function generateCrystals() {
    createHiddenValues();
    //append crystal images to empty div
    //loop through hiddenValues array, add hidden value as an attribute value & render the crystal on the page
    for(let i = 0; i < hiddenValues.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystalImg");
        //note: prop helps to store values 
        crystal.prop("value", hiddenValues[i]);
        crystal.prop("src", images[i]);
        //append crystals to empty div
        $(".crystalsDiv").append(crystal);
        /*since my crystal images are created on the fly, I decided to target the <img> 
        by calling my "var crystal" on line 26 and created my EVENT CLICK FUNCTION.
        When I start playing the game everything seems to be working fine, however, when I either win or lose,
        the game re-starts and MY CRYSTALS ARE RENDERED AGAIN.
        As a result, I end up with more than 4 crystals in my second game */
        //click event function 
        crystal.click(function() {
            onImageClick($(this));
        });
    }
};

//reset function
//use this function later
function reset() {
    //clear
    hiddenValues = [];
    //Different random number
    random19to120();
    $(".crystalsDiv").empty(); //this will get rid of the bug commented in lines 50 - 54. It will empty crystalsDiv and prevent the images from multiplying everytime the game re-starts
    //generate new randomly selected hidden values
    generateCrystals();
    sumTotal = 0; 
    $("#totalScore").text(sumTotal); 
};

function onImageClick(image){
    //grab the property value of the image "value"
    var value = image.val(); //value of clicked image
    console.log(value);
    //add value to current sumTotal
    // sumTotal = sumTotal + value;
    sumTotal += value;
    $("#totalScore").text(sumTotal);
    //conditions if else statement
    if(random === sumTotal) {
        wins++;
        $(".wins").text(wins);
        /* To-do: Delay alert message for a very small period of time. 
        In this case, I am delaying it by 0.05 seconds because if I keep this gap of time too long, 
        and keep clicking on a crystal even after I lose or win, it will still register these clicks. 
        As a result, I end up getting several alert boxes if I delay too long to execute my timeout function. 
        Refer to in-class activity 06.Timeout. 
        This fucntion prevents my alert box and reset function from being executed right away allowing the user to 
        literally see "random number" and "total score number" matching if user wins.
        Similarly, if the user loses, then she/he can also see that "total score number" is greater than the random number. */
        setTimeout(delayAlertReset, 50);
    }else if(sumTotal > random) {
        losses++;
        $(".losses").text(losses);
        setTimeout(alertReset, 50);
    }
};

// test code 
function delayAlertReset() {
    alert("You win!");
    reset();
}

function alertReset() {
    alert("Good luck next time!");
    reset();
}
//closes $(document).ready(function()
});
