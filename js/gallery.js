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

    var list_elements = document.querySelector('.list_elements'); // parent for divs contain text and image
    var slider_objects = document.querySelectorAll('.slider_element'); // parent for previous various

    change_top.classList.add('hide_me'); // hide change_top
    change_bottom.classList.add('hide_me'); // hide change_bottom

    change_right.classList.add('hide_me'); // hide change_right
    change_left.classList.add('hide_me'); // hide change_left


    // list_elements.style.transform = 'translate(0, 0)';



    /* VARIABLES -- END */

    /* SLIDER to 600px -- BEGIN*/

    /* vertical slider -- BEGIN */

    var verticalSlider = function() { // function for verticalSlider to 600px

            // console.log(list_elements.style.transform);

            // if (list_elements.style.transform = 'translate(0, 145px)') {
            //     var j = 0;
            // } else if (list_elements.style.transform = 'translate(0, 0)') {
            //     var j = 1;
            // } else if (list_elements.style.transform = 'translate(0, -145px)') {
            //     var j = 2;
            // } else if (list_elements.style.transform = 'translate(0, -290px)') {
            //     var j = 3;
            // } else if (list_elements.style.transform = 'translate(0, -435px)') {
            //     var j = 4;
            // } else if (list_elements.style.transform = 'translate(0, -580px)') {
            //     var j = 5;
            // } else if (list_elements.style.transform = 'translate(0, -725px)') {
            //     var j = 6;
            // } else if (list_elements.style.transform = 'translate(0, -870px)') {
            //     var j = 7;
            // } else if (list_elements.style.transform = 'translate(0, -1015px)') {
            //     var j = 8;
            // } else if (list_elements.style.transform = 'translate(0, -1160px)') {
            //     var j = 9;
            // }

            var j = 1;

            slider_objects[j].classList.add('large_img');

            console.log(j);

            /* button to bottom -- BEGIN*/

            change_bottom_alternate.addEventListener('click', function() { // function for bootom button


                slider_objects[j].classList.toggle('large_img');
                slider_objects[j + 1].classList.toggle('large_img');

                slider_objects[j + 1].classList.remove('small_img');
                slider_objects[j].classList.add('small_img');

                list_elements.style.transitionDuration = '1.5s';
                list_elements.style.transform = 'translate(0,' + j * (-145) + 'px)';

                if (j === 8) {
                    change_bottom.classList.remove('hide_me');
                    change_bottom_alternate.classList.add('hide_me');
                    console.log('bot1');
                } else if (j === 0) {
                    change_top.classList.add('hide_me');
                    change_top_alternate.classList.remove('hide_me');
                    console.log('bot2');
                } else if (j > 0 && j < 8) {
                    change_top.classList.add('hide_me');
                    change_top_alternate.classList.remove('hide_me');
                    slider_objects[j - 1].classList.remove('small_img');
                    slider_objects[j].classList.add('small_img');
                    slider_objects[j + 1].classList.remove('small_img');
                    console.log('bot3');
                } else {
                    console.log('error');
                }
                j = j + 1;
            })

            /* button to bottom --END */

            /* button to top --BEGIN */

            change_top_alternate.addEventListener('click', function() { // function for top button

                    slider_objects[j - 1].classList.toggle('large_img');
                    slider_objects[j].classList.toggle('large_img');

                    slider_objects[j - 1].classList.remove('small_img');
                    slider_objects[j].classList.add('small_img');

                    list_elements.style.transitionDuration = '1.5s';
                    list_elements.style.transform = 'translate(0, ' + (-j + 2) * 145 + 'px)';

                    if (j === 9) {
                        change_bottom.classList.add('hide_me');
                        change_bottom_alternate.classList.remove('hide_me');
                        console.log('top1');
                    } else if (j === 1) {
                        change_top.classList.remove('hide_me');
                        change_top_alternate.classList.add('hide_me');
                        console.log('top2');
                    } else if (j > 1 && j < 9) {
                        change_top.classList.add('hide_me');
                        change_top_alternate.classList.remove('hide_me');
                        change_bottom.classList.add('hide_me');
                        change_bottom_alternate.classList.remove('hide_me');
                        slider_objects[j - 1].classList.remove('small_img');
                        slider_objects[j].classList.add('small_img');
                        slider_objects[j + 1].classList.remove('small_img');
                        console.log('top3');
                    } else {
                        console.log('error');
                    }
                    j = j - 1;
                })
                /* button to top -- END */
        }
        /* vertical slider -- END */

    // verticalSlider();

    /* SLIDER to 600px -- END*/

    /* SLIDER to 900px -- BEGIN*/

    /* horizontal slider -- BEGIN */

    var horizontalSlider = function() { // function for horizontalSlider to 600px

        var i = 1;

        slider_objects[i].classList.add('large_img');

        /* button to right -- BEGIN*/

        var width = document.body.clientWidth;
        list_elements.style.left = '' + (-75) - (900 - width) / 2 + 'px';

        change_right_alternate.addEventListener('click', function() { // function for right button

            console.log(i);

            slider_objects[i].classList.toggle('large_img');
            slider_objects[i + 1].classList.toggle('large_img');

            slider_objects[i + 1].classList.remove('small_img');
            slider_objects[i].classList.add('small_img');

            list_elements.style.transitionDuration = '1.5s';
            list_elements.style.transform = 'translate(' + i * (-350) + 'px, 0)';

            if (i === 8) {
                change_bottom.classList.remove('hide_me');
                change_bottom_alternate.classList.add('hide_me');
                console.log('right1');
            } else if (i === 0) {
                change_top.classList.add('hide_me');
                change_top_alternate.classList.remove('hide_me');
                console.log('right2');
            } else if (i > 0 && i < 8) {
                change_top.classList.add('hide_me');
                change_top_alternate.classList.remove('hide_me');
                slider_objects[i - 1].classList.remove('small_img');
                slider_objects[i].classList.add('small_img');
                slider_objects[i + 1].classList.remove('small_img');
                console.log('right3');
            } else {
                console.log('error');
            }
            i = i + 1;
        })

        /* button to right -- END */

        /* button to left -- BEGIN */

        change_left_alternate.addEventListener('click', function() { // function for left button

                console.log(i);

                slider_objects[i - 1].classList.toggle('large_img');
                slider_objects[i].classList.toggle('large_img');

                slider_objects[i - 1].classList.remove('small_img');
                slider_objects[i].classList.add('small_img');

                list_elements.style.transitionDuration = '1.5s';
                list_elements.style.transform = 'translate(' + (-i + 2) * 350 + 'px, 0)';

                if (i === 9) {
                    change_bottom.classList.add('hide_me');
                    change_bottom_alternate.classList.remove('hide_me');
                    console.log('left1');
                } else if (i === 1) {
                    change_top.classList.remove('hide_me');
                    change_top_alternate.classList.add('hide_me');
                    console.log('left2');
                } else if (i > 1 && i < 9) {
                    change_top.classList.add('hide_me');
                    change_top_alternate.classList.remove('hide_me');
                    change_bottom.classList.add('hide_me');
                    change_bottom_alternate.classList.remove('hide_me');
                    slider_objects[i - 1].classList.remove('small_img');
                    slider_objects[i].classList.add('small_img');
                    slider_objects[i + 1].classList.remove('small_img');
                    console.log('left3');
                } else {
                    console.log('error');
                }
                i = i - 1;
            })
            /* button to left -- END */


    }

    /* horizontal slider -- END */

    /* SLIDER to 900px -- END */

    /* FUNCTION 'turn off' and 'turn on' functions by width size -- BEGIN */

    function requirementSizeWidth() {
        var width = document.body.clientWidth; // variable who take window's width

        // console.log(width);
        if (width <= 600) {
            verticalSlider(); // call function

            // console.log('verticalSlider');
            // change_left_alternate.preventDefault();
            // change_right_alternate.preventDefault();
            // if (typeof horizontalSlider == 'function') {
            //     destroyFunction();
            // }
        } else if (width <= 900) {
            horizontalSlider(); // call function

            // console.log('horizontalSlider');

            // if (typeof verticalSlider == 'function') {
            //     destroyFunction();
            // }
        } else {
            console.log('siema');
        }
    }

    requirementSizeWidth(); // call function

    // function destroyFunction() {
    //     return false;
    // };

    function SelectToolsToSize() { //function which call function nieWiem when we change window's width

        window.addEventListener('resize', function() {
            requirementSizeWidth(); // call function
        })
    }

    SelectToolsToSize(); // call function

    /* FUNCTION 'turn off' and 'turn on' functions by width size -- END */


});
