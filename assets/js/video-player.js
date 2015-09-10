$(function() {
    initMediaPlayer();
});

var mediaPlayer;
var mediaPlayerDOM;
function initMediaPlayer() {
    $('#video').attr('controls', false);
    mediaPlayerDOM = $('#video').get(0);

    
}

$('#play-toggle').click(function() {
        if(mediaPlayerDOM.paused){
            mediaPlayerDOM.play();
            this.title = 'pause';
            this.innerHTML = 'pause';
            this.className = 'pause';
        }
        else{
            mediaPlayerDOM.pause();
            this.title = 'play';
            this.innerHTML = 'play';
            this.className = 'play';
        }
    });

function togglePlayPause(){
    var button = $('play-toggle');
    if(mediaPlayer.paused)
        alert('is paused');



}    
