var Clock = require('./../js/clock.js').clockModule;

$(document).ready(function() {

  var newClock = new Clock();
  newClock.hour = moment().format("H");
  newClock.minute = moment().format("m");

  $("#hour").prepend(newClock.hour);
  $("#minute").prepend(newClock.minute);


});
