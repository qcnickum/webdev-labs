/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultStyle = (e) => {
   let className = document.querySelector("body").className;
   document.querySelector("body").classList.remove(className);
}

const ocean = (e) => {
   document.querySelector("body").className = "ocean";
}

const desert = (e) => {
   document.querySelector("body").className = "desert";
}

const highContrast = (e) => {
   document.querySelector("body").className = "high-contrast";
}

document.querySelector("#default").addEventListener('click', defaultStyle);
document.querySelector("#ocean").addEventListener('click', ocean);
document.querySelector("#desert").addEventListener('click', desert);
document.querySelector("#high-contrast").addEventListener('click', highContrast);