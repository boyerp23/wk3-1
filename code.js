/*File creator: Paul Boyer
email: pauboyer@uat.edu
for CSC102 class SP2021Online */

/*same function as individual countadown timers made more efficient with 
a for loop with the change order request*/
function countDownV3() {
    var count = 10;

    for (var i = 1; i <= 11; i++) {
/* if i is less than or equal to 5 countDownTimer will display warning in accordance with
the Admirals guidence to notify that the timer is less than halway until Blastoff! */
        if (i <= 5) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
            }, 1000 * i);
//timer will display Blastoff once timer is complete through countdown           
        } else if (i == 11) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Blastoff!";
                count--;
            }, 1000 * i);
            /*else if(i > 5 && < i != 11){document.getElementById("countDownTimer").innerHTML 
            = "Warning less than 1/2 way to launch, time left = " + count;
                count--;
            }, 1000 * i)
            } */
/*when timer reaches 5 seconds and below it will display the warning that the timer is 
less than halway until blastoff!*/            
        } else {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Warning less than 1/2 way to launch, time left = " + count;
                count--;
            }, 1000 * i);
        }

    }

}
//same function as individual countadown timers made more efficient with a for loop
function countDownV2() {
    var count = 10;

    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);
    }
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!"
        count--;
    }, 11000);
}

/* created a countdown function to count from 
        10 to 1 then Blastoff!!! 
        function countDown was copied and pasted from 
        10 - Blastoff!!! */
function countDown() {
    var count = 10;
    //starting countdown at 10
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1;

    //then going to 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);

    //then to 8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);

    //7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);

    //6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);

    //5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);

    //4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);

    //3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);

    //2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);

    //1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);

    //then blastoff!!
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!!!";
        count = count - 1;
    }, 10000);
}
// craps function created to play craps on webpage
function playCraps() {
    //created die1 variable
    var die1;
    //created die2 variable
    var die2;
    //created sum variable
    var sum;
    /*die1&2 random number generator created and then multiplied by 6 to give 
    whole numbers between 1-6*/
    die1 = Math.ceil(Math.random() * 6)
    die2 = Math.ceil(Math.random() * 6)
    //sum varible is the addition of both die's results to win, lose, or push
    sum = die1 + die2;
    //added so that the js file and the HTML file can communicate with each other
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sumRes").innerHTML = sum;

    //lose sequence 7 or 11
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsResults").innerHTML = "Craps! You lose!";
    }
    //win sequence doubles and even 
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "DOUBLES, you win!!";
    }
    //any other results besides a 7,11, doubles, or even number
    else {
        document.getElementById("crapsResults").innerHTML = "Push! Please try again.";
    }

}
/*sandbox function created to run as a more efficient timer than creating 
individual timers from 10 -1*/
function runSandbox() {
    //varible count set to 10 to initaite a countdown from 10 to Blastoff!
    var count = 10;
    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("sandboxDisplay").innerHTML = count
            count--;
        }, 1000 * i);
    }
    setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Blastoff!"
        count--;
    }, 11000);
}