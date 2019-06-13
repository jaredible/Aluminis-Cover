$(function() {
  $('a[href*=\\#]').on('click', function(e) {
    e.preventDefault();
    console.log('here');
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'swing');
  });
});
