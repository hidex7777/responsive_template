'use strict'
$ ->
	$("#toggleButton").click ->
		$("#sideMenu").slideToggle()
		return false
	$(window).resize ->
		win = $(window).width()
		p = 768
		if win > p
			$("#sideMenu").show()
		else
			$("#sideMenu").hide()
