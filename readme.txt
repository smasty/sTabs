sTabs jQuery plugin by Smasty
=============================

Example
=======
$(function(){
  $('#tabs').sTabs({animate: true});
});

Options
=======
startWith (int; default: 1)
  Number of tab to activate as first.

eventType (string; default: 'click')
  Event to handle changing tabs. Must be a valid jQuery.bind() event type.

animate (bool; default: false)
  Whether or not animate changing tabs.

duration (int; default: 300)
  Duration of animation in miliseconds.
