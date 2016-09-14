var j = 1;
var i = 1;

document.addEventListener("DOMContentLoaded", function() {

    /* VARIABLES  -- BEGIN*/

    var change_top = document.querySelector('.go_top'); // top button with gray triangle without event
    var change_top_alternate = document.querySelector('.go_top_alternate'); // button with yellow triangle with event
    var change_bottom = document.querySelector('.go_bottom'); // bottom button with gray triangle without event
    var change_bottom_alternate = document.querySelector('.go_bottom_alternate'); // bottom button with yellow triangle with event
    var change_right = document.querySelector('.go_right'); // right button with gray triangle without event
    var change_right_alternate = document.querySelector('.go_right_alternate'); // right button with yellow triangle with event
    var change_left = document.querySelector('.go_left'); // left button with gray triangle without event
    var change_left_alternate = document.querySelector('.go_left_alternate'); // left button with yellow triangle with event
    var list_elements_small = document.querySelector('.list_elements_small'); // parent for divs contain text and image
    var slider_objects_small = document.querySelectorAll('.slider_element_small'); // parent for previous various
    var list_elements_medium = document.querySelector('.list_elements_medium'); // parent for divs contain text and image
    var slider_objects_medium = document.querySelectorAll('.slider_element_medium'); // parent for previous various

    var number_elements_small = slider_objects_small.length;
    var number_elements_medium = slider_objects_medium.length;

    var forest = document.querySelector('.select_forest');
    var mountains = document.querySelector('.select_mountains');
    var desert = document.querySelector('.select_desert');
    var field = document.querySelector('.select_field');
    var clouds = document.querySelector('.select_clouds');
    var water = document.querySelector('.select_water');
    var build = document.querySelector('.select_build');
    var select_aside = document.querySelectorAll('.aside_large li');
    var slider_objects_large = document.querySelectorAll('.slider_element_large');
    var aside_choose = document.querySelector('.aside_bag');
    var aside_list = document.querySelector('.aside_list_select');
    var aside_button = document.querySelector('.aside_button');
    var cross = document.querySelector('.secret_cross');
    var header = document.querySelector('.header_title');
    var section_small = document.querySelector('.slider_small');
    var section_medium = document.querySelector('.slider_medium');
    var section_large = document.querySelector('.slider_large');

    change_top.classList.add('hide_me'); // hide change_top
    change_bottom.classList.add('hide_me'); // hide change_bottom
    change_right.classList.add('hide_me'); // hide change_right
    change_left.classList.add('hide_me'); // hide change_left
    // aside_list.classList.add('hide_me');
    // aside_button.classList.remove('hide_me');
    cross.style.opacity = '0';


    /* VARIABLES -- END */

    /* SLIDER to 600px -- BEGIN*/

    /* vertical slider -- BEGIN */

    function verticalSlider(j) { // function for verticalSlider to 600px
        for (var k = 0; k < slider_objects_small.length; k++) {
            slider_objects_small[k].classList.remove('small_img_small');
        }
        if (slider_objects_small[j].classList.contains('large_img_small')) {

        } else {
            slider_objects_small[j].classList.add('large_img_small');
        }

        /* button to bottom -- BEGIN*/

        change_bottom_alternate.addEventListener('click', function() { // function for bootom button
            slider_objects_small[j].classList.remove('large_img_small');
            slider_objects_small[j + 1].classList.add('large_img_small');
            slider_objects_small[j + 1].classList.remove('small_img_small');
            slider_objects_small[j].classList.add('small_img_small');
            list_elements_small.style.transitionDuration = '1.5s';
            list_elements_small.style.transform = 'translate(0,' + j * (-145) + 'px)';
            if (j === (number_elements_small - 2)) {
                change_bottom.classList.remove('hide_me');
                change_bottom_alternate.classList.add('hide_me');
            } else if (j === 0) {
                change_top.classList.add('hide_me');
                change_top_alternate.classList.remove('hide_me');
            } else if (j > 0 && j < (number_elements_small - 2)) {
                change_top.classList.add('hide_me');
                change_top_alternate.classList.remove('hide_me');
                slider_objects_small[j - 1].classList.remove('small_img_small');
                slider_objects_small[j].classList.add('small_img_small');
                slider_objects_small[j + 1].classList.remove('small_img_small');
            } else {
                console.log('error in bottom');
            }
            j = j + 1;
            savePositionVertical = j;
        })

        /* button to bottom --END */

        /* button to top --BEGIN */

        change_top_alternate.addEventListener('click', function() { // function for top button
                slider_objects_small[j - 1].classList.add('large_img_small');
                slider_objects_small[j].classList.remove('large_img_small');
                slider_objects_small[j - 1].classList.remove('small_img_small');
                slider_objects_small[j].classList.add('small_img_small');
                list_elements_small.style.transitionDuration = '1.5s';
                list_elements_small.style.transform = 'translate(0, ' + (-j + 2) * 145 + 'px)';
                if (j === (number_elements_small - 1)) {
                    change_bottom.classList.add('hide_me');
                    change_bottom_alternate.classList.remove('hide_me');
                } else if (j === 1) {
                    change_top.classList.remove('hide_me');
                    change_top_alternate.classList.add('hide_me');
                } else if (j > 1 && j < (number_elements_small - 1)) {
                    change_top.classList.add('hide_me');
                    change_top_alternate.classList.remove('hide_me');
                    change_bottom.classList.add('hide_me');
                    change_bottom_alternate.classList.remove('hide_me');
                    slider_objects_small[j - 1].classList.remove('small_img_small');
                    slider_objects_small[j].classList.add('small_img_small');
                    slider_objects_small[j + 1].classList.remove('small_img_small');
                } else {
                    console.log('error in top');
                }
                j = j - 1;
                savePositionVertical = j;
            })
            /* button to top -- END */
    }

    /* vertical slider -- END */

    /* SLIDER to 600px -- END*/

    /* SLIDER to 900px -- BEGIN*/

    /* horizontal slider -- BEGIN */

    function horizontalSlider(i) { // function for horizontalSlider to 600px
        for (var l = 0; l < slider_objects_medium.length; l++) {
            if (slider_objects_medium[l].classList.contains('small_img_medium')) {
                slider_objects_medium[l].classList.remove('small_img_medium');
            } else {

            }
        }
        if (slider_objects_medium[i].classList.contains('large_img_medium')) {

        } else {
            slider_objects_medium[i].classList.add('large_img_medium');
        }

        /* button to right -- BEGIN*/

        var width = document.body.clientWidth;
        list_elements_medium.style.left = '' + (-75) - (900 - width) / 2 + 'px';
        change_right_alternate.addEventListener('click', function() { // function for right button
            slider_objects_medium[i].classList.remove('large_img_medium');
            slider_objects_medium[i + 1].classList.add('large_img_medium');
            list_elements_medium.style.transitionDuration = '1.5s';
            list_elements_medium.style.transform = 'translate(' + i * (-350) + 'px, 0)';
            if (i === (number_elements_medium - 2)) {
                change_right.classList.remove('hide_me');
                change_right_alternate.classList.add('hide_me');
                slider_objects_medium[i + 1].classList.remove('small_img_medium');
                slider_objects_medium[i].classList.add('small_img_medium');
            } else if (i === 0) {
                change_left.classList.add('hide_me');
                change_left_alternate.classList.remove('hide_me');
                slider_objects_medium[i + 1].classList.remove('small_img_medium');
                slider_objects_medium[i].classList.add('small_img_medium');
            } else if (i > 0 && i < (number_elements_medium - 2)) {
                change_left.classList.add('hide_me');
                change_left_alternate.classList.remove('hide_me');
                slider_objects_medium[i - 1].classList.remove('small_img_medium');
                slider_objects_medium[i].classList.add('small_img_medium');
                slider_objects_medium[i + 1].classList.remove('small_img_medium');
            } else {
                console.log('error in right');
            }
            i = i + 1;
            savePositionHorizontal = i;
        })

        /* button to right -- END */

        /* button to left -- BEGIN */

        change_left_alternate.addEventListener('click', function() { // function for left button
                slider_objects_medium[i - 1].classList.add('large_img_medium');
                slider_objects_medium[i].classList.remove('large_img_medium');
                list_elements_medium.style.transitionDuration = '1.5s';
                list_elements_medium.style.transform = 'translate(' + (-i + 2) * 350 + 'px, 0)';
                if (i === (number_elements_medium - 1)) {
                    change_right.classList.add('hide_me');
                    change_right_alternate.classList.remove('hide_me');
                    slider_objects_medium[i - 1].classList.remove('small_img_medium');
                    slider_objects_medium[i].classList.add('small_img_medium');
                } else if (i === 1) {
                    change_left.classList.remove('hide_me');
                    change_left_alternate.classList.add('hide_me');
                    slider_objects_medium[i - 1].classList.remove('small_img_medium');
                    slider_objects_medium[i].classList.add('small_img_medium');
                } else if (i > 1 && i < (number_elements_medium - 1)) {
                    change_left.classList.add('hide_me');
                    change_left_alternate.classList.remove('hide_me');
                    change_right.classList.add('hide_me');
                    change_right_alternate.classList.remove('hide_me');
                    slider_objects_medium[i - 1].classList.remove('small_img_medium');
                    slider_objects_medium[i].classList.add('small_img_medium');
                    slider_objects_medium[i + 1].classList.remove('small_img_medium');
                } else {
                    console.log('error in left');
                }
                i = i - 1;
                savePositionHorizontal = i;
            })
            /* button to left -- END */
    }

    /* horizontal slider -- END */

    /* SLIDER to 900px -- END */

    function selectByTag() {
        aside_list.classList.add('hide_me');
        aside_choose.addEventListener('click', function() {
            aside_button.classList.toggle('hide_me');
            aside_list.classList.toggle('hide_me');
        })
        for (var k = 0; k < select_aside.length; k++) {
            select_aside[k].addEventListener('click', function() {
                for (var l = 0; l < slider_objects_large.length; l++) {
                    slider_objects_large[l].classList.add('hide_me');
                    if (slider_objects_large[l].dataset.tag.indexOf(this.dataset.name) === -1) {
                    } else {
                        slider_objects_large[l].classList.remove('hide_me');
                    }
                }
                aside_choose.children[1].innerText = this.dataset.name;
                aside_list.classList.add('hide_me');
                aside_button.classList.remove('hide_me');

            })
        }
        aside_button.addEventListener('click', function() {
            for (var m = 0; m < slider_objects_large.length; m++) {
                slider_objects_large[m].classList.remove('hide_me');
                aside_choose.children[1].innerText = 'select tag';
            }
        })
    }

    function showMeBiggest() {
        for (var p = 0; p < slider_objects_large.length; p++) {
            slider_objects_large[p].addEventListener('click', function() {
                for (var s = 0; s < slider_objects_large.length; s++) {
                    if (slider_objects_large[s].classList.contains('normal_view')) {
                        slider_objects_large[s].classList.remove('normal_view');
                    } else {
                        slider_objects_large[s].classList.remove('visibility_better');
                    }
                }
                this.classList.add('bigger_view');
                cross.classList.remove('visibility_worse');
                cross.classList.add('visibility_better');
                for (var i = 0; i < slider_objects_large.length; i++) {
                    if (slider_objects_large[i].classList.contains('bigger_view')) {

                    } else {
                        slider_objects_large[i].classList.add('visibility_worse');
                    }
                }
            })
        }
        cross.addEventListener('click', function() {
            for (var r = 0; r < slider_objects_large.length; r++) {
                if (slider_objects_large[r].classList.contains('bigger_view')) {
                    slider_objects_large[r].classList.remove('bigger_view');
                    slider_objects_large[r].classList.add('normal_view');
                } else {

                    slider_objects_large[r].classList.add('visibility_better');
                    slider_objects_large[r].classList.remove('visibility_worse');
                }
            }
            cross.classList.remove('visibility_better');
            cross.classList.add('visibility_worse');
        })
    }

    /* FUNCTION 'turn off' and 'turn on' functions by width size -- BEGIN */

    var savePositionVertical = j;
    var savePositionHorizontal = i;

    function requirementSizeWidth() {
        var width = document.body.clientWidth; // variable who take window's width
        var j = savePositionVertical;
        var i = savePositionHorizontal;
        if (width <= 600) {
            verticalSlider(j); // call function
        } else if (width > 600 && width < 901) {
            horizontalSlider(i); // call function
        } else if (width >= 901) {
            selectByTag();
            showMeBiggest();
            console.log('elo');
        } else {
            console.log('bad width');
        }
    }

    requirementSizeWidth(); // call function

    function SelectToolsToSize() { //function which call function nieWiem when we change window's width

        window.addEventListener('resize', function() {
            requirementSizeWidth();
        })
    }

    SelectToolsToSize(); // call function

    /* FUNCTION 'turn off' and 'turn on' functions by width size -- END */


});
