describe('Thermostat', function(){

  var thermostat = new Thermostat;
  describe('temperature limits', function(){
    it('default is 20 degrees', function(){
      expect(thermostat.temperature()).toBe(20)
    });
    it('minimum is 10 degrees', function(){
      expect(thermostat.minimum()).toBe(10)
    });
    it('maximum is 32 degrees', function(){
      expect(thermostat.maximum()).toBe(32)
    });
  });

  describe('changes the temperature', function(){
    it('increases the temperature', function(){
      expect(thermostat.up(1)).toBe(21)
    });
    it('decreases the temperature', function(){
      expect(thermostat.down(1)).toBe(19)
    });
  });
});
