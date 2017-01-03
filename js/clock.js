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
    if (currentTime.format("dddd, H:mm") === alarmTime.format("dddd, H:mm"))  {
      console.log("before:" + _this.alarm);
      _this.alarm = true;
      console.log(this.alarm);
      console.log("this: " + this);
      // debugger;
    }
  });
  console.log(this.alarm);
};


exports.clockModule = Clock;
