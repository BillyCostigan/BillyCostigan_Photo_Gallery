document.addEventListener("DOMContentLoaded", function() {




var change_top = document.querySelector('.go_top');
var change_top_alternate = document.querySelector('.go_top_alternate');
console.log(change_top);
var top_color = document.querySelector('.triangle_top');
var change_bottom = document.querySelector('.go_bottom');
var change_bottom_alternate = document.querySelector('.go_bottom_alternate');
console.log(change_bottom);
var bottom_color = document.querySelector('.triangle_bottom');
var slider_objects = document.querySelectorAll('.slider_element');
console.log(slider_objects);

change_top_alternate.classList.add('hide_me');
change_bottom.classList.add('hide_me');




var j = 0;
change_bottom_alternate.addEventListener('click', function() {

    // slider_objects[i].classList.add('large_img');
    // slider_objects[j].classList.add('translate_bottom');
    slider_objects[j].classList.add('hide_me');

    // slider_objects[i+1].classList.remove('large_img');
    // slider_objects[(j-1+10)%10].classList.add('translate_bottom');

    // slider_objects[(j-2+10)%10].classList.add('translate_bottom');
    slider_objects[j+3].classList.remove('hide_me');


    console.log(j);
    if (j >= 6) {
        // console.log(change_bottom);
        change_bottom.classList.remove('hide_me');
        change_bottom_alternate.classList.add('hide_me');
        // console.log(change_top_alternate);
        change_top.classList.add('hide_me');
        change_top_alternate.classList.remove('hide_me');
        console.log('top1');
        // j = j % 6;
    } else if (j >= 0) {
        change_top.classList.add('hide_me');
        change_top_alternate.classList.remove('hide_me');
        j = j + 1;
        console.log('top2');
    } else {
        j = j + 1;
        console.log('top3');
    }

})

// console.log(j);

var i = 6;

change_top_alternate.addEventListener('click', function() {
    console.log(i);

    // slider_objects[i].classList.add('large_img');
    // slider_objects[i].classList.add('translate_top');
    slider_objects[i].classList.remove('hide_me');
    // console.log(slider_objects[i]);
    slider_objects[i+3].classList.add('hide_me');
    // console.log(slider_objects[i+3]);
    // console.log(slider_objects[i]);
    // i = i + 1;
    // // slider_objects[i+1].classList.remove('large_img');
    // slider_objects[i+1].classList.add('translate_top');
    // slider_objects[i+2].classList.add('translate_top');
    // slider_objects[i+3].classList.add('translate_top');
    // console.log(slider_objects[i-3]);
    // slider_objects[i-3].classList.remove('hide_me');

    if (i >= 6)  {
        change_bottom.classList.add('hide_me');
        change_bottom_alternate.classList.remove('hide_me');
        console.log('>=6');
        i = i - 1;
    } else if (i > 0) {
         change_bottom.classList.add('hide_me');
         change_bottom_alternate.classList.remove('hide_me');
         console.log('>0');
         i = i - 1;
    }else if (i === 0) {
        change_top.classList.remove('hide_me');
        change_top_alternate.classList.add('hide_me');
        change_bottom.classList.add('hide_me');
        change_bottom_alternate.classList.remove('hide_me');
        console.log('beforelast');
    } else {


        console.log('last');
    }
    // i = i - 1;

})

});
