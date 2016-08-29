document.addEventListener("DOMContentLoaded", function() {




var change_top = document.querySelector('.go_top');
var change_top_alternate = document.querySelector('.go_top_alternate');
console.log(change_top);
var top_color = document.querySelector('.triangle_top');
var change_bottom = document.querySelector('.go_bottom');
console.log(change_bottom);
var bottom_color = document.querySelector('.triangle_bottom');
var slider_objects = document.querySelectorAll('.slider_element');
console.log(slider_objects);

    change_top_alternate.classList.add('hide_me');



var j = 0;
change_bottom.addEventListener('click', function() {

    // slider_objects[i].classList.add('large_img');
    // slider_objects[j].classList.add('translate_bottom');
    slider_objects[j].classList.add('hide_me');

    // slider_objects[i+1].classList.remove('large_img');
    // slider_objects[(j-1+10)%10].classList.add('translate_bottom');

    // slider_objects[(j-2+10)%10].classList.add('translate_bottom');
    slider_objects[j+3].classList.remove('hide_me');

    j = j + 1;

})

// console.log(j);

var i = 6;

change_top.addEventListener('click', function() {
    console.log(i);

    // slider_objects[i].classList.add('large_img');
    // slider_objects[i].classList.add('translate_top');
    slider_objects[i].classList.remove('hide_me');
    slider_objects[i+3].classList.add('hide_me');
    // console.log(slider_objects[i]);
    // i = i + 1;
    // // slider_objects[i+1].classList.remove('large_img');
    // slider_objects[i+1].classList.add('translate_top');
    // slider_objects[i+2].classList.add('translate_top');
    // slider_objects[i+3].classList.add('translate_top');
    // console.log(slider_objects[i-3]);
    // slider_objects[i-3].classList.remove('hide_me');

    i = i - 1;

})


});
