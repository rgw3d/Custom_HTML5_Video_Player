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
    $('#video-player').append("<div id='overlay'></div>");
    $('#overlay').css({
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'width': '100%',
        'z-index': 5000,
        'opacity': 0.5,
        'background-color': 'gray'
    }).height($('#video-player').height());
}
