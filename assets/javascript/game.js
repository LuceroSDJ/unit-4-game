$(document).ready(function() {
    //Initialize global variables with values of zero
    var wins = 0;
    var losses = 0;
    var sumTotal = 0;
    var random = 0;
    var hiddenValues = [];
    //create array to store crystal images
    var images = [
        "./assets/images/crystal1.gif",
        "./assets/images/crystal5.gif",
        "./assets/images/crystal10.gif",
        "./assets/images/crystal20.gif"
    ];

    //create a function to generate a random integer between 19 & 120 [BOTH INCLUDED] & store it in a variable
    //syntax:  Math.floor(Math.random() * (max - min + 1) ) + min;
    function winningNum() {
        random = Math.floor(Math.random() * 102) + 19;
        $("#randomNumber").text(random);  
        console.log("Random Number: " + random);
    };

    //generate an array of random numbers based on images.length:
    //loop through the images array & push a random number between 1 and 12 into hiddenValues empty array
    function createHiddenValues() {
        for(let i = 0; i < images.length; i++) {
            var random = Math.floor(Math.random() * 12) + 1;
            hiddenValues.push(random);
            console.log("crystal hidden values: " + hiddenValues);
        }
    };

    //Generate crystals based on hiddenValues.length values on the fly and append them to the DOM
    function generateCrystals() {
        createHiddenValues();
        //loop through hiddenValues array, generate crystal, add hiddenValue[i] as 'value' attribute & append crystal to DOM
        for(let i = 0; i < hiddenValues.length; i++) {
            var crystal = $("<img>");
            crystal.addClass("crystalImg");
            //note: prop helps to store values 
            crystal.prop("value", hiddenValues[i]);
            crystal.prop("src", images[i]);
            $(".crystalsDiv").append(crystal);
            //add click event
            crystal.click(function() {
                onImageClick($(this));
            });
        }
    };

    function onImageClick(image){
        //grab the property value of the 'clicked' image "value"
        var value = image.val(); 
        console.log("this value: " + value);
        //add value to current sumTotal
        sumTotal += value; // sumTotal = sumTotal + value;
        $("#totalScore").text(sumTotal);
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
            setTimeout(youWin, 50);
        }else if(sumTotal > random) {
            losses++;
            $(".losses").text(losses);
            setTimeout(youLose, 50);
        }
    };

    //reset function
    function reset() {
        $(".crystalsDiv").empty(); //this gets rid of the bug: prevent images from multiplying on 'reset'
        hiddenValues = [];
        sumTotal = 0; 
        $("#totalScore").text(sumTotal); 
        winningNum();
        generateCrystals();
    };

    function youWin() {
        alert("You win!");
        reset();
    }

    function youLose() {
        alert("Good luck next time!");
        reset();
    }

    //As the page loads, generate the crystals and render the random number on the page
    $(window).on("load", function() {
        winningNum();
        generateCrystals();
        $("#totalScore").text(sumTotal);
    });
}); //closes $(document).ready(function()
