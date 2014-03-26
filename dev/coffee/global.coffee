'use strict'
$ ->
	$("#toggleButton").click ->
		$("#toggledMenu").slideToggle()
		return false
	$(window).resize ->
		win = $(window).width()
		p = 480
		if win > p
			$("#toggledmenu").show()
		else
			$("#toggledmenu").hide()
