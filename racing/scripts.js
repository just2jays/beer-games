var raceLength = window.outerWidth*0.75;
var winnerChosen = false;

$(document).ready(function(){
  $('#beginRace').on('click', function(){
      setInterval(function(){
      beginRace();
    }, 200);
  });

  $('#newHorse').on('submit', function(event){
    event.preventDefault();
    var horseInfo = $( this ).serializeArray();
    addHorse(horseInfo);
  });
});

function addHorse(info) {
  console.log(info);
  $('.track-container').append('<div class="individual-track"><div class="horse" data-distance=0><span class="horse-label">'+info[0].value+'</span></div></div>');
  
  return false;
}

function beginRace() {
  _.each($('.horse'), function(horse) {
     var addDistance = getRandomArbitrary(1,10);
     var currentDistance = $(horse).data( "distance" );
    var newDistance = currentDistance + addDistance;
    if(newDistance >= raceLength){
      if(!winnerChosen) {
        $(horse).parent().append('<div class="horse-rank">Winner!!!</div>');
        console.log('We have a winner!');
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
