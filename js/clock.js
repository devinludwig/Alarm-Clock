function Clock() {
  this.day = "";
  this.hour;
  this.minute;
  this.second;
  this.ampm;
  this.alarms = [];
  this.alarm = false;
}

Clock.prototype.fuck = function() {
  var currentTime = moment();
  var _this = this;
  this.alarms.forEach(function(alarmTime) {
    if (currentTime.format("dddd, h:mm") === alarmTime.format("dddd, h:mm"))  {
      _this.alarm = true;
    )};
  });
};


exports.clockModule = Clock;
