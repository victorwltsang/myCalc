
    var numArray = [];
    var count = 0;
    var result = $("#result");
    $(document).ready(function() {

        result.html("0");

    });

    $(".calcBtn").on("click", function() {
        console.log($(this).text());

        if ($(this).text() == "AC") {

            numArray = [];
            result.html("0");
        }
        if ($(this).text() == "CE") {

            numArray.pop();
            result.html(numArray);
        }

        if ($(this).text() == "+/-") {

            numArray.unshift("-");
            result.html(numArray);
        }

        if ($(this).text() == "=") {
              numArray.push($(this).text());
            count = 2;

            countModifiers($(this).text());
            numArray.pop();
            if(numArray[0] == "0"){
              numArray = [];
              result.html("0");
            }else{
                result.html(numArray);
            }

            console.log("Count is " + count);
        }

        if ($(this).text() !== "CE" && $(this).text() !== "AC" && $(this).text() !== "=" && $(this).text() !== "+/-") {

            numArray.push($(this).text());
            countModifiers($(this).text());
            result.html(numArray);
            console.log("Count is " + count);
            console.log(numArray);
        }

    });

    // need fixing on the if search on modifier, "+" will always happen first
    function countModifiers(num) {

        if (num.match(/[\+*-/%]/g) ) {
            count++;
            console.log("Count is " + count);

        }

        if (count === 2) {
            count = 1;
            console.log(numArray);
            if (numArray.join("").match(/\+/)) {
                console.log("Match first +");
                addition();
            }else if (numArray.join("").match(/\-/)) {
                console.log("Match first -");
                subtraction();
            }
            else if (numArray.join("").match(/\*/)) {
                console.log("Match first *");
                multiplication();
            }else if (numArray.join("").match(/\//)) {
                console.log("Match first /");
                division();
            }else if (numArray.join("").match(/%/)) {
                console.log("Match first %");
                modulo();
            }


        }

    }

    function addition() {
        var lastMod = numArray.pop();
        // this join thing is causing the "." to not work
        //mostly like .map, possible solution: remove .map, in reduce, make change item to 0 if nan
        var temp = numArray.join("").replace(/[\+*-/%]/g, ",").split(",").map(Number);
        var action = temp.reduce(function(sum, item) {

            console.log(parseFloat(sum) + "+" + parseFloat(item));
            return parseFloat(sum) + parseFloat(item);

        });
        console.log(action);

        numArray = [];
        numArray.push(action);
        numArray.push(lastMod);
        result.html(numArray);
    }

    function subtraction() {
        var lastMod = numArray.pop();
        var temp = numArray.join("").replace(/[\+*-/%]/g, ",").split(",").map(Number);
        var action = temp.reduce(function(sum, item) {

            console.log(parseFloat(sum) + " - " + parseFloat(item));
            return parseFloat(sum) - parseFloat(item);

        });
        console.log(action);

        numArray = [];
        numArray.push(action);
        numArray.push(lastMod);
        result.html(numArray);
    }

    function multiplication() {
        var lastMod = numArray.pop();
        var temp = numArray.join("").replace(/[\+*-/%]/g, ",").split(",").map(Number);
        var action = temp.reduce(function(sum, item) {

            console.log(parseFloat(sum) + " * " + parseFloat(item));
            return parseFloat(sum) * parseFloat(item);

        });
        console.log(action);

        numArray = [];
        numArray.push(action);
        numArray.push(lastMod);
        result.html(numArray);
    }

    function division() {
        var lastMod = numArray.pop();
        var temp = numArray.join("").replace(/[\+*-/%]/g, ",").split(",").map(Number);
        var action = temp.reduce(function(sum, item) {

            console.log(parseFloat(sum) + " / " +parseFloat(item));
            return (parseFloat(sum) / parseFloat(item)).toFixed(10);

        });
        console.log(action);

        numArray = [];
        numArray.push(action);
        numArray.push(lastMod);
        result.html(numArray);
    }

    function modulo() {
        var lastMod = numArray.pop();
        var temp = numArray.join("").replace(/[\+*-/%]/g, ",").split(",").map(Number);
        var action = temp.reduce(function(sum, item) {

            console.log(parseFloat(sum) + " % " + parseFloat(item));
            return parseFloat(sum) % parseFloat(item);

        });
        console.log(action);

        numArray = [];
        numArray.push(action);
        numArray.push(lastMod);
        result.html(numArray);
    }
