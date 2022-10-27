// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var hornSelect = document.getElementById('horn-select');
  var volControl = document.getElementById('volume-controls');
  var img = document.querySelectorAll('img');

  hornSelect.addEventListener('change', (event) => {
    var horn = hornSelect.value;
    switch(horn) {
      case "air-horn":
        img[0].src = 'assets/images/air-horn.svg';
        
        break;
      case "car-horn":
        img[0].src = 'assets/images/car-horn.svg';
        
        break;
      case "party-horn":
        img[0].src = 'assets/images/party-horn.svg';

        break;
    }
  });

}