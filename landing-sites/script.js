document.getElementById('big-logo').addEventListener('click', function(event) {

    var openMenuButton = document.querySelector('.open-menu-button');
    openMenuButton.classList.toggle('active');

    // Toggle active state on the logo image
    // var imageState = document.getElementById('big-logo');
    // imageState.classList.toggle('active');
    // imageState.classList.remove('load');
    // console.log("Image state toggled:", event);

    // Toggle activate class on the menu circles
    var smallCircle = document.getElementById('menu-circles');
    smallCircle.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    
    var smallCircle = document.getElementById('menu-circles');
    var openMenuButton = document.querySelector('.open-menu-button');

    if (!openMenuButton.contains(event.target) && !smallCircle.contains(event.target)) {
        if (smallCircle.classList.contains('active') && smallCircle.contains(event.target)){
            smallCircle.classList.remove('active');
        }

        if (openMenuButton.classList.contains('active') && smallCircle.classList.contains('active')) {
            openMenuButton.classList.remove('active');
            smallCircle.classList.remove('active');
        }
    }
});

const circles = document.querySelectorAll('.small-circle');

circles.forEach(circle => {
    circle.addEventListener('click', function() {
        const item = this.getAttribute('data-item');

        circles.forEach(c => {
            const cItem = c.getAttribute('data-item'); 
            const notActiveImage = "../components/menu/" + cItem + "-svgrepo-com.png"; 
            c.classList.remove('active'); 
            c.querySelector('img').src = notActiveImage; 
        });

        this.classList.toggle('active');

        var notActiveImage = "../components/menu/" + item + "-svgrepo-com.png";
        var activeImage = "../components/menu/" + item + "-svgrepo-com-active.png";
        if (this.classList.contains('active')) {
            this.querySelector('img').src = activeImage; 
        } else {
            this.querySelector('img').src = notActiveImage;  
        }
        checkActiveMenu();
    });
});



