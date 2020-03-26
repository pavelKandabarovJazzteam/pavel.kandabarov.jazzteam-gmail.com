let AlreadyDone = false;
let firstBlock = document.getElementsByClassName('background');
let secondBlock = document.getElementsByClassName('about');
let thirdBlock = document.getElementsByClassName('block1');
let scrolllength = firstBlock[0].clientHeight + secondBlock[0].clientHeight + thirdBlock[0].clientHeight; //сумма высот всех блоков над таблицей
function checkViewport(){
    if (!AlreadyDone && window.scrollY + (window.scrollY*0.30)  > scrolllength){
        let element_image = document.getElementById('script');
        let element_text = document.getElementById('script2');
        let element_image2 = document.getElementById('script3');
        element_image.style.cssText = "transform: translateX(0);";
        element_text.style.cssText = "transform: translateX(0);";
        element_image2.style.cssText = "transform: translateX(0);";
        AlreadyDone = true;
    }
}
window.onscroll = function(){checkViewport()};
