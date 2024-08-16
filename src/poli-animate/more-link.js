$(".et_pb_team_member").each(function () {
	$team    = $(this)
	$desc    = $team.find('.et_pb_team_member_description');
	$bioData = $desc.children().not('.et_pb_module_header,.et_pb_member_position')
	$bio     = $('<div class="bio" style="display:none">')
	$bio.append($bioData)
	$desc.append($bio)
	$desc.append('<p class="btn">Read Bio</p>')

	$team.on('click touch', function () {
		$(this).toggleClass('open')
		$(this).find('.bio').toggle('')
	})
});
