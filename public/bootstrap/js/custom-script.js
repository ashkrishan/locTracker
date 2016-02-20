// // $("#main-id-for-navbar li a").on("click", function(){
// //   $(".nav").find(".active").removeClass("active");
// //   $(this).parent().addClass("active");
// // });

// // $('.nav.navbar-nav > li').on('click', function (e) {
// //     $('.nav.navbar-nav > li').removeClass('active');
// //     $(this).addClass('active');
// // });

// $(function() {
//         $('.nav li a').click(function() {
//           $('.nav li').removeClass();
//           $($(this).attr('href')).addClass('active');
//         });
// });

// // $(function(){
// //   var hash = window.location.hash;
// //   hash && $('ul.nav a[href="' + hash + '"]').tab('show');

// //   $('#bs-example-navbar-collapse-1 a').click(function (e) {
// //     $(this).tab('show');
// //     var scrollmem = $('body').scrollTop();
// //     window.location.hash = this.hash;
// //     $('html,body').scrollTop(scrollmem);
// //   });
// // });

$(document).ready(function () {
        var url = window.location;
        $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
        $('ul.nav a').filter(function() {
             return this.href == url;
        }).parent().addClass('active');
});

