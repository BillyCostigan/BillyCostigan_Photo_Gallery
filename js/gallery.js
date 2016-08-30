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
    slider_objects[j].classList.add('hide_me');//pierwszy u gory widoczny film chowamy

    // slider_objects[i+1].classList.remove('large_img');
    // slider_objects[(j-1+10)%10].classList.add('translate_bottom');

    // slider_objects[(j-2+10)%10].classList.add('translate_bottom');
    slider_objects[j+3].classList.remove('hide_me');//pierwszy u dolu niewidoczny film pokazujemy


    // console.log(j);
    if (j >= 6) {
        // console.log(change_bottom);
        change_bottom.classList.remove('hide_me');
        change_bottom_alternate.classList.add('hide_me');
        // console.log(change_top_alternate);
        change_top.classList.add('hide_me');
        change_top_alternate.classList.remove('hide_me');
        console.log(j + ' w 1 bot');
        // j = j % 6;
    } else if (j > 0) {
        change_top.classList.add('hide_me');
        change_top_alternate.classList.remove('hide_me');
        change_bottom.classList.add('hide_me');
        change_bottom_alternate.classList.remove('hide_me');
        j = j + 1;
        console.log(j + ' w 3 bot');
    } else if (j === 0) {
        change_top.classList.add('hide_me');
        change_top_alternate.classList.remove('hide_me');
        j = j + 1;
        console.log(j);
    } else {
        console.log('coś poszło nie tak');
    }
})

// console.log(j);

// console.log(j);



change_top_alternate.addEventListener('click', function() {
    console.log(j);
    // j = j + 6;

    // slider_objects[i].classList.add('large_img');
    // slider_objects[i].classList.add('translate_top');
    slider_objects[j-1].classList.remove('hide_me');//pierwszy u gory niewidoczny film pokazujemy
    // console.log(slider_objects[i]);
    slider_objects[j+2].classList.add('hide_me');//pierwszy u dolu widoczny film chowamy
    // console.log(slider_objects[i+3]);
    // console.log(slider_objects[i]);
    // i = i + 1;
    // // slider_objects[i+1].classList.remove('large_img');
    // slider_objects[i+1].classList.add('translate_top');
    // slider_objects[i+2].classList.add('translate_top');
    // slider_objects[i+3].classList.add('translate_top');
    // console.log(slider_objects[i-3]);
    // slider_objects[i-3].classList.remove('hide_me');

    if (j >= 6)  {
        change_bottom.classList.add('hide_me');
        change_bottom_alternate.classList.remove('hide_me');
        console.log(j + ' w 1 top');
        j = j - 1;
    } else if (j > 0) {
         change_bottom.classList.add('hide_me');
         change_bottom_alternate.classList.remove('hide_me');
         console.log(j + ' w 2 top');
         j = j - 1;
    } else if (j === 0) {
        change_top.classList.remove('hide_me');
        change_top_alternate.classList.add('hide_me');
        change_bottom.classList.add('hide_me');
        change_bottom_alternate.classList.remove('hide_me');
        console.log(j + ' w 3 top');
        // j = j + 6;
    } else {
        console.log('nie działa');
    }
    // console.log(j);
    // i = i - 1;

})

// change_top_alternate.addEventListener('click', function() {
//
//     change_bottom_alternate.addEventListener('click', function() {
//
//         i = i - 1;
//
//     })
//
// })
//
// change_bottom_alternate.addEventListener('click', function() {
//
//     change_top_alternate.addEventListener('click', function() {
//
//         j = j - 1;
//
//     })
//
// })




});
