'use strict';

function Thermostat() {
  this._temp = 20;
  this._min = 10;
  this._max = 25;
  this._powerSav = true;
  this._defaultTemp = 20;
};

Thermostat.prototype.maximum = function () {
  if(this._powerSav === true) {
    this._max = 25;
  }
  if(this._powerSav === false) {
    this._max = 32;
  }
  return this._max;
};

Thermostat.prototype.up = function() {
  if (this._temp < this.maximum()) {
  this._temp += 1;
  }
}

Thermostat.prototype.down = function() {
  if (this._temp > this._min) {
  this._temp -= 1;
  }
}

Thermostat.prototype.reset = function () {
  this._temp = this._defaultTemp ;
};

Thermostat.prototype.psmSwitchOn = function () {
  this._powerSav = true;
  this._temp = 25;
};

Thermostat.prototype.psmSwitchOff = function () {
  this._powerSav = false;
};

Thermostat.prototype.energyUsage = function () {
  if(this._temp < 18) {
    return 'Low Usage';
  } else if (this._temp < 25) {
    return 'Medium Usage';
  } else {
    return 'High Usage';
  }
};
