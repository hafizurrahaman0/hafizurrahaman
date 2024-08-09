document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.links').classList.toggle('active');
    document.querySelector('main').classList.toggle('blurred');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
