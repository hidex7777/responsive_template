(function() {
  'use strict';
  $(function() {
    $("#toggleButton").click(function() {
      $("#sideMenu").slideToggle();
      return false;
    });
    return $(window).resize(function() {
      var p, win;
      win = $(window).width();
      p = 768;
      if (win > p) {
        return $("#sideMenu").show();
      } else {
        return $("#sideMenu").hide();
      }
    });
  });

}).call(this);
