$(function(){

    $('#my-menu').mmenu();
});



 document.addEventListener(
        "DOMContentLoaded", () => {
            var menu = new Mmenu( "#my-menu", {
                extensions: ["theme-dark", "fx-menu-slide", "position-right", "shadow-page"]
            }, 
            {
                offCanvas: {
                    page: {
                        nodetype: "header"
                    }
                },
            },
            { navbar: {
                title: "my custom title"
            },
                navbars: [{
                    position: "top",
                    content: ["prev", "title"]
                }]
            });

            var api = menu.API;

            api.bind( "open:start", function(){
                $('.hamburger').addClass('is-active');
            });``
            api.bind( "close:before", function(){
                $('.hamburger').removeClass('is-active');
            } );
});






  