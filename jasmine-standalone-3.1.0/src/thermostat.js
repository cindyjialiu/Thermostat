function Thermostat() {
  this._temp = 20;
  this._min = 10;
  this._max = 32;
};

Thermostat.prototype.temperature = function () {
  return this._temp;
};

Thermostat.prototype.minimum = function () {
  return this._min;
};

Thermostat.prototype.maximum = function () {
  return this._max;
};

Thermostat.prototype.up = function (degree) {
  return this._temp + degree;
};

Thermostat.prototype.down = function (degree) {
  return this._temp - degree;
};
