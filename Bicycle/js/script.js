//Scroll
let AlreadyDone = false;
let firstBlock = document.getElementsByClassName('background');
let secondBlock = document.getElementsByClassName('about');
let thirdBlock = document.getElementsByClassName('block1');
let scrolLlength = firstBlock[0].clientHeight + secondBlock[0].clientHeight + thirdBlock[0].clientHeight; //сумма высот всех блоков над таблицей
function checkViewport() {
    if (!AlreadyDone && window.scrollY + (window.scrollY * 0.30) > scrolLlength) {
        let elementImage = document.getElementById('script');
        let elementText = document.getElementById('script2');
        let elementImage2 = document.getElementById('script3');
        elementImage.style.cssText = "transform: translateX(0);";
        elementText.style.cssText = "transform: translateX(0);";
        elementImage2.style.cssText = "transform: translateX(0);";
        AlreadyDone = true;
    }
}
window.onscroll = function() {
    checkViewport()
};


//Slider
let galeryVisible = document.getElementById('galery_visible');
let galeryHidden = document.getElementById('script_galery');
let timerId = setInterval(() => slider(), 2000);
let marginVisible = 0;
let marginHidden = 100;

function slider() {
    marginVisible = marginVisible - 33.3;
    marginHidden = marginHidden - 33.3;
    galeryVisible.style.cssText = "transform: translateX(" + marginVisible + "%);";
    galeryHidden.style.cssText = "transform: translateX(" + marginHidden + "%);";
    if (marginVisible <= -99) {
        marginVisible = 100;
    }
    if (marginHidden <= -99) {
        marginHidden = 100;
    }
}
