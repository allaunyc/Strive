$(function() {
  $('#learn-more-form').submit(function(event) {
    event.preventDefault();

    var subscribeForm = $(this);
    var subscribeButton = $('input[type=submit]', subscribeForm);

    if ($("input[name='name-input']").val() === '') {
      alert('Please enter your name.')
      return
    }
    if ($("input[name='email-input']").val() === '') {
      alert('Please enter your email address.')
      return
    }

    $.ajax({
      url: subscribeForm.prop('action'),
      type: 'POST',
      crossDomain: true,
      headers : {
        'accept' : 'application/javascript',
      },
      data: $('#learn-more-form').serialize(),
      beforeSend: function() {
        subscribeButton.prop('disabled', 'disabled');
      }
    })
    .done(function(response) {
      subscribeButton.prop('disabled', false);
    })
    .fail(function(response) {
      alert('Was not able to send your information');
      subscribeButton.prop('disabled', false);
    })

  });
});


(function($) {

	var lastSize = 0;
	var interval = null;

	$.fn.resetBreakpoints = function() {
		$(window).unbind('resize');
		if (interval) {
			clearInterval(interval);
		}
		lastSize = 0;
	};

	$.fn.setBreakpoints = function(settings) {
		var options = jQuery.extend({
							distinct: true,
							breakpoints: new Array(414, 768, 1200)
				    	},settings);


		interval = setInterval(function() {

			var w = $(window).width();
			var done = false;

			for (var bp in options.breakpoints.sort(function(a,b) { return (b-a) })) {

				// fire onEnter when a browser expands into a new breakpoint
				// if in distinct mode, remove all other breakpoints first.
				if (!done && w >= options.breakpoints[bp] && lastSize < options.breakpoints[bp]) {
					if (options.distinct) {
						for (var x in options.breakpoints.sort(function(a,b) { return (b-a) })) {
							if ($('body').hasClass('breakpoint-' + options.breakpoints[x])) {
								$('body').removeClass('breakpoint-' + options.breakpoints[x]);
								$(window).trigger('exitBreakpoint' + options.breakpoints[x]);
							}
						}
						done = true;
					}
					$('body').addClass('breakpoint-' + options.breakpoints[bp]);
					$(window).trigger('enterBreakpoint' + options.breakpoints[bp]);

				}

				// fire onExit when browser contracts out of a larger breakpoint
				if (w < options.breakpoints[bp] && lastSize >= options.breakpoints[bp]) {
					$('body').removeClass('breakpoint-' + options.breakpoints[bp]);
					$(window).trigger('exitBreakpoint' + options.breakpoints[bp]);

				}

				// if in distinct mode, fire onEnter when browser contracts into a smaller breakpoint
				if (
					options.distinct && // only one breakpoint at a time
					w >= options.breakpoints[bp] && // and we are in this one
					w < options.breakpoints[bp-1] && // and smaller than the bigger one
					lastSize > w && // and we contracted
					lastSize >0 &&  // and this is not the first time
					!$('body').hasClass('breakpoint-' + options.breakpoints[bp]) // and we aren't already in this breakpoint
					) {
					$('body').addClass('breakpoint-' + options.breakpoints[bp]);
					$(window).trigger('enterBreakpoint' + options.breakpoints[bp]);

				}
			}

			// set up for next call
			if (lastSize != w) {
				lastSize = w;
			}
		},250);
	};

})(jQuery);

$(document).ready(function() {
  $(window).setBreakpoints({
    distinct: true,
    breakpoints: [414, 768, 1200]
  });

$(window).bind('enterBreakpoint414', function() {
    // on click, the "thank u for signing up" div will appear
    $(".learn-more-btn").click(function(event) {
      event.preventDefault();
      $(".submission-received").css("visibility", "visible");
    });

    $(".process-content").hide();
    $(".imaginary-column").hide();

    $(".accordion").show();

  });

$(window).bind('enterBreakpoint768', function() {
    // on click, the "thank u for signing up" div will appear
    $(".learn-more-btn").click(function(event) {
      event.preventDefault();
      $(".submission-received").css("visibility", "visible");
    });

    $(".process-content").show();
    $(".imaginary-column").show();

    $(".accordion").hide();

  });

$(window).bind('enterBreakpoint1200',function() {
  // on click, the "thank u for signing up" div will appear
  $(".learn-more-btn").click(function(event) {
    event.preventDefault();
    $(".submission-received").css("visibility", "visible");
  });

  $(".process-content").show();
  $(".imaginary-column").show();

  $("#a").click(function() {

      $("#college-selection-box").show();
      $(".triangle-left-selection").show();

      $("#recommendations-box").hide();
      $(".triangle-left-recommendations").hide();
      $("#essays-box").hide();
      $(".triangle-left-essays").hide();
      $("#interviews-box").hide();
      $(".triangle-left-interviews").hide();
      $("#academics-box").hide();
      $(".triangle-left-academics").hide();
      $("#extracurriculars-box").hide();
      $(".triangle-left-extracurriculars").hide();
      $("#financial-aid-box").hide();
      $(".triangle-left-financial-aid").hide();
  });

  $("#b").click(function() {

      $("#essays-box").show();
      $(".triangle-left-essays").show();

      $("#college-selection-box").hide();
      $(".triangle-left-selection").hide();
      $("#recommendations-box").hide();
      $(".triangle-left-recommendations").hide();
      $("#interviews-box").hide();
      $(".triangle-left-interviews").hide();
      $("#academics-box").hide();
      $(".triangle-left-academics").hide();
      $("#extracurriculars-box").hide();
      $(".triangle-left-extracurriculars").hide();
      $("#financial-aid-box").hide();
      $(".triangle-left-financial-aid").hide();
  });

  $("#c").click(function() {
      $("#recommendations-box").show();
      $(".triangle-left-recommendations").show();

      $("#college-selection-box").hide();
      $(".triangle-left-selection").hide();
      $("#essays-box").hide();
      $(".triangle-left-essays").hide();
      $("#interviews-box").hide();
      $(".triangle-left-interviews").hide();
      $("#academics-box").hide();
      $(".triangle-left-academics").hide();
      $("#extracurriculars-box").hide();
      $(".triangle-left-extracurriculars").hide();
      $("#financial-aid-box").hide();
      $(".triangle-left-financial-aid").hide();
  });

  $("#d").click(function() {
      $("#interviews-box").show();
      $(".triangle-left-interviews").show();

      $("#college-selection-box").hide();
      $(".triangle-left-selection").hide();
      $("#essays-box").hide();
      $(".triangle-left-essays").hide();
      $("#recommendations-box").hide();
      $(".triangle-left-recommendations").hide();
      $("#academics-box").hide();
      $(".triangle-left-academics").hide();
      $("#extracurriculars-box").hide();
      $(".triangle-left-extracurriculars").hide();
      $("#financial-aid-box").hide();
      $(".triangle-left-financial-aid").hide();
  });

  $("#e").click(function() {
      $("#academics-box").show();
      $(".triangle-left-academics").show();

      $("#college-selection-box").hide();
      $(".triangle-left-selection").hide();
      $("#essays-box").hide();
      $(".triangle-left-essays").hide();
      $("#interviews-box").hide();
      $(".triangle-left-interviews").hide();
      $("#recommendations-box").hide();
      $(".triangle-left-recommendations").hide();
      $("#extracurriculars-box").hide();
      $(".triangle-left-extracurriculars").hide();
      $("#financial-aid-box").hide();
      $(".triangle-left-financial-aid").hide();
  });

  $("#f").click(function() {
      $("#extracurriculars-box").show();
      $(".triangle-left-extracurriculars").show();

      $("#college-selection-box").hide();
      $(".triangle-left-selection").hide();
      $("#essays-box").hide();
      $(".triangle-left-essays").hide();
      $("#interviews-box").hide();
      $(".triangle-left-interviews").hide();
      $("#academics-box").hide();
      $(".triangle-left-academics").hide();
      $("#recommendations-box").hide();
      $(".triangle-left-recommendations").hide();
      $("#financial-aid-box").hide();
      $(".triangle-left-financial-aid").hide();
  });

  $("#g").click(function() {

      $("#financial-aid-box").show();
      $(".triangle-left-financial-aid").show();

      $("#college-selection-box").hide();
      $(".triangle-left-selection").hide();
      $("#essays-box").hide();
      $(".triangle-left-essays").hide();
      $("#interviews-box").hide();
      $(".triangle-left-interviews").hide();
      $("#academics-box").hide();
      $(".triangle-left-academics").hide();
      $("#extracurriculars-box").hide();
      $(".triangle-left-extracurriculars").hide();
      $("#recommendations-box").hide();
      $(".triangle-left-recommendations").hide();
    });

    $(".accordion").hide();

  });

});
