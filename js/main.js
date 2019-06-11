//$.firefly({
//  minPixel: 1,
//  maxPixel: 3,
//  total: 25
//});

$(function() {
  $('a[href*=\\#]').on('click', function(e) {
    e.preventDefault();
    console.log('here');
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'swing');
  });
});
