const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const body = document.querySelector("body");
let h2 = document.querySelector("h2");
let img = document.querySelector("img");

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnrect = noBtn.getBoundingClientRect();

let currMode = "light";
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I also miss you:) 🙈💓';
   body.style.background = "pink";  
   h2.style.color = "#e80ee8";
   img.style.display = "none";
   yesBtn.body.display = "none";


});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnrect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnrect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
    
})