var numArray = [];
var count = 0;
var result = $("#result");
var modCount = [];
$(document).ready(function() {

    result.html("0");

});

$(".calcBtn").on("click", function() {
    console.log($(this).text());

    if ($(this).text() == "AC") {

        numArray = [];
        count = 0;
        modCount = [];
        result.html("0");
    }
    if ($(this).text() == "CE") {

        numArray.pop();
        result.html(numArray);
    }

    if ($(this).text() == "+/-") {
      console.log(numArray);

        if (numArray[0].match(/\-/)) {
            var pos = numArray.shift();

            console.log("this pos " + pos);
            pos = pos.substring(1);
            console.log("new pos " + pos);

            numArray.unshift(pos);
        } else {
            var first = numArray.shift();
            first = "-" + first;
            console.log(first);

            numArray.unshift(first);
        }


        count = 0;
        result.html(numArray);
        console.log(numArray);
    }

    if ($(this).text() == "=") {
        numArray.push($(this).text());
        count = 2;

        countModifiers($(this).text());
        numArray.pop();
        modCount = [];
        count = 0;
        if (numArray[0] == "0") {
            numArray = [];
            result.html("0");
        } else {
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

    if (num.match(/\+|\-|\/|\*|%/g)) {
        count++;
        console.log("Count is " + count);
        modCount.push(num);
        console.log("First Mod " + modCount);

    }
    //
    // if (count === 2) {
    //     count = 1;
    //     console.log(numArray);
    //
    //
    //     if (numArray.join("").match(/\+/)) {
    //         console.log("Match first +");
    //         addition();
    //     } else if (numArray.join("").match(/\-/)) {
    //         console.log("Match first -");
    //         subtraction();
    //     } else if (numArray.join("").match(/\*/)) {
    //         console.log("Match first *");
    //         multiplication();
    //     } else if (numArray.join("").match(/\//)) {
    //         console.log("Match first /");
    //         division();
    //     } else if (numArray.join("").match(/%/)) {
    //         console.log("Match first %");
    //         modulo();
    //     }
    //
    //
    // }

    if (count >= 2) {
        count = 1;
        console.log(numArray);

        var whichMod = modCount.shift();

        if (whichMod === "+") {
            console.log("Match first +");
            addition();
        } else if (whichMod === "-") {
            console.log("Match first -");
            subtraction();
        } else if (whichMod === "*") {
            console.log("Match first *");
            multiplication();
        } else if (whichMod === "/") {
            console.log("Match first /");
            division();
        } else if (whichMod === "%") {
            console.log("Match first %");
            modulo();
        }


    }


}

/*

var lastMod = numArray.pop();
var neg = numArray.shift();
console.log("neg: " + neg);
var temp = numArray.join("").replace(/\+|\-|\/|\*|%/g, ",").split(",").map(Number);
console.log("temp[0]" + temp[0]);
console.log("temp " + temp);

temp[0] = neg + temp[0];
*/


function addition() {
    var lastMod = numArray.pop();
    var temp = numArray.join("").replace(/\+|\-|\/|\*|%/g, ",").split(",").map(Number);

    if(temp[0] === 0){
      temp.shift();
      temp[0] = "-" + temp[0];
    }

    console.log("temp value is " + temp);
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
  var temp = numArray.join("").replace(/\+|\-|\/|\*|%/g, ",").split(",").map(Number);
  if(temp[0] === 0){
    temp.shift();
    temp[0] = "-" + temp[0];
  }


    console.log("temp value is " + temp);
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
  var temp = numArray.join("").replace(/\+|\-|\/|\*|%/g, ",").split(",").map(Number);
  if(temp[0] === 0){
    temp.shift();
    temp[0] = "-" + temp[0];
  }

    console.log("temp value is " + temp);
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
  var temp = numArray.join("").replace(/\+|\-|\/|\*|%/g, ",").split(",").map(Number);
  if(temp[0] === 0){
    temp.shift();
    temp[0] = "-" + temp[0];
  }


    console.log("temp value is " + temp);
    var action = temp.reduce(function(sum, item) {

        console.log(parseFloat(sum) + " / " + parseFloat(item));
        return (parseFloat(sum) / parseFloat(item)).toFixed(2);

    });
    console.log(action);

    numArray = [];
    numArray.push(action);
    numArray.push(lastMod);
    result.html(numArray);
}

function modulo() {
  var lastMod = numArray.pop();
  var temp = numArray.join("").replace(/\+|\-|\/|\*|%/g, ",").split(",").map(Number);
  if(temp[0] === 0){
    temp.shift();
    temp[0] = "-" + temp[0];
  }



    console.log("temp value is " + temp);
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
