window.onscroll = function() {
	scrollFunction()
};
$(document).ready(function() {
	$('a[href^="#"]').on('click', function(event) {
		var target = $($(this).attr('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top - 80
			}, 1000);
		}
	});
});

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});



//counter
$(window).scroll(function() {
   var hT = $('#counter-block').offset().top,
       hH = $('#counter-block').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 2000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
   }
});
//counter end

