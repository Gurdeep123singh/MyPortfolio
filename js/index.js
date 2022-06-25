$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY>20){
      $('.navbar').addClass('sticky');
    }
    else{
      $('.navbar').removeClass('sticky');
    }
  });
});

// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".navbar-fixed-top");
//     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//   });
// });

// project Section

function makeUrl(){
  window.open("file:///C:/Users/Ronak/Desktop/web%20development/Drum%20Kit%20Starting%20Files/index.html","_blank");
}
