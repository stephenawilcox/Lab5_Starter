// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  var textArea = document.getElementById('text-to-speak');
  var voiceSelect = document.getElementById('voice-select');
  var button = document.querySelector('button');
  var img = document.querySelectorAll('img');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  window.onload = populateVoiceList();
  
//Loading voices on page load wasnt working correctly on my chrome browser but it worked on safari
//The getVoices function was returning an array with no voices
  voiceSelect.addEventListener('click', (event) => {
    if (voiceSelect.length == 1){ 
      populateVoiceList();
    };
  });
  
  button.addEventListener('click', (event) => {
    img[0].src = 'assets/images/smiling-open.png';
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);

    utterThis.onend = (event) => {
      img[0].src = 'assets/images/smiling.png'; 
    };
  });
}