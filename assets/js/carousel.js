let sliderItems = document.querySelectorAll('.carousel-item');
let nextButton = document.querySelector('[data-carousel-next]');
let prevButton = document.querySelector('[data-carousel-prev]');
let sliderContainer = document.querySelector('.carousel__inner');

sliderItems[1].classList.add('scaled');

function getScaledElem() {
    return document.querySelector('.carousel-item.scaled');
}


function setClasses() {
    getScaledElem().classList.remove('scaled');
    sliderItems = document.querySelectorAll('.carousel-item');
    sliderItems[1].classList.add('scaled');
}

function move(direction) {
    if(direction == 'next') {
        let lastElem = sliderItems[2];
        lastElem.remove();
        sliderContainer.insertBefore(lastElem, sliderItems[0]); 
    } else if(direction == 'prev') {
        let firstElem = sliderItems[0];
        firstElem.remove();
        sliderContainer.appendChild(firstElem);
    }
    
    setClasses();
    
}

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    move('next');
});

prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    move('prev');
});