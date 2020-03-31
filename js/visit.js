// START CODE FOR API IMPLEMENTATION
var dayOfWeekContainer = document.getElementById('day-of-week')

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        // This is your response
        var apiResult = JSON.parse(this.responseText);

        // Pull day of the week from API data
        dayOfWeekContainer.innerHTML = apiResult.day_of_week;

        // If statements to convert weekday number to weekday string        
        // https://stackoverflow.com/questions/41147371/changing-innerhtml-based-on-input-value
        if (dayOfWeekContainer.innerHTML == 0) {
            dayOfWeekContainer.innerHTML = 'Sunday, so we are closed.';
            }
        if (dayOfWeekContainer.innerHTML == 1) {
            dayOfWeekContainer.innerHTML = 'Monday, so we are open from 9am - 5pm.';
            }   
        if (dayOfWeekContainer.innerHTML == 2) {
            dayOfWeekContainer.innerHTML = 'Tuesday, so we are open from 9am - 5pm.';
            }
        if (dayOfWeekContainer.innerHTML == 3) {
            dayOfWeekContainer.innerHTML = 'Wednesday, so we are open from 9am - 5pm.';
            }  
        if (dayOfWeekContainer.innerHTML == 4) {
            dayOfWeekContainer.innerHTML = 'Thursday, so we are open from 9am - 5pm.';
            }   
        if (dayOfWeekContainer.innerHTML == 5) {
            dayOfWeekContainer.innerHTML = 'Friday, so we are open from 9am - 5pm.';
            }
        if (dayOfWeekContainer.innerHTML == 6) {
            dayOfWeekContainer.innerHTML = 'Saturday, so we are closed.';
            }               
    }
};

xmlhttp.open('GET', 'http://worldtimeapi.org/api/ip', true);
xmlhttp.send();


// START CODE FOR ACCORDION
// https://codepen.io/sureshrkm/pen/ZbzBpr 
var accItem = document.getElementsByClassName('hours-menu');
    var accHD = document.getElementsByClassName('hours-menu-heading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'hours-menu close';
        }
        if (itemClass == 'hours-menu close') {
            this.parentNode.className = 'hours-menu open';
        }
    }