"use strict";

/* ==========================================================================
Explorer menu js file
========================================================================== */
$(document).ready(function () {
  "use strict";

  if ($('.explorer-menu').length) {
    //Open explorer menu
    $('#explorer-trigger, #mobile-explorer-trigger').on('click', function () {
      $('.explorer-menu').toggleClass('is-active');
    });
  }
});