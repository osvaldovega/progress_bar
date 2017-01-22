// Get the dialog
let modal = document.getElementById('dilg_myProgress');
// Get the button that opens the dialog
let btn = document.getElementById('btn_myProgress');
// When the user clicks the button, open the dialog
btn.onclick = function() {
    modal.style.display = "block";
    setTimeout(getProgress(), 5000);
}
// When the user clicks outside of the dialog, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Progress bar
function getProgress() {
  let elem = document.getElementById('progress_bar');
  let div = document.getElementById('progress_bar_div');
  let label = document.getElementById('progress_bar_lbl');
  let span = document.getElementById('amount_span');
  let width = 0;
  let amount = 0;
  let id = setInterval(frame, 80);

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
