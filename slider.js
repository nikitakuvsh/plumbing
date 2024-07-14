document.addEventListener('DOMContentLoaded', () => {
    const sliderButton = document.querySelectorAll('.slider-button'),
        sliderImage = document.querySelectorAll('.main-header-right-slider-photo');
    
    let sliderCounter = 0;

    sliderButton[0].classList.add('slider-button-active');

    for (let i = 1; i < sliderImage.length; i++) sliderImage[i].style.display = 'none';

    let sliderActive = sliderButton[0];
    let sliderImageActive = sliderImage[0];

    function slider(){
        for (let i = 0; i < sliderButton.length; i++){
            sliderButton[i].addEventListener('click', () => {
                sliderActive.classList.remove('slider-button-active');
                sliderButton[i].classList.add('slider-button-active');
                sliderActive = sliderButton[i];
                sliderImageActive.style.display = 'none';
                sliderImage[i].style.display = 'block';
                sliderImageActive = sliderImage[i];
                clearInterval(sliderTimer);
            });
        }

        let sliderTimer = setInterval(() => {
            if (sliderCounter < sliderButton.length - 1){
                IntervalSlider();
            } else {
                sliderButton[sliderCounter].classList.remove('slider-button-active');
                sliderImage[sliderCounter].style.display = 'none';
                sliderCounter = 0;
                sliderButton[sliderCounter].classList.add('slider-button-active');
                sliderImage[sliderCounter].style.display = 'block';
            }
        }, 5000);
    }

    function IntervalSlider(){
        sliderButton[sliderCounter].classList.remove('slider-button-active');
        sliderImage[sliderCounter].style.display = 'none';
        sliderCounter++;
        sliderButton[sliderCounter].classList.add('slider-button-active');
        sliderImage[sliderCounter].style.display = 'block';
        sliderActive = sliderButton[sliderCounter];
    }
    

    slider();
});