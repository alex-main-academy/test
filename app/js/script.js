$(document).ready(function () {

    $('.burger, .menu__link').click(function () {
        $('.burger, .menu').toggleClass('active')
        $('body').toggleClass('lock')
        if(window.pageYOffset > 200) {
            $('.small-header').toggleClass('active')
        }
    })

    let mouseCursor = document.querySelector('.cursor')
    window.addEventListener('mousemove', cursor)
    function cursor(e) {
        mouseCursor.style.top = e.pageY + 'px'
        mouseCursor.style.left = e.pageX + 'px'
    }

    let smallHeader = document.querySelector('.small-header')
    let burger = document.querySelector('.burger')
    window.addEventListener('scroll', showSmallHeader)
    function showSmallHeader() {
        if(window.pageYOffset > 700) {
            smallHeader.classList.add('active')
            burger.classList.add('new-position')
        } else {
            smallHeader.classList.remove('active')
            burger.classList.remove('new-position')
        }
    }

    window.addEventListener("scroll", function () {
        document.querySelector('.business__lilstar')
            .style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
        document.querySelector('.business__bigstar')
            .style.transform = "rotate(" + -window.pageYOffset / 5 + "deg)";
        document.querySelector('.media__lilstar')
            .style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
        document.querySelector('.media__bigstar')
            .style.transform = "rotate(" + -window.pageYOffset / 5 + "deg)";
    });

    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });

    new Rellax('.rellax', {
        breakpoints: [0, 801, 1201]
    })
    new Rellax('.parellax', {
        breakpoints: [0, 801, 1201],
        horizontal: true
    })

    for (let i = 1; i < 25; i++) {
        new Parallax(document.getElementById(`scene${i}`));
    }

})
