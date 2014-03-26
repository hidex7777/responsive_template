(function() {
  'use strict';
  $(function() {
    $("#toggleButton").click(function() {
      $("#sideMenu").slideToggle();
      return false;
    });
    return $(window).resize(function() {
      var p, win;
      win = $("body").width();
      console.log(win);
      p = 752;
      if (win > p) {
        return $("#sideMenu").show();
      } else {
        return $("#sideMenu").hide();
      }
    });
  });

}).call(this);
