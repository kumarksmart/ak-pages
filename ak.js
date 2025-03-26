// A simple script to use as a silly example with https://mrcoles.com/bookmarklet
// and https://github.com/mrcoles/bookmarklet
// Author: Peter Coles - mrcoles.com
// License: MIT

(function() {
  var ASSET = "https://mrcoles.com/media/img/sea-serpent-cutout.png";
  var WIDTH = 212;
  var HEIGHT = 104;
  var VERT_DIRECTIONS = ["up", "down"];
  var HORI_DIRECTIONS = ["left", "right"];
  var SCROLL_AMOUNTS = [6, 8, 11, 15];
  var SCROLL_DELAYS = [60, 85, 100, 130];

  function add() {
  alert("Hello! I am an alert box!");
  }

  var original = window.SeaDragon;

  var self = (window.SeaDragon = {
    add: add,
    noConflict: function() {
      window.SeaDragon = original;
      return self;
    }
  });
})();
