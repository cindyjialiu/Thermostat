function Thermostat() {
  this._temp = 20
}
Thermostat.prototype.temperature = function () {
  return this._temp;
};

Thermostat.prototype.up = function (degree) {
  return this._temp + degree;
};
