
document.addEventListener('scroll', function() {
    var target = document.querySelector('#techContainer');
    var rect = target.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        var divs = target.querySelectorAll('div');
        divs.forEach((div, index) => {
            setTimeout(() => {
                div.style.opacity = 1;
            }, 250 * index);
        });
        var uls = target.querySelectorAll('ul');
        uls.forEach((ul, index) => {
            var lis = ul.querySelectorAll('li');
            console.log(lis);
            lis.forEach((li, index) => {
                setTimeout(() => {
                    li.style.opacity = 1;
                }, 250 * index);
            });
        });
    }
});

