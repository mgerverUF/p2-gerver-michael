var readMore = document.getElementById('expand-button');
var moreText = document.getElementById('more-text');

readMore.addEventListener('click', showText)  
function showText() {
    document.getElementById('more-text').classList.add('show');
    document.getElementById('more-text').classList.remove('hide');
};

/*
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