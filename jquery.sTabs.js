/*
 *  sTabs - simple tabs jQuery plugin
 *  http://labs.smasty.net/jquery/stabs/
 *
 *  Copyright (c) 2010 Martin Srank (http://smasty.net)
 *  Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 *
 *  Built for jQuery library
 *  http://jquery.com
 *
 */
(function($) {
  $.fn.sTabs = function(opts) {
  
  var options = $.extend({}, $.fn.sTabs.defaults, opts);
  
    return this.each(function() {
      $(this).addClass('tabs');
      $(this).find('a').each(function(){

        $($(this).attr('href')).addClass('tab').hide();

        $(this).bind(options.eventType, function(e){
          e.preventDefault();
          
          $(this).addClass('active');
          
          options.animate ? $($(this).attr('href')).fadeIn(options.duration) : $($(this).attr('href')).show();
          
          $($(this).parent().siblings().find('a')).each(function(){
            $(this).removeClass('active');
            $($(this).attr('href')).hide();
          });
        })
      });

      var first = $(this).find('li:nth-child(' + options.startWith + ')').children('a');
      $(first).addClass('active');
      $($(first).attr('href')).show();
    });
  }
   $.fn.sTabs.defaults = {animate: false, duration: 300, startWith: 1, eventType: 'click'}
})(jQuery);
