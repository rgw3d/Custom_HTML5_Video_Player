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
            toggleButton(this,'pause');
        }
        else{
            mediaPlayerDOM.pause();
            toggleButton(this,'play');
        }
});

$('#stop-button').click(function(){
    if(mediaPlayerDOM.currentTime !=0 && !mediaPlayerDOM.paused)
        $('#play-toggle').trigger('click');
    mediaPlayerDOM.currentTime = 0;

});

function toggleButton(button, value){
    button.title = value;
    button.innerHTML = value;
    button.className = value;
}

function togglePlayPause(){
    var button = $('play-toggle');
    if(mediaPlayer.paused)
        alert('is paused');



}    
