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

let galery_visible =  document.getElementById('galery_visible');
let galery_hidden =  document.getElementById('script_galery');
let timerId = setInterval(() => slider(), 2000);
let margin_visible = 0;
let margin_hidden = 100;
function slider(){
    margin_visible = margin_visible - 33.3;
    margin_hidden = margin_hidden - 33.3;
    galery_visible.style.cssText = "transform: translateX(" + margin_visible + "%);";
    galery_hidden.style.cssText = "transform: translateX(" + margin_hidden + "%);";
    if(margin_visible <= -99){
        margin_visible = 100;
    }
    if(margin_hidden <= -99){
        margin_hidden = 100;
    }
}
