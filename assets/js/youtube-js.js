    //load IFrame API
    var tag=document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);
    //$('head').append('<script src="https://www.youtube.com/iframe_api"></script>');

var player;
function onYouTubeIframeAPIReady(){
    player= new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    }); 
}


function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event){
    if(event.data == YT.PlayerState.PLAYING && !done){
        setTimeout(stopVideo, 2222);
        done = true;
    }
    function stopVideo(){
        addOverlay();
        player.stopVideo();
    }

}
