let bowl = document.querySelector('.bowl');
let flushBtn = document.querySelector('.flush-btn');
let flushBtnHalf = document.querySelector('.flush-btn-half');

function poop() {
    bowl.style.backgroundColor = 'rgb(110, 64, 64)';
    bowl.classList.add('dirty');
}

function flush() {
    bowl.style.backgroundColor = 'mintcream';
    bowl.classList.remove('dirty')
}

function halfFlush() {
    if (bowl.classList.contains('dirty')) {
        bowl.style.backgroundColor = 'rgb(170, 148, 148)';
    }
}

bowl.addEventListener('click', poop);
flushBtn.addEventListener('click', flush);
flushBtnHalf.addEventListener('click', halfFlush)

