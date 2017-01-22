// Get the dialog
var dialog = document.getElementById('dilg_myProgress');
// Get the button that opens the dialog
var btn = document.getElementById('btn_myProgress');

// When the user clicks the button, open the dialog
btn.addEventListener("click", function openDialog() {
    dialog.style.display = "block";
    setTimeout(getProgress(), 5000);
});

// When the user clicks outside of the dialog, close it
window.onclick = function(event) {
    if (event.target == dialog) {
        dialog.style.display = "none";
    }
}

// Progress bar
function getProgress() {
  var elem = document.getElementById('progress_bar');
  var div = document.getElementById('progress_bar_div');
  var label = document.getElementById('progress_bar_lbl');
  var span = document.getElementById('amount_span');
  var width = 0;
  var id = setInterval(frame, 80);

  function frame() {
    if (width >= 45) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      label.innerHTML = '$' + Math.round((width * 125) / 100);
      span.innerHTML = '$' + (125 - Math.round((width * 125) / 100));
      div.style.left = (width * 1 + '%');
    }
  }
}
