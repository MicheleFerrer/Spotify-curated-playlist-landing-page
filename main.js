// Write your JavaScript code here
console.clear();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
   pagination: {
       el: '.swiper-pagination'
    }

});



const slides = document.querySelectorAll('.swiper-slide')

slides.forEach(s => {
    s.addEventListener('click', () => {
        slides.forEach(a => {
            a.classList.remove('active')
        })
        s.classList.add('active');
    })
})