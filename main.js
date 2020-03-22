var dayOfWeekContainer = document.getElementById('day-of-week')
console.log(dayOfWeekContainer);

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        // This is your response
        var apiResult = JSON.parse(this.responseText);

        dayOfWeekContainer.innerHTML = apiResult.day_of_week;
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