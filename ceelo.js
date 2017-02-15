var rollArray = [];

for(i=1; i<=3; i++){
    rollArray.push(roll(1,6));
}

var originalRoll = rollArray;
var uniqueRoll = rollArray.slice();

var finalScore = "Nothing, re-roll!";
$.uniqueSort(uniqueRoll);

if($.inArray(4, rollArray) > -1 && $.inArray(5, rollArray) > -1 && $.inArray(6, rollArray) > -1){
    // AUTO WIN
    finalScore = "Boom! Auto-win congrats.";
}

if($.inArray(1, rollArray) > -1 && $.inArray(2, rollArray) > -1 && $.inArray(3, rollArray) > -1){
    // AUTO LOSS
    finalScore = "Ouch! Auto-loss. Better luck next time.";
}

if(uniqueRoll.length == 1){
    // TRIPLES
    finalScore = "Triple *"+uniqueRoll[0]+"*'s!";
}

if(uniqueRoll.length == 2){
    // SCORED ROLL
    $.each(uniqueRoll, function(index, val) {
        if(getOccurrence(originalRoll, val) == 2 ){
            uniqueRoll.splice(index, 1);
            uniqueRoll.filter(function(){return true;});
            finalScore = "You got a *"+uniqueRoll[0]+"*";
        }
    });
}

var dice_text = ["+originalRoll[0]+"] ["+originalRoll[1]+"] ["+originalRoll[2]+"];

function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}

function roll (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
