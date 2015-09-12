$(function() {
    initMediaPlayer();
    bindButtons();
});

var mediaPlayer;
var mediaPlayerDOM;
function initMediaPlayer() {
    $('#video').attr('controls', false);
    mediaPlayerDOM = $('#video').get(0);

    
}

function bindButtons(){
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
    
    $('#addOverlay').click(function(){
        if($("#overlay").length>0)
            $('#overlay').remove();
        else
            addOverlay();
    });
}


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

function addOverlay(){
    $('#video-player').append("<div id='overlay'><div class='interior_overlay'><form>First name:<br><input type='text' name='firstname'><br>Last name:<br><input type='text' name='lastname'></form></div></div>");
}
