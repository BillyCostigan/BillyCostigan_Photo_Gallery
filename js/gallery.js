var j = 1;
var i = 1;

document.addEventListener("DOMContentLoaded", function() {

    /* VARIABLES  -- BEGIN*/

    // variables for slider_small
    var change_top = document.querySelector('.go_top'); // top button with gray triangle without event
    var change_top_alternate = document.querySelector('.go_top_alternate'); // button with yellow triangle with event
    var change_bottom = document.querySelector('.go_bottom'); // bottom button with gray triangle without event
    var change_bottom_alternate = document.querySelector('.go_bottom_alternate'); // bottom button with yellow triangle with event
    var list_elements_small = document.querySelector('.list_elements_small'); // parent for next various
    var slider_objects_small = document.querySelectorAll('.slider_element_small'); // parent for divs contain text and image
    var number_elements_small = slider_objects_small.length; // length of small slider's mobile elements
    // variables for slider_medium
    var change_right = document.querySelector('.go_right'); // right button with gray triangle without event
    var change_right_alternate = document.querySelector('.go_right_alternate'); // right button with yellow triangle with event
    var change_left = document.querySelector('.go_left'); // left button with gray triangle without event
    var change_left_alternate = document.querySelector('.go_left_alternate'); // left button with yellow triangle with event
    var list_elements_medium = document.querySelector('.list_elements_medium'); // parent for next various
    var slider_objects_medium = document.querySelectorAll('.slider_element_medium'); // parent for divs contain text and image
    var number_elements_medium = slider_objects_medium.length; // length of medium slider's mobile elements
    // variables for slider_large
    var forest = document.querySelector('.select_forest'); // tag 'forest' to select in gallery from 901px
    var mountains = document.querySelector('.select_mountains'); // tag 'mountains' to select in gallery from 901px
    var desert = document.querySelector('.select_desert'); // tag 'desert' to select in gallery from 901px
    var field = document.querySelector('.select_field'); // tag 'field' to select in gallery from 901px
    var clouds = document.querySelector('.select_clouds'); // tag 'clouds' to select in gallery from 901px
    var water = document.querySelector('.select_water'); // tag 'water reservoir' to select in gallery from 901px
    var build = document.querySelector('.select_build'); // tag 'build-up area' to select in gallery from 901px
    var select_aside = document.querySelectorAll('.aside_large li'); // aside in slider_large to select by tag
    var slider_objects_large = document.querySelectorAll('.slider_element_large'); // parent for divs contain text and image
    var aside_choose = document.querySelector('.aside_bag'); // div of aside which show and hide list with tags
    var aside_list = document.querySelector('.aside_list_select'); // list with tags
    var aside_button = document.querySelector('.aside_button'); // button which show every photo
    var cross = document.querySelector('.secret_cross'); // cross who decrease increased photo
    var mouse_check = document.querySelector('.mouseout_event'); // div which will react for mouseover and mouseout in list with tags
    // begin propositions
    change_top.classList.add('hide_me'); // hide change_top
    change_bottom.classList.add('hide_me'); // hide change_bottom
    change_right.classList.add('hide_me'); // hide change_right
    change_left.classList.add('hide_me'); // hide change_left
    cross.style.opacity = '0'; // hide cross

    /* VARIABLES -- END */

    /* VERTICAL SLIDER to 600px -- BEGIN */

    function verticalSlider(j) { // function for verticalSlider to 600px
        for (var k = 0; k < slider_objects_small.length; k++) {
            slider_objects_small[k].classList.remove('small_img_small');
        }
        if (slider_objects_small[j].classList.contains('large_img_small')) {

        } else {
            slider_objects_small[j].classList.add('large_img_small');
        }

        /* button to bottom -- BEGIN*/

        change_bottom_alternate.addEventListener('click', function() { // function for bottom button
            slider_objects_small[j].classList.remove('large_img_small');
            slider_objects_small[j + 1].classList.add('large_img_small');
            slider_objects_small[j + 1].classList.remove('small_img_small');
            slider_objects_small[j].classList.add('small_img_small');
            list_elements_small.style.transitionDuration = '1.5s';
            list_elements_small.style.transform = 'translate(0,' + j * (-145) + 'px)';
            if (j === (number_elements_small - 2)) { // position when I change button with yellow triangle with grey triangle
                change_bottom.classList.remove('hide_me');
                change_bottom_alternate.classList.add('hide_me');
            } else if (j === 0) { // position when I change button with yellow triangle with grey triangle
                change_top.classList.add('hide_me');
                change_top_alternate.classList.remove('hide_me');
            } else if (j > 0 && j < (number_elements_small - 2)) { // position when I show only buttons with yellow triangle
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
                if (j === (number_elements_small - 1)) { // position when I change button with yellow triangle with grey triangle
                    change_bottom.classList.add('hide_me');
                    change_bottom_alternate.classList.remove('hide_me');
                } else if (j === 1) { // position when I change button with yellow triangle with grey triangle
                    change_top.classList.remove('hide_me');
                    change_top_alternate.classList.add('hide_me');
                } else if (j > 1 && j < (number_elements_small - 1)) { // position when I show only buttons with yellow triangle
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

    /* VERTICAL SLIDER to 600px -- END */

    /* HORIZONTAL SLIDER from 601px to 900px -- BEGIN */

    function horizontalSlider(i) { // function for horizontalSlider from 601px to 900px
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
            if (i === (number_elements_medium - 2)) { // position when I change button with yellow triangle with grey triangle
                change_right.classList.remove('hide_me');
                change_right_alternate.classList.add('hide_me');
                slider_objects_medium[i + 1].classList.remove('small_img_medium');
                slider_objects_medium[i].classList.add('small_img_medium');
            } else if (i === 0) { // position when I change button with yellow triangle with grey triangle
                change_left.classList.add('hide_me');
                change_left_alternate.classList.remove('hide_me');
                slider_objects_medium[i + 1].classList.remove('small_img_medium');
                slider_objects_medium[i].classList.add('small_img_medium');
            } else if (i > 0 && i < (number_elements_medium - 2)) { // position when I show only buttons with yellow triangle
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
                if (i === (number_elements_medium - 1)) { // position when I change button with yellow triangle with grey triangle
                    change_right.classList.add('hide_me');
                    change_right_alternate.classList.remove('hide_me');
                    slider_objects_medium[i - 1].classList.remove('small_img_medium');
                    slider_objects_medium[i].classList.add('small_img_medium');
                } else if (i === 1) { // position when I change button with yellow triangle with grey triangle
                    change_left.classList.remove('hide_me');
                    change_left_alternate.classList.add('hide_me');
                    slider_objects_medium[i - 1].classList.remove('small_img_medium');
                    slider_objects_medium[i].classList.add('small_img_medium');
                } else if (i > 1 && i < (number_elements_medium - 1)) { // position when I show only buttons with yellow triangle
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

    /* HORIZONTAL SLIDER from 601px to 900px -- END */

    /* FUNCTION which select by tag and show every photo from 901px -- BEGIN */

    function selectByTag() {
        aside_list.classList.add('hide_me');
        mouse_check.addEventListener('mouseover', function() {
            aside_button.classList.add('hide_me');
            aside_list.classList.remove('hide_me');
        })
        mouse_check.addEventListener('mouseout', function() {
            aside_button.classList.remove('hide_me');
            aside_list.classList.add('hide_me');
        })
        for (var k = 0; k < select_aside.length; k++) {
            select_aside[k].addEventListener('click', function() { // when I select tag, I hide photos without the tag
                for (var l = 0; l < slider_objects_large.length; l++) {
                    slider_objects_large[l].classList.add('hide_me');
                    if (slider_objects_large[l].dataset.tag.indexOf(this.dataset.name) === -1) {} else {
                        slider_objects_large[l].classList.remove('hide_me');
                    }
                }
                aside_choose.children[1].innerText = this.dataset.name;
                aside_list.classList.add('hide_me');
                aside_button.classList.remove('hide_me');
            })
        }
        aside_button.addEventListener('click', function() { // when I click button, I show every photo
            for (var m = 0; m < slider_objects_large.length; m++) {
                slider_objects_large[m].classList.remove('hide_me');
                slider_objects_large[m].classList.remove('normal_view');
                slider_objects_large[m].classList.remove('visibility_better');
                aside_choose.children[1].innerText = 'select tag';
            }
        })
    }

    /* FUNCTION  which select by tag and show every photo from 901px -- END */

    /* FUNCTION which increase and decrease photo from 901px -- BEGIN */

    function showMeBiggest() {
        for (var p = 0; p < slider_objects_large.length; p++) {
            slider_objects_large[p].addEventListener('click', function() { // when I click photo, photo is bigger
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
                for (var t = 0; t < slider_objects_large.length; t++) {
                    if (slider_objects_large[t].classList.contains('bigger_view')) {

                    } else {
                        slider_objects_large[t].classList.add('visibility_worse');
                    }
                }
            })
        }
        cross.addEventListener('click', function() { // when I click cross, photo is normal
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
    /* FUNCTION which increase and decrease photo from 901px -- END */

    /* FUNCTIONS which 'turn off' and 'turn on' functions by width size -- BEGIN */

    var savePositionVertical = j; // 1
    var savePositionHorizontal = i; // 1

    function requirementSizeWidth() {
        var width = document.body.clientWidth; // variable who take window's width
        var j = savePositionVertical; // variable which save actual position in vertical slider
        var i = savePositionHorizontal; // variable which save actual position in horizontal slider
        if (width < 601) {
            verticalSlider(j); // call function
        } else if (width >= 601 && width < 901) {
            horizontalSlider(i); // call function
        } else if (width >= 901) {
            selectByTag(); // call function
            showMeBiggest(); // call function
        } else {
            console.log('bad width');
        }
    }

    requirementSizeWidth(); // call function

    function SelectToolsToSize() { //function which call function nieWiem when we change window's width

        window.addEventListener('resize', function() {
            requirementSizeWidth(); // call function
        })
    }

    SelectToolsToSize(); // call function

    /* FUNCTIONS which 'turn off' and 'turn on' functions by width size -- END */

});
