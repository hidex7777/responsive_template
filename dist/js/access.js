(function() {
  'use strict';
  var initialize;

  initialize = function() {
    var geocoder;
    geocoder = new google.maps.Geocoder();
    return geocoder.geocode({
      'address': '福島県福島市御山中屋敷100-4'
    }, function(result, status) {
      var latlng, map, mapOptions, marker;
      if (status === google.maps.GeocoderStatus.OK) {
        latlng = result[0].geometry.location;
        mapOptions = {
          center: latlng,
          zoom: 18
        };
        map = new google.maps.Map($('#map')[0], mapOptions);
        marker = new google.maps.Marker({
          position: map.getCenter(),
          map: map
        });
        return true;
      } else {
        return alert('エラーです');
      }
    });
  };

  $(function() {
    return initialize();
  });

}).call(this);
