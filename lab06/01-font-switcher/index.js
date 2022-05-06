const fontAdjustment = 5

const makeBigger = () => {
   let el = document.querySelector("p");
   let currSize = window.getComputedStyle(el).getPropertyValue("font-size");
   document.querySelector("p").style.fontSize = (parseFloat(currSize) + fontAdjustment) + 'px';

   el = document.querySelector(".content");
   currSize = window.getComputedStyle(el).getPropertyValue("font-size");
   document.querySelector(".content").style.fontSize = (parseFloat(currSize) + fontAdjustment) + 'px';

   el = document.querySelector("h1");
   currSize = window.getComputedStyle(el).getPropertyValue("font-size");
   document.querySelector("h1").style.fontSize = (parseFloat(currSize) + fontAdjustment) + 'px';
};

const makeSmaller = () => {
   let el = document.querySelector("p");
   let currSize = window.getComputedStyle(el).getPropertyValue('font-size');
   document.querySelector("p").style.fontSize = (parseFloat(currSize) - fontAdjustment) + 'px';

   el = document.querySelector(".content");
   currSize = window.getComputedStyle(el).getPropertyValue("font-size");
   document.querySelector(".content").style.fontSize = (parseFloat(currSize) - fontAdjustment) + 'px';

   el = document.querySelector("h1");
   currSize = window.getComputedStyle(el).getPropertyValue("font-size");
   document.querySelector("h1").style.fontSize = (parseFloat(currSize) - fontAdjustment) + 'px';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

