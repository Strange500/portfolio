document.addEventListener("DOMContentLoaded", function() {
    const tooltip = document.getElementById('tooltip');



    let images = document.getElementById('techContainer').querySelectorAll('img');

    for (let i = 0; i < images.length; i++) {
        console.log(images[i]);
        images[i].addEventListener('mouseover', function() {
            tooltip.textContent = images[i].alt; // Set tooltip text to the alt attribute
            tooltip.style.display = 'block'; // Show the tooltip
        });

        images[i].addEventListener('mouseout', function() {
            tooltip.style.display = 'none'; // Hide the tooltip
        });

        images[i].addEventListener('mousemove', function(e) {
            // Update the tooltip position based on mouse coordinates
            tooltip.style.left = e.pageX + 10 + 'px'; // Offset tooltip on X-axis
            tooltip.style.top = e.pageY + 10 + 'px'; // Offset tooltip on Y-axis
        });
    }

    /*img.addEventListener('mouseover', function(elt) {
        tooltip.textContent = elt.alt; // Set tooltip text to the alt attribute
        tooltip.style.display = 'block'; // Show the tooltip
    });



    img.addEventListener('mouseout', function() {
        tooltip.style.display = 'none'; // Hide the tooltip
    });*/
});