document.write( '<nav class=\"navbar navbar-expand-md bg-light navbar-dark fixed-top\" >\n' );
document.write( '        <div id=\"nav_desktop\">\n' );
document.write( '           \n' );
document.write( '            <a class=\"navbar-brand \" href=\"cht.html\">Aaron Hsu</a>\n' );
document.write( '        </div>\n' );
document.write( '\n' );
document.write( '        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n' );
document.write( '            <span class=\"navbar-toggler-icon\"></span>\n' );
document.write( '        </button>\n' );
document.write( '        <div class=\"collapse navbar-collapse text-center\" id=\"collapsibleNavbar\">\n' );
document.write( '            <ul class=\"navbar-nav text-center\" style=\"margin:0 auto;\">\n' );
document.write( '                <li class=\"nav-item\">\n' );
document.write( '                    <a id=\"menu-1\" class=\"nav-link\" href=\"about_cht.html\">關於我</a>\n' );
document.write( '                </li>\n' );
document.write( '                <li class=\"nav-item\">\n' );
document.write( '                    <a id=\"menu-2\" class=\"nav-link   \" href=\"poct_cht.html\"><b>定點照護血液檢驗系統</b></a>\n' );
document.write( '                </li>\n' );
document.write( '                <li class=\"nav-item\">\n' );
document.write( '                    <a id=\"menu-3\" class=\"nav-link \" href=\"lh_cht.html\">女性黃體檢測系統</a>\n' );
document.write( '                </li>\n' );
document.write( '                <li class=\"nav-item\">\n' );
document.write( '                    <a id=\"menu-4\" class=\"nav-link  \" href=\"lh-2_cht.html\">女性黃體檢測 App-v2</a>\n' );
document.write( '                </li>\n' );
document.write( '                <li class=\"nav-item\">\n' );
document.write( '                    <a id=\"menu-5\" class=\"nav-link\" href=\"sideprojects_cht.html\">Side Projects</a>\n' );
document.write( '                </li>\n' );
document.write( '            </ul>\n' );
document.write( '            <ul class=\"navbar-nav\">\n' );
document.write( '                <li class=\"nav-item\" style=\"border-bottom:1px solid grey;\">\n' );
document.write( '                    <a id=\"language\" class=\"nav-link\" >En</a>\n' );
document.write( '                </li>\n' );
document.write( '            </ul>\n' );
document.write( '        </div>\n' );
document.write( '    </nav>' );

var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('.navbar').addClass('navbar-padding-up').removeClass('navbar-padding-down');
        
    } else {
        $('.navbar').removeClass('navbar-padding-up').addClass('navbar-padding-down');
      
    }
    lastScrollTop = st;
});