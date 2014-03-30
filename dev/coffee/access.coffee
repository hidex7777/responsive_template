#access.coffee
'use strict'
initialize = ->
	geocoder = new google.maps.Geocoder()
	geocoder.geocode
		'address': '福島県福島市御山中屋敷100-4'
		,(result, status) ->
			if status is google.maps.GeocoderStatus.OK
				latlng = result[0].geometry.location
				mapOptions =
					center: latlng
					zoom: 18
				map = new google.maps.Map $('#map')[0], mapOptions
				marker = new google.maps.Marker
					position: map.getCenter()
					map: map
				return true
			else
				alert 'エラーです'
$ ->
	initialize()