var drumCount = document.querySelectorAll('.drum').length;
for (var x = 0; x < drumCount; x++) {
  document.querySelectorAll('.drum')[x].addEventListener('click', function(event) {
    var btnSelect = this.innerHTML;
    playSound(this.innerHTML);
    btnActive(this.innerHTML);
  });
}

document.addEventListener('keydown',function(event){
  btnActive(event.key);
  playSound(event.key);
});

function playSound(btnSelect) {
  switch (btnSelect) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
  }
}

function btnActive(key){
  document.querySelector('.' + key).classList.add('pressed');
  setTimeout(function(){
    document.querySelector('.' + key).classList.remove('pressed');
  },100);
}
