// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();

  var hornSelect = document.getElementById('horn-select');
  var volControl = document.getElementById('volume');
  var audio = document.querySelector('audio');
  var img = document.querySelectorAll('img');
  var button = document.querySelector('button');

  hornSelect.addEventListener('change', (event) => {
    var horn = hornSelect.value;
    switch(horn) {
      case "air-horn":
        img[0].src = 'assets/images/air-horn.svg';
        audio.src = 'assets/audio/air-horn.mp3';
        break;
      case "car-horn":
        img[0].src = 'assets/images/car-horn.svg';
        audio.src = 'assets/audio/car-horn.mp3';
        break;
      case "party-horn":
        img[0].src = 'assets/images/party-horn.svg';
        audio.src = 'assets/audio/party-horn.mp3';
        break;
    }

    button.addEventListener('click', (event) => {
      if (hornSelect.value == 'party-horn') {
        jsConfetti.addConfetti({
          confettiColors: [
            '#e84725', '#e2e825', '#ff7096', '#37b51b', '#2261cf', '#7622cf', 'cd22cf',
          ],
          confettiNumber: 200,
        });
      }
      audio.play();
    });

    volControl.addEventListener('change', (event) => {
      let volume = volControl.value;
        audio.volume = volume / 100;
        if(volume == 0) {
          img[1].src = 'assets/icons/volume-level-0.svg';
        }
        else if (volume < 33) {
          img[1].src = 'assets/icons/volume-level-1.svg';
        }
        else if (volume < 67) {
          img[1].src = 'assets/icons/volume-level-2.svg';
        }
        else {
          img[1].src = 'assets/icons/volume-level-3.svg';
        }
    });
  });

}