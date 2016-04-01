console.log('script.js loaded');

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();

var $i = 0;
$('.c-hamburger').click(function() {
  if($i % 2 == 0) {
    $('.navigation-menu').css('top', '0px');
  } else {
    $('.navigation-menu').css('top', '-702px');
  }
  $i++;
});