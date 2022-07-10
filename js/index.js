$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY>20){
      $('.navbar').addClass('sticky');
      $('.navbar-brand').addClass('sticky');
      
    }
    else{
      $('.navbar').removeClass('sticky');
      $('.navbar-brand').removeClass('sticky');
     
    }
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});




