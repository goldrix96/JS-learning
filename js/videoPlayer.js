var videoPlayerContainer = document.querySelector('.videoPlayer')

var videoPlayerMarkup = `
<div class="player">
<video class="player__video viewer" src="video/652333414.mp4"></video>

<div class="player__controls">
  <div class="progress">
   <div class="progress__filled"></div>
  </div>
  <button class="player__button toggle5" title="Toggle Play">►</button>
  <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
  <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
  <button data-skip="-10" class="player__button">« 10s</button>
  <button data-skip="25" class="player__button">25s »</button>
</div>
</div>
`

videoPlayerContainer.innerHTML = videoPlayerMarkup;

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle5 = player.querySelector('.toggle5');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlay(){
    var method = video.paused ? 'play' : 'pause';
    video[method]();
    // console.log('run')
}

function toggleButton(){
    var icon = this.paused ? '►' : '❚ ❚';
    toggle5.textContent = icon;

    console.log('toggle')

}
video.addEventListener('click', togglePlay);
toggle5.addEventListener('click', togglePlay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);



