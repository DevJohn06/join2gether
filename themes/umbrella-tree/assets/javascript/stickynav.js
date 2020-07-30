// (function($) {
//     "use strict";

//     var $navbar = $("#navbar"),
//         y_pos = $navbar.offset().top,
//         height = $navbar.height();

//     $(document).scroll(function() {
//         var scrollTop = $(this).scrollTop();

//         if (scrollTop > y_pos + height) {
//             $navbar.addClass("navbar-fixed").animate({
//                 top: 0
//             });
//         } else if (scrollTop <= y_pos) {
//             $navbar.removeClass("navbar-fixed").clearQueue().animate({
//                 top: "0px"
//             }, 0);
//         }
//     });

// })(jQuery, undefined);

(function($) {
    "use strict";

    var $navbar = $("#navbar"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("navbar-fixed").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("navbar-fixed").clearQueue().animate({
                top: "0px"
            }, 0);
        }

        // if ($navbar.hasClass("navbar-fixed") || $navbar.hasClass("navbar-secondary")){
        //     $('#homeLogo').attr("src",getRootWebSitePath()+"/storage/app/media/logo.png");
        // } 
    
        // else {
        //     $('#homeLogo').attr("src",getRootWebSitePath()+"/storage/app/media/logo-w.png");
        // }
    });
})(jQuery, undefined);


// GET ROOT PATH
function getRootWebSitePath()
{
    var _location = document.location.toString();
    var applicationNameIndex = _location.indexOf('/', _location.indexOf('://') + 3);
    var applicationName = _location.substring(0, applicationNameIndex) + '/';
    var webFolderIndex = _location.indexOf('/', _location.indexOf(applicationName) + applicationName.length);
    var webFolderFullPath = _location.substring(0, webFolderIndex);

    return webFolderFullPath;
}