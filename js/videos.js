
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		videoId: 'UWPM66e8oOg'
	});
}

$( document ).ready( function () {
	var bodyHeight = $(window).height();
	var wrapperHeight = bodyHeight - 60;

	$(".wrapper").css({ "height" : wrapperHeight, "margin-top" : 30});

	$(window).resize(function(){
		var bodyHeight = $(window).height();
		var wrapperHeight = bodyHeight - 60;

		$(".wrapper").css({ "height" : wrapperHeight,
							"margin-top" : 30});
	});

	$('.videos-list li').on('click', function () {

		var url = $(this).attr('data-video-id');
		player.cueVideoById(url);

	});

	$(".videos-list, .videos-player").mCustomScrollbar({theme:"dark", scrollInertia: 0});

});
