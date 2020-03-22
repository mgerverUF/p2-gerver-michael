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
            dayOfWeekContainer.innerHTML = 'Sunday';
            }
        if (dayOfWeekContainer.innerHTML == 1) {
            dayOfWeekContainer.innerHTML = 'Monday';
            }   
        if (dayOfWeekContainer.innerHTML == 2) {
            dayOfWeekContainer.innerHTML = 'Tuesday';
            }
        if (dayOfWeekContainer.innerHTML == 3) {
            dayOfWeekContainer.innerHTML = 'Wednesday';
            }  
        if (dayOfWeekContainer.innerHTML == 4) {
            dayOfWeekContainer.innerHTML = 'Thursday';
            }   
        if (dayOfWeekContainer.innerHTML == 5) {
            dayOfWeekContainer.innerHTML = 'Friday';
            }
        if (dayOfWeekContainer.innerHTML == 6) {
            dayOfWeekContainer.innerHTML = 'Saturday';
            }               
    }
};

xmlhttp.open('GET', 'http://worldtimeapi.org/api/ip', true);
xmlhttp.send();





/*
var readMore = document.getElementById('expand-button');
var moreText = document.getElementById('more-text');

readMore.addEventListener('click', showText)  
function showText() {
    document.getElementById('more-text').classList.add('show');
    document.getElementById('more-text').classList.remove('hide');
};




readMore.addEventListener('click', showText)
function showText() {
    if(moreText.style.display == 'none')
    {
    moreText.style.display('block');
    }

    else {
    moreText.classList.add('hide');
    moreText.classList.remove('show');
    }
};
*/