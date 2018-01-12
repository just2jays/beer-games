var raceLength = 1000;
var winnerChosen = false;

$(document).ready(function(){
  //console.log(raceLength);
  $('#beginRace').on('click', function(){
      setInterval(function(){
      beginRace();
    }, 500);
  });

  $('#newHorse').on('submit', function(event){
    event.preventDefault();
    var horseInfo = $( this ).serializeArray();
    addHorse(horseInfo);
  });
});

function addHorse(info) {
  // console.log('Horse: "' + info[0].value + '" is at the gate!');
  var horseArray = $('.horse');
  var horseNumber = _.size(horseArray) + 1;

  $('.track-container').append('<div class="individual-track"><div class="horse" data-horse-number="'+horseNumber+'" data-distance=0><span class="horse-label">'+info[0].value+'</span></div></div>');
  
  return false;
}

function beginRace() {
  _.each($('.horse'), function(horse) {
    var addDistance = getRandomArbitrary(10,20);
    var currentDistance = $(horse).data( "distance" );
    var newDistance = currentDistance + addDistance;
    //console.log("number: "+$(horse).data( "horse-number" ), "distance: "+currentDistance);
    if(newDistance >= raceLength){
      if(!winnerChosen) {
        $(horse).parent().append('<div class="horse-rank">Winner!!!</div>');
        //console.log('We have a winner!');
        winnerChosen = true;
      }
      $(horse).remove();
      
    }else{
      $(horse).data('distance', newDistance); 
      $(horse).animate({
        marginLeft: newDistance+"px"
      });
    }
    
  });
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
