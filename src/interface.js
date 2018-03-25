function UpdateUi(thermostat){
  $('#temperature').text(thermostat._temp);
  $('#powersaving-on').text(thermostat._powerSav ? 'on' : 'off');
}

$(document).ready(function() {
  var thermostat = new Thermostat();
  UpdateUi(thermostat);
  $('#select-city').submit(function(event) {
    event.preventDefault();
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=92bbf95880d6980760728bf28fe73ee1&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    $('#temperature-head').show();
  })
})


$('#temperature-up').on('click', function(){
  thermostat.up();
  UpdateUi(thermostat);
})

$('#temperature-down').on('click', function(){
  thermostat.down();
  UpdateUi(thermostat);
})

$('#temperature-reset').on('click', function(){
  thermostat.reset();
  UpdateUi(thermostat);
})

$('#powersaving-on').on('click', function(){
  thermostat.psmSwitchOn();
  UpdateUi(thermostat);
})

$('#powersaving-off').on('click', function(){
  thermostat.psmSwitchOff();
  UpdateUi(thermostat);
})
})
