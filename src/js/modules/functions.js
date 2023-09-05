/* Проверка поддержки webp, добавление класса для html */
export function isWebp() {
    //проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    //добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

//открытие/закрытие меню

const nav_btn = document.querySelector('.header__icon');
const nav_menu = document.querySelector('.header__nav');
nav_btn.addEventListener('click', function() {
    nav_menu.classList.toggle('active');
});

if(nav_menu.classList.contains('active')){
    document.addEventListener('click', function(){
        nav_menu.classList.remove('active');
    });
};

//аккордеон

const tubs = document.querySelectorAll('.faq__item');
tubs.forEach((el) => {
    el.addEventListener('click', function() {
        tubs.forEach((i) =>{
            i.classList.remove('active');
        });
        el.classList.toggle('active');
    });
});
