'use strict';

function Thermostat() {
  this._temp = 20;
  this._min = 10;
  this._max = 32;
  this._defaultMax = 25;
  this._powerSav = true
};

Thermostat.prototype.maximum = function () {
  return this._powerSav ? this._defaultMax : this._max
};

Thermostat.prototype.up = function () {
  this._temp += 1;
};

Thermostat.prototype.down = function () {
  this._temp -= 1;
};

Thermostat.prototype.reset = function () {
  return this._temp;
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
