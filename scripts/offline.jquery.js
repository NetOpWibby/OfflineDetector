/* jshint undef: true, unused: true */
/* global navigator, $, window */



//------------------------------
// On/Offline Detector
//------------------------------

function update() {
  if (!navigator.onLine) {
    $("body").prepend(
      "<div class='app-offline'>" +
        "YOU ARE OFFLINE<br/>" +
        "Please reconnect to resume activity" +
      "</div>"
    );

    $(".app-offline").css({
      "top": "50%", "left": 0,

      "background-color": "#ff4136",
      "color": "white",
      "cursor": "default",
      "font-size": "1rem",
      "font-weight": 600,
      "line-height": "1.33",
      "padding": "1rem",
      "position": "fixed",
      "text-align": "center",
      "transform": "translateY(-100%)",
      "width": "100%",
      "z-index": 999
    });
  } else {
    $(".app-offline").remove();
  }
}

window.addEventListener("offline", update);
window.addEventListener("online", update);

update();