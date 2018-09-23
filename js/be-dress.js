$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true
        }
    }
  })
});

$(document).ready(function(){
  $('a.trigger').on('click', function(){
    $(this).find('img').toggleClass('rotate-icon');

    $('.dropdown').toggleClass('active');

    return false;
  });

  var maxLength = 200;
  $('textarea').keyup(function() {
    var length = $(this).val().length;
    var length = maxLength-length;
    $('#chars').text(length);
  });


});