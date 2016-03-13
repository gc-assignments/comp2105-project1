$(document).ready(function() {
  $('#toggle').click(function(e) {
    e.preventDefault();
    var toggle = $(this);
    var fire = $('#fire');

    toggle.toggleClass('toggle--on')
          .toggleClass('toggle--off')
          .addClass('toggle--moving');
    fire.toggleClass('on');

    setTimeout(function() {
      toggle.removeClass('toggle--moving');
    }, 200);
  });
});
