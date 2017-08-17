
//get the div which contains the clock
var clock = document.getElementById("clock");
//get the div element which shows the time
var alarm = document.querySelector('.alarm');
//get element shows the am/pm
var  ampm = clock.querySelector('.ampm');

//used for css class to decide switch number to show
var digitsToName = "zero one two three four five six seven eight nine".split(" ");

//used to store all digit elements
var digits = {};

//format of time is HH:MM:SS
var positions = ['h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2' ];

var digitHolder = clock.querySelector('.digits');
//convert position holders to real time
positions.forEach(function(item, index){

  //add : between hours minutes and seconds
  if(item == ":"){
    var dotsDiv = document.createElement("div");

    //add style to dots
    dotsDiv.className = "dots";

    //add dots to the clock digits part
    digitHolder.appendChild(dotsDiv);

  }else{

    //add all digits to the clock
    var digitsDiv = document.createElement("div");

    //one digit is formatted by 7 lines
    for(var i=0;i<7;i++){
      //individual line for one digit
      var digitSpan = document.createElement("span");

      //add style to digit
      digitSpan.className="d" + (i+1);
      digitsDiv.appendChild(digitSpan);
    }

    digits[item] = digitsDiv;

    digitHolder.appendChild(digitsDiv);
  }

});

//the text array for showing days
var dayNames = "SUN MON TUE WED THU FRI SAT".split(' ');

//get the element holding the week day info
var dayHolder = clock.querySelector('.weekdays');


dayNames.forEach(function(item,index){

  //create span element for each day
  var daySpan = document.createElement("span");

  //create text node to show day name
  var textnode = document.createTextNode(item);
  daySpan.appendChild(textnode);

  //add day info in the week day element
  dayHolder.appendChild(daySpan);
});

//get all weekday elements
var weekdays = clock.querySelectorAll('.weekdays span');

//update current time
(function updateTime(){

  //the text to indicate am or pm
  var ampmText = "AM";

  //get current time
  var dateForNow = new Date();
  var currentHour = dateForNow.getHours();
  var currentMin = dateForNow.getMinutes();
  var currentSecond = dateForNow.getSeconds();

  //some edge cases for am/pm
  if(currentHour > 12)
  {
    currentHour = currentHour - 12;
    ampmText = "PM";
  }
  //noon
  if(currentHour == 12)
  {
    ampmText = "PM";
  }
  //mid night
  if(currentHour == 24)
  {
    currentHour = 0;
    ampmText = "AM";
  }


  //set all digits using class
  digits.h1.className = digitsToName[parseInt(currentHour/10)];
  digits.h2.className = digitsToName[currentHour%10];
  digits.m1.className = digitsToName[parseInt(currentMin/10)];
  digits.m2.className = digitsToName[currentMin%10];
  digits.s1.className = digitsToName[parseInt(currentSecond/10)];
  digits.s2.className = digitsToName[currentSecond%10];

  //add the text to am/pm
  ampm.innerHTML = ampmText;

  //get the week day
  var day = dateForNow.getDay();

  //based on the day to add active class to the specific weekday span
  for(var i=0; i<weekdays.length; i++)
  {
    if(i==day)
    {
      weekdays[i].className = "active";
    }else{
      weekdays[i].className = "";
    }
  }

  //update time every second
  setTimeout(updateTime, 1000);
})();
