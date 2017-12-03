$(document).ready(function () {
    $('.description').hide();
    //$(".title").style.backgroundImage = "url('../img/open.png')";
    $('.title').css({
        'background-image': 'url(../assets/img/open.png',
        'background-repeat' : 'no-repeat'
    });
    $(".title").click(function () {
        var title = $(this);
        var description = title.next(".description");

        if (description.css("display") == "none") {
            description.slideDown(function () {
                title.css({
                    'background-image': 'url(../assets/img/close.png',
                    'background-repeat' : 'no-repeat'
                });

            });
        } else {
            description.slideUp(function () {
                title.css({
                    'background-image': 'url(../assets/img/open.png',
                    'background-repeat' : 'no-repeat'
                });
            });
        }
    });
});