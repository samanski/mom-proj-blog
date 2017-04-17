$(function () {

    function setSharePosition() {
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;
        var docHeight = document.innerHeight;
        var topCSS, topOrig, scrollTopLimit, prevOpacity;

        if (windowWidth >= 1024) {
            topCSS = '91px';
            topOrig = 91;
            scrollTopLimit = 695;
            prevOpacity = 1;
        } else if (windowWidth >= 768) {
            topCSS = '91px';
            topOrig = 91;
            scrollTopLimit = 695;
            prevOpacity = 1;
        } else {
            topCSS = '277px';
            topOrig = 277;
            scrollTopLimit = 627;
            prevOpacity = 0.65;
        }


        var share = $('#share').css('top', topCSS).offset();
        $window = $(window);
        $document = $(document);

        $window.scroll(function (e) {
            if ($document.scrollTop() < scrollTopLimit) {
                $('#share').css({
                    position: 'absolute',
                    top: topOrig,
                    opacity: prevOpacity
                });
            } else {
                $('#share').css({
                    position: 'fixed',
                    top: 10,
                    opacity: 1
                });
            }
        });
    }
    window.addEventListener('scroll', setSharePosition, true);

});