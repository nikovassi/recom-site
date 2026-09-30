(function ($) {
    "use strict";

    function init() {
        // Spinner
        setTimeout(function () {
            $('#spinner').removeClass('show');
        }, 1);

        // Initiate the wowjs (animates elements, incl. the header/footer partials)
        new WOW().init();

        // Sticky Navbar
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.sticky-top').addClass('shadow-sm').css('top', '0px');
            } else {
                $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
            }
        });

        // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $(document).on('click', '.back-to-top', function () {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
            return false;
        });
    }

    // Топбарът, менюто и футърът се зареждат динамично (виж js/include.js),
    // затова изчакваме да са готови, преди да пуснем спинъра/анимациите —
    // така няма да "мигне" непремахнат спинър или невключен футър.
    document.addEventListener('partials:loaded', function () {
        init();
    });

})(jQuery);
