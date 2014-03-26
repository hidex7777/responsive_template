'use strict'
$ ->
	$("#toggleButton").click ->
		$("#sideMenu").slideToggle()
		return false
	$(window).resize ->
		win = $("body").width()
		#debug
		console.log win
		p = 752
		if win > p
			$("#sideMenu").show()
		else
			$("#sideMenu").hide()
