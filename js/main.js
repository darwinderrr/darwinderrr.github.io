$(".nav-toggle").click(function() {
   if($(this).hasClass("active")) {
       $(this).removeClass("active");
       $("div.nav").removeClass("active");
   } else {
    $(this).addClass("active");
    $("div.nav").addClass("active");
   }
});