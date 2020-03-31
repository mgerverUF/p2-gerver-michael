// START CODE FOR READ MORE/READ LESS FUNCTIONALITY
// https://codepen.io/shimaamohamed923/pen/yLyaLKv
var readMore = document.getElementById('expand-button');
var moreText = document.getElementById('more-text');

readMore.addEventListener('click', showText)  
function showText() {
        if(moreText.classList.contains('hide')) {
          moreText.classList.remove('hide');
          moreText.classList.add('show');
          readMore.innerHTML = 'Read Less';
        }

        else if(moreText.classList.contains('show')) {
          moreText.classList.remove('show');
          moreText.classList.add('hide');
          readMore.innerHTML = 'Read More';
        }
    };    



