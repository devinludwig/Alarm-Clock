var Clock = require('./../js/clock.js').clockModule;
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

$(document).ready(function() {

  days.forEach(function(day){
    $("#days").append("<option>" + day + "</option>");
  });

    newClock = new Clock();

    var timer = setInterval(function() {
      if (newClock.alarm === true) {
        $(".alarm").show();
      }
    newClock.day = moment().format("dddd");
    newClock.hour = moment().format("H");
    newClock.minute = moment().format("mm");
    newClock.second = moment().format("ss");
    newClock.ampm = moment().format("A");
    $("#day").text(newClock.day);
    $("#hour").text(newClock.hour + " :");
    $("#minute").text(newClock.minute);
    $("#seconds").text(newClock.second);
    $("#ampm").text(newClock.ampm);
    newClock.fuck();
    }, 1000);

  $('#new-alarm').submit(function(event) {
    event.preventDefault();
    day = $('#days').val();
    minute = $('#alarm-minute').val();
    hour = $('#alarm-hour').val();
    var newAlarm = moment().hour(hour).minute(minute).day(day);
    newClock.alarms.push(newAlarm);
    $("#alarms").append("<li>" + newAlarm.format("dddd, h:mm") + "</li>");
  });

  $("#alarm-off").click(function() {
    newClock.alarm = false;
    $(".alarm").hide();
  })

});
