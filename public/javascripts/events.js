
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
		$("#learn-more-form").submit(function(event) {
	    event.preventDefault();

			$.ajax({
				url: '/submission',
				method: 'post',
				data: 'referrer=' + document.referrer + '&' + $(this).serialize(),
				success: function(response) {
					if (response.err) {
						alert("Error in submitting")
					} else {
						$(".submission-received").css("visibility", "visible");
					}
				}
			})
	  });

		$(".nav-link").hide();

    $(".process-content").hide();
    $(".imaginary-column").hide();
    // $(".process-content").css("display", "none");
    // $(".imaginary-column").css("display", "none");
    //
    $(".accordion").show();
    // $(".accordion").css("display", "block");

  });

$(window).bind('enterBreakpoint768', function() {
    // on click, the "thank u for signing up" div will appear
		$("#learn-more-form").submit(function(event) {
	    event.preventDefault();

			$.ajax({
				url: '/submission',
				method: 'post',
				data: 'referrer=' + document.referrer + '&' + $(this).serialize(),
				success: function(response) {
					if (response.err) {
						alert("Error in submitting")
					} else {
						$(".submission-received").css("visibility", "visible");
					}
				}
			})
	  });

		$(".nav-link").show();

    $(".process-content").show();
    $(".imaginary-column").show();
    // $(".process-content").css("display", "block");
    // $(".imaginary-column").css("display", "block");
    //
    $(".accordion").hide();
    // $(".accordion").css("display", "none");
  });

$(window).bind('enterBreakpoint1200',function() {
  // on click, the "thank u for signing up" div will appear
  $("#learn-more-form").submit(function(event) {
    event.preventDefault();

		$.ajax({
			url: '/submission',
			method: 'post',
			data: 'referrer=' + document.referrer + '&' + $(this).serialize(),
			success: function(response) {
				if (response.err) {
					alert("Error in submitting")
				} else {
					$(".submission-received").css("visibility", "visible");
				}
			}
		})
  });

	$(".nav-link").show();

  $(".process-content").show();
  $(".imaginary-column").show();
  // $(".process-content").css("display", "block");
  // $(".imaginary-column").css("display", "block");


  $("#a").click(function() {

      $("#college-selection-box").show();
      $(".triangle-left-selection").show();
      // $("#college-selection-box").css("display", "block");
      // $(".triangle-left-selection").css("display", "block");

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
      // $("#recommendations-box").css("display", "none");
      // $(".triangle-left-recommendations").css("display", "none");
      // $("#essays-box").css("display", "none");
      // $(".triangle-left-essays").css("display", "none");
      // $("#interviews-box").css("display", "none");
      // $(".triangle-left-interviews").css("display", "none");
      // $("#academics-box").css("display", "none");
      // $(".triangle-left-academics").css("display", "none");
      // $("#extracurriculars-box").css("display", "none");
      // $(".triangle-left-extracurriculars").css("display", "none");
      // $("#financial-aid-box").css("display", "none");
      // $(".triangle-left-financial-aid").css("display", "none");
  });

  $("#b").click(function() {

      $("#essays-box").show();
      $(".triangle-left-essays").show();
      // $("#essays-box").css("display", "block");
      // $(".triangle-left-essays").css("display", "block");

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
      // $("#recommendations-box").css("display", "none");
      // $(".triangle-left-recommendations").css("display", "none");
      // $("#college-selection-box").css("display", "none");
      // $(".triangle-left-selection").css("display", "none");
      // $("#interviews-box").css("display", "none");
      // $(".triangle-left-interviews").css("display", "none");
      // $("#academics-box").css("display", "none");
      // $(".triangle-left-academics").css("display", "none");
      // $("#extracurriculars-box").css("display", "none");
      // $(".triangle-left-extracurriculars").css("display", "none");
      // $("#financial-aid-box").css("display", "none");
      // $(".triangle-left-financial-aid").css("display", "none");
  });

  $("#c").click(function() {
      $("#recommendations-box").show();
      $(".triangle-left-recommendations").show();
      // $("#recommendations-box").css("display", "block");
      // $(".triangle-left-recommendations").css("display", "block");

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
      // $("#essays-box").css("display", "none");
      // $(".triangle-left-essays").css("display", "none");
      // $("#college-selection-box").css("display", "none");
      // $(".triangle-left-selection").css("display", "none");
      // $("#interviews-box").css("display", "none");
      // $(".triangle-left-interviews").css("display", "none");
      // $("#academics-box").css("display", "none");
      // $(".triangle-left-academics").css("display", "none");
      // $("#extracurriculars-box").css("display", "none");
      // $(".triangle-left-extracurriculars").css("display", "none");
      // $("#financial-aid-box").css("display", "none");
      // $(".triangle-left-financial-aid").css("display", "none");
  });

  $("#d").click(function() {
      $("#interviews-box").show();
      $(".triangle-left-interviews").show();
      // $("#interviews-box").css("display", "block");
      // $(".triangle-left-interviews").css("display", "block");

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
      // $("#essays-box").css("display", "none");
      // $(".triangle-left-essays").css("display", "none");
      // $("#college-selection-box").css("display", "none");
      // $(".triangle-left-selection").css("display", "none");
      // $("#recommendations-box").css("display", "none");
      // $(".triangle-left-recommendations").css("display", "none");
      // $("#academics-box").css("display", "none");
      // $(".triangle-left-academics").css("display", "none");
      // $("#extracurriculars-box").css("display", "none");
      // $(".triangle-left-extracurriculars").css("display", "none");
      // $("#financial-aid-box").css("display", "none");
      // $(".triangle-left-financial-aid").css("display", "none");
  });

  $("#e").click(function() {
      $("#academics-box").show();
      $(".triangle-left-academics").show();
      // $("#academics-box").css("display", "block");
      // $(".triangle-left-academics").css("display", "block");

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
      // $("#essays-box").css("display", "none");
      // $(".triangle-left-essays").css("display", "none");
      // $("#college-selection-box").css("display", "none");
      // $(".triangle-left-selection").css("display", "none");
      // $("#interviews-box").css("display", "none");
      // $(".triangle-left-interviews").css("display", "none");
      // $("#academics-box").css("display", "none");
      // $(".triangle-left-academics").css("display", "none");
      // $("#extracurriculars-box").css("display", "none");
      // $(".triangle-left-extracurriculars").css("display", "none");
      // $("#financial-aid-box").css("display", "none");
      // $(".triangle-left-financial-aid").css("display", "none");
  });

  $("#f").click(function() {
      $("#extracurriculars-box").show();
      $(".triangle-left-extracurriculars").show();
      // $("#extracurriculars-box").css("display", "block");
      // $(".triangle-left-extracurriculars").css("display", "block");

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
      // $("#essays-box").css("display", "none");
      // $(".triangle-left-essays").css("display", "none");
      // $("#college-selection-box").css("display", "none");
      // $(".triangle-left-selection").css("display", "none");
      // $("#interviews-box").css("display", "none");
      // $(".triangle-left-interviews").css("display", "none");
      // $("#academics-box").css("display", "none");
      // $(".triangle-left-academics").css("display", "none");
      // $("#recommendations-box").css("display", "none");
      // $(".triangle-left-recommendations").css("display", "none");
      // $("#financial-aid-box").css("display", "none");
      // $(".triangle-left-financial-aid").css("display", "none");
  });

  $("#g").click(function() {

      $("#financial-aid-box").show();
      $(".triangle-left-financial-aid").show();
      // $("#financial-aid-box").css("display", "block");
      // $(".triangle-left-financial-aid").css("display", "block");

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
      // $("#essays-box").css("display", "none");
      // $(".triangle-left-essays").css("display", "none");
      // $("#college-selection-box").css("display", "none");
      // $(".triangle-left-selection").css("display", "none");
      // $("#interviews-box").css("display", "none");
      // $(".triangle-left-interviews").css("display", "none");
      // $("#academics-box").css("display", "none");
      // $(".triangle-left-academics").css("display", "none");
      // $("#extracurriculars-box").css("display", "none");
      // $(".triangle-left-extracurriculars").css("display", "none");
      // $("#financial-aid-box").css("display", "none");
      // $(".triangle-left-financial-aid").css("display", "none");
    });

    $(".accordion").hide();


  });

});
