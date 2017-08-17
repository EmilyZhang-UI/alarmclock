var alarm_window = document.getElementsByClassName("alarm_window");
var close_button = document.getElementById("closeButton");
var alarm_Form = document.getElementById("addAlarmForm");
//Show the alarm window
function showAlarmWindow(){
  alarm_window[0].classList.add("show");
  //the close button "x" will show
  close_button.style.display = "block";
  //the alarm form will show
  setTimeout(function(){
    alarm_Form.style.display = "block";
  },500);

}
//Close the alarm window
function closeAlarmWindow(){
  alarm_window[0].classList.remove("show");
  //the close button "x" will hide
  close_button.style.display = "none";
  //the alarm form will hide
  alarm_Form.style.display = "none";
}
