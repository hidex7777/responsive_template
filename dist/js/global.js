(function() {
  'use strict';
  $(function() {
    $("#toggleButton").click(function() {
      $("#toggledMenu").slideToggle();
      return false;
    });
    return $(window).resize(function() {
      var p, win;
      win = $(window).width();
      p = 480;
      if (win > p) {
        return $("#toggledmenu").show();
      } else {
        return $("#toggledmenu").hide();
      }
    });
  });

}).call(this);
