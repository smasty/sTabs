/*
 *  sTabs - simple tabs jQuery plugin
 *  https://github.com/smasty/sTabs
 *
 *  Licensed under the MIT License (https://opensource.org/licenses/MIT)
 *
 */
(function($) {
    $.fn.sTabs = function(opts) {

        var options = $.extend({}, $.fn.sTabs.defaults, opts);

        return this.each(function() {
            var $this = $(this),
                animate = $this.data('stabs') == 'animate' ? true : options.animate,
                duration = $this.data('stabs-duration') ? parseInt($this.data('stabs-duration')) : options.duration;
            $this.addClass('stabs');
            $this.find('a').each(function(){
                var target = $(this).attr('href');

                $(target).hide().parent().addClass('tab');

                $(this).bind(options.eventType, function(e, pushHistory){
                    e.preventDefault();

                    $(this).parent().addClass('active');

                    animate ? $(target).fadeIn(duration) : $(target).show();

                    if(options.followTarget && pushHistory !== false){
                        history.pushState(null, null, target);
                    }

                    $($(this).parent().siblings().find('a')).each(function(){
                        $(this).parent().removeClass('active');
                        $($(this).attr('href')).hide();
                    });
                })
            });

            var hash = window.location.hash,
                $link = $('a[href="'+hash+'"]'),
                $marked = $this.find('li[data-stabs="initial"]');
            if(options.followTarget && hash != '' && $link.closest($this).length > 0){
                $link.trigger(options.eventType, [false]);
            } else if($marked.length > 0){
                $marked.children('a').trigger(options.eventType, [false]);
            } else{
                $this.find('li:nth-child(' + options.startWith + ')').children('a').trigger(options.eventType, [false]);
            }

            if(options.cycle){
                var items = $(this).find('li').length,
                    current = options.startWith;
                setInterval(function(){
                    if(current == items){
                        current = 0;
                    }
                    current++;
                    $this.find('li:nth-child(' + current + ')').children('a').trigger(options.eventType);
                }, options.interval);
            }
        });
    }
    $.fn.sTabs.defaults = {
        startWith: 1,
        eventType: 'click',
        followTarget: true,

        animate: false,
        duration: 300,

        cycle: false,
        interval: 5000,
    }
})(jQuery);
