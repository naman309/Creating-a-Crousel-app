"use strict";
$(document).ready( () => {
    const slider = $("#image_list"); // fetching my ul list as slider
    const images = $('#image_list li');

    //Getting total images available in the file
    const totalImages = images.length;

    // right button click event
    $("#right_button").click( () => {
        // get the value of the left property
        const leftProperty = parseInt(slider.css("left"));
        // move to the nest value of the left property
        let newLeftProperty = 0;

        // if it is not the last three books
        if (leftProperty - 100 > -(totalImages - 2) * 100) {
            newLeftProperty = leftProperty - 100;
        }
        else {
            // move to start (first three books)
            newLeftProperty = 0;
        }

        // change the left property
        slider.animate(
            {left: newLeftProperty},
            1000
        );
    });

    // left button click event
    $("#left_button").click( () => {
        const leftProperty = parseInt(slider.css("left"));
        // move to the nest value of the left property
        let newLeftProperty = 0;

       // if it is not the first three books
       if (leftProperty < 0) {
             newLeftProperty = leftProperty + 100;
        }
        else {
            // move to last (last three books)
            newLeftProperty = leftProperty - (totalImages - 3) * 100;
        }
        slider.animate(
            {left: newLeftProperty},
            1000
        );
    });
});