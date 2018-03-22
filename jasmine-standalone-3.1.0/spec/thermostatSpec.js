describe('Thermostat', function(){

  var thermostat = new Thermostat;
  describe('temperature limits', function(){
    it('default is 20 degrees', function(){
      expect(thermostat.temperature()).toBe(20)
    });

    it('minimum is 10 degrees', function(){
      expect(thermostat.minimum()).toBe(10)
    });
  });

  describe('changes the temperature', function(){
    it('increases the temperature', function(){
      expect(thermostat.up()).toBe(21)
    });

    it('decreases the temperature', function(){
      expect(thermostat.down()).toBe(19)
    });
  });

  describe('power saving mode is on', function(){
    it('is on by default', function(){
      expect(thermostat.powerSavingOn()).toEqual(true)
    });

    it('maximum temperature is 25 degrees', function(){
      expect(thermostat.maximum()).toBe(25)
    });
  });

  describe('power saving mode is off', function(){
    it('is off', function(){
      console.log(thermostat.powerSavingOff())
      expect(thermostat.powerSavingOff()).toEqual(false)
    });

    it('maximum temperature is 32 degrees', function(){
      spyOn(thermostat, 'powerSavingOff').and.returnValue(false)
      expect(thermostat.maximum()).toBe(32)
    });
  });
});
