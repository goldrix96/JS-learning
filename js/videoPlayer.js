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
  <button class="player__button fullscrin">&#8689;</button>
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
const fullscrin = player.querySelector('.fullscrin')


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

function skipPlay(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    console.log(this.value);
    console.log(this.name);
    video[this.name] = this.value;
}
function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function extandVideo(){
    console.log(this)
    // video.webkitRequestFullScreen();
    // player.classList.add ('player:fullscreen');
    // this.classList.add ('player:-webkit-full-screen');
    // this.classList.remove ('player');
    // this.style.setProperty('width', '100%')
    
    player.className = 'player:-webkit-full-screen';
    // player.className = 'player__controls';

}

fullscrin.addEventListener('click', extandVideo)        ;
video.addEventListener('click', togglePlay);
toggle5.addEventListener('click', togglePlay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
skipButtons.forEach(skip => skip.addEventListener('click', skipPlay))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
video.addEventListener('timeupdate', handleProgress);

let mousedown =false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));
progress.addEventListener('mousedown',() => mousedown = true);
progress.addEventListener('mouseup',() => mousedown = false);




