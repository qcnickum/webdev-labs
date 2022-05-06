/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const isPressed = window.localStorage.getItem('dyslexic') === 'true';
if(isPressed) {
  document.body.classList.add('dyslexia-mode');
}

const toggleOn = () => {
  document.body.className = "dyslexia-mode";
  window.localStorage.setItem('dyslexic', 'true');
}

const toggleOff = () => {
  document.body.classList.remove("dyslexia-mode");
  window.localStorage.setItem('dyslexic', 'false');
}

const toggle = () => {
  let className = document.body.className;
  className == "dyslexia-mode" ? toggleOff() : toggleOn();
}

document.querySelector("#dyslexia-toggle").addEventListener('click', toggle)