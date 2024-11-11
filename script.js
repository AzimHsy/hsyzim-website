var SomebodyPleasure = document.getElementById("SomebodyPleasure");
var sanchez = document.getElementById("sanchez");
var pHati = document.getElementById("pHati");
var feather = document.getElementById("feather");
var getsMe = document.getElementById("getsMe");
var Bone = document.getElementById("Bone");

var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var icon5 = document.getElementById("icon5");
var icon6 = document.getElementById("icon6");

icon1.onclick = function () {
  if (SomebodyPleasure.paused) {
    SomebodyPleasure.play();
    icon1.src = "/music/pausebutton.png";
  } else {
    SomebodyPleasure.pause();
    icon1.src = "/music/playbutton.png";
  }
};

icon2.onclick = function () {
  if (sanchez.paused) {
    sanchez.play();
    icon2.src = "/music/pausebutton.png";
  } else {
    sanchez.pause();
    icon2.src = "/music/playbutton.png";
  }
};

icon3.onclick = function () {
  if (pHati.paused) {
    pHati.play();
    icon3.src = "/music/pausebutton.png";
  } else {
    pHati.pause();
    icon3.src = "/music/playbutton.png";
  }
};

icon4.onclick = function () {
  if (feather.paused) {
    feather.play();
    icon4.src = "/music/pausebutton.png";
  } else {
    feather.pause();
    icon4.src = "/music/playbutton.png";
  }
};

icon5.onclick = function () {
  if (getsMe.paused) {
    getsMe.play();
    icon5.src = "/music/pausebutton.png";
  } else {
    getsMe.pause();
    icon5.src = "/music/playbutton.png";
  }
};

icon6.onclick = function () {
  if (Bone.paused) {
    Bone.play();
    icon6.src = "/music/pausebutton.png";
  } else {
    Bone.pause();
    icon6.src = "/music/playbutton.png";
  }
};
