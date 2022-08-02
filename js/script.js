// A $( document ).ready() block.
$( document ).ready(function() {
    try {
        subMenuChecker();
        menuHoverIconChange();
        hamburgerCloseIcon();
        mobileSubMenuExpand();
    }
    catch(err) {
        alert(err);
    }

});



function subMenuChecker() {

    $( ".header .ul-first-level li" ).each(function() {
        if ($(this).find("ul").length) {
            $(this).addClass("icon icon-arrow-down dropdown");
        }
    });
}

function menuHoverIconChange() {
    $( ".header__links .icon-arrow-down" ).hover(
        function() {
            $( this ).toggleClass("icon-arrow-up");
        }
    );
}


function hamburgerCloseIcon() {
    $( ".header__menu" ).click(function() {

        if ($("header").hasClass("opened")) {
            $(this).removeClass("close-icon")
            $(".overlay").removeClass("overlay-open");
            $(".modal-menu").removeClass("modal-open");
            $(".modal-menu").addClass("modal-close");
            $(".overlay").addClass("overlay-close");
        }else{
            $(this).addClass("close-icon")
            $(".overlay").addClass("overlay-open");
            $(".modal-menu").addClass("modal-open");
            $(".modal-menu").removeClass("modal-close");
            $(".overlay").removeClass("overlay-close");
        }
        $("header").toggleClass("opened");

    });
}


function mobileSubMenuExpand(){
    $( ".modal-menu .dropdown" ).click(function() {

        $( this ).toggleClass("icon-arrow-up");

        if ($(".clickable-menu",this).hasClass("sub-menu-opened")) {

            $(".clickable-menu",this).removeClass("sub-menu-opened");
            $(".clickable-menu",this).addClass("sub-menu-closed");

        }else{

            $(".clickable-menu",this).addClass("sub-menu-opened");
            $(".clickable-menu",this).removeClass("sub-menu-closed");
        }


    })
}
