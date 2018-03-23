$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat._temp);

$('#temperature-up').on('click', function(){
  thermostat.up();
  $('#temperature').text(thermostat._temp);
})

$('#temperature-down').on('click', function(){
  thermostat.down();
  $('#temperature').text(thermostat._temp);
})

$('#temperature-reset').on('click', function(){
  thermostat.reset();
  $('#temperature').text(thermostat._defaultTemp);
})

$('#powersaving-on').on('click', function(){
  thermostat.psmSwitchOn();
  $('#powersaving-on').text('on');
  $('#temperature').text(thermostat._temp);
})

})
