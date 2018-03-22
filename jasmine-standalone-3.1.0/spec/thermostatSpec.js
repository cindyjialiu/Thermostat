describe('Thermostat', function(){

  var thermostat = new Thermostat;
  describe('default temperature', function(){
    it('is 20 degree', function(){
      expect(thermostat.temperature()).toBe(20)
    });
  });

  describe('changes the temperature', function(){
    it('increases the temperature', function(){
      expect(thermostat.up(1)).toBe(21)
    });
  });
});
