function Thermostat() {
  this._temp = 20;
  this._min = 10;
  this._max = 32;
  this._defaultMax = 25;
  this._powerSav = true
};

Thermostat.prototype.temperature = function () {
  return this._temp;
};

Thermostat.prototype.minimum = function () {
  return this._min;
};

Thermostat.prototype.powerSavingOn = function () {
  return this._powerSav;
};

Thermostat.prototype.powerSavingOff = function () {
  if(this._powerSav === true){
    return this._powerSav = false;
}else {
  return false
}
};

Thermostat.prototype.maximum = function () {
  if(this._powerSav === true) {
    return this._defaultMax;
  }
  return this._max;
};

Thermostat.prototype.up = function () {
  return this._temp + 1;
};

Thermostat.prototype.down = function () {
  return this._temp - 1;
};
