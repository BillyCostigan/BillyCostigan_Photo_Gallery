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

var list_elements = document.querySelector('.list_elements');


change_top.classList.add('hide_me');
change_bottom.classList.add('hide_me');

slider_objects[1].classList.add('large_img');


var j = 1;

change_bottom_alternate.addEventListener('click', function() {

    // slider_objects[j-1].classList.remove('small_img');
    // slider_objects[j].classList.add('small_img');

    slider_objects[j].classList.remove('large_img');
    slider_objects[j+1].classList.add('large_img');

    list_elements.style.transitionDuration = '1.5s';
    list_elements.style.transform = 'translateY(' + j * (-150) + 'px)';

    j = j + 1;
    if (j === 9) {
        change_bottom.classList.remove('hide_me');
        change_bottom_alternate.classList.add('hide_me');
    } else if (j === 0) {
        change_top.classList.remove('hide_me');
        change_top_alternate.classList.add('hide_me');
    } else if (j > 0 && j < 9) {
        change_top.classList.add('hide_me');
        change_top_alternate.classList.remove('hide_me');
    } else {
        console.log('error');
    }


})

change_top_alternate.addEventListener('click', function() {
    console.log(j);

    // slider_objects[j-1].classList.remove('small_img');
    // slider_objects[j].classList.add('small_img');
    // slider_objects[j+1].classList.remove('small_img');

    slider_objects[j-1].classList.add('large_img');
    slider_objects[j].classList.remove('large_img');

    list_elements.style.transitionDuration = '1.5s';
    list_elements.style.transform = 'translateY(' + (-j+2) * 150 + 'px)';

    j = j - 1;
    console.log(j);
    if (j === 9) {
        change_bottom.classList.remove('hide_me');
        change_bottom_alternate.classList.add('hide_me');
    } else if (j === 0) {
        change_top.classList.remove('hide_me');
        change_top_alternate.classList.add('hide_me');
    } else if (j > 0 && j < 9) {
        change_top.classList.add('hide_me');
        change_top_alternate.classList.remove('hide_me');
        change_bottom.classList.add('hide_me');
        change_bottom_alternate.classList.remove('hide_me');
    } else {
        console.log('error');
    }
})
});
