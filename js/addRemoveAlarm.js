//define the alarm list to store all the alarms
var alarmList = [];
//implement the click event of save button to add new alarm to alarm list and create alarm
function saveAlarm() {
  //get the value of hour from the first input
  var hour = document.getElementById("hour_value").value;
  //get the value of minutes from the second input
  var minutes = document.getElementById("mins_value").value;
  //get the am/pm from the input radio
  var session = document.querySelector("input[name='session']:checked").value;
  //define an object to store hour, minutes and session
  var alarm = {};
  alarm.hour = hour;
  alarm.minutes = minutes;
  alarm.session = session;
  alarmList.push(alarm);
  createAlarm(alarm.hour,alarm.minutes,alarm.session);
  closeAlarmWindow();
  hour = " ";
  minutes = " ";
}
var index = 0;
//create alarm according to the given hour, minutes and session
function createAlarm(hour,mins,session){
  var innerHtmlAlarmList = "";
  //if the hour is less than 10, will add 0 before hour
  hour = (hour < 10)? "0" + hour: hour;
  //if the minute is less than 10, will add 0 before minute
  mins = (mins < 10)? "0" + mins: mins;
  innerHtmlAlarmList += "<li id='"+index+"' class='alarmElem'>"+hour+":"+mins+" "+"<span class='session'>"+session+"</span><span class='remove_alarm' onclick='removeAlarm("+index+")'>Remove</span></li>";
  var alarm_list = document.getElementById("alarm_list");
  index++;
  alarm_list.innerHTML += innerHtmlAlarmList;
}
//remove alarm by id
function removeAlarm(index){
  var element = document.getElementById(index);
  element.style.display = "none";
}
//judge wether the every alarm has gone off
setInterval(function(){
  alarmList.forEach(function(element,index){
    if(element.session == 'PM'){
      if(element.hour < 12){
        element.hour += 12;
      }
    }
    //if the alarm's hour and minutes are equal to the current time
    if(element.hour == (new Date().getHours()) && element.minutes == (new Date().getMinutes()) && (new Date().getSeconds() == "00")){
      var e = document.getElementById(index);
      //the alarm will shake by setting up the animation
      e.style.animationName = "shake";
      e.style.animationDuration = "0.82s";
      e.style.animationIterationCount = "3";
      //line through this alarm
      e.classList.add("gone");
    }
  });
},1000);
