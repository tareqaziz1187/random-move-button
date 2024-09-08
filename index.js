const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yesBtn');
const noBtn = document.querySelector('.noBtn');

const wrapperRect = wrapper.getBoundingClientRect();/*Need to Know*/
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', ()=>{
    question.innerHTML = 'I Love You Too :)';
    

});

noBtn.addEventListener('mouseover', ()=>{
    const i =Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) +1;
    const j =Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) +1;

    noBtn.style.left = i+'px';
    noBtn.style.top = j+'px';

});

noBtn.addEventListener('click', ()=>{
    
    const i =Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) +1;
    const j =Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) +1;

    noBtn.style.left = i+'px';
    noBtn.style.top = j+'px';
});