var raceLength = window.outerWidth*0.75;

$(document).ready(function(){
$('#beginRace').on('click', function(){
    setInterval(function(){
    beginRace();
  }, 500);
});
});

function beginRace() {
  _.each($('.horse'), function(horse) {
     var addDistance = getRandomArbitrary(1,10);
     var currentDistance = $(horse).data( "distance" );
    var newDistance = currentDistance + addDistance;
    if(newDistance >= raceLength){
      $(horse).remove();
      console.log('We have a winner!');
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
