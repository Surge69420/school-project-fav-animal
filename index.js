var openButton = document.getElementById('openButton');

if (openButton) {
    openButton.addEventListener('click', function() {
        console.log("pressed");
        document.getElementById('coverwholescreenUn').classList.add('coverwholescreen');
        setTimeout(function() {
            // Redirect to a different HTML page
            window.location.href = 'infopanel.html';
        }, 1000);
    });
}
var openButton2 = document.getElementById('openButton2');

if (openButton2) {
    openButton2.addEventListener('click', function() {
        console.log("pressed");
        document.getElementById('coverwholescreenUn').classList.add('coverwholescreen');
        setTimeout(function() {
            // Redirect to a different HTML page
            window.location.href = 'index.html';
        }, 1000);
    });
}
  document.getElementById('PlayHam').addEventListener('click', function() {
    var audio = document.getElementById('Ham');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0; // Reset audio to the beginning
        audio.play();
    }
});



var WolfplayButtons = document.querySelectorAll('.playWolf');

// Loop through each play button and add the click event listener
WolfplayButtons.forEach(function(WolfplayButtons) {
  WolfplayButtons.addEventListener('click', function() {
        // Get the associated audio element
        var audio = document.getElementById("wolfAudio"); // Assumes audio element is right before the button
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0; // Reset audio to the beginning
            audio.play();
        }
    });
});
