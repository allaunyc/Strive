$(document).ready(function() {
  // on click, the "thank u for signing up" div will appear
  $(".learn-more-btn").click(function(event) {
    event.preventDefault();
    $(".submission-received").css("visibility", "visible");
  });

var icons = [".circlelogo-selection img", "#circlelogo-essays img", "#circlelogo-recommendations img",
"#circlelogo-interviews img", "#circlelogo-academics img", "#circlelogo-extracurriculars img",
"#circlelogo-financial-aid img"];

  $(".circlelogo-selection img").click(function() {
      // var self = this;
      // $.each(icons, function(index, value) {
      //   if (value === self) {
      //     $(value).attr('src', '../assets/images/check-circle.png');
      //   } else {
      //     $(value).attr('src', '../assets/images/plus-circle.png');
      //   }
      // });

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

  $("#circlelogo-essays img").click(function() {
    $(this).attr("src", "../assets/images/check-circle.png");

    var self = this;
    $.each(icons, function(index, value) {
      if (index !== 1) {
        $(this).attr('src', '../assets/images/plus-circle.png');
      }
      if ($(this).attr("src", "../assets/images/check-circle.png")) {
        $(this).attr('src', '../assets/images/plus-circle.png');
      }
    });

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

  $("#circlelogo-recommendations img").click(function() {
    $(this).attr("src", "../assets/images/check-circle.png");
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

  $("#circlelogo-interviews img").click(function() {
    $(this).attr("src", "../assets/images/check-circle.png");
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

  $("#circlelogo-academics img").click(function() {
    $(this).attr("src", "../assets/images/check-circle.png");
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

  $("#circlelogo-extracurriculars img").click(function() {
    $(this).attr("src", "../assets/images/check-circle.png");
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

  $("#circlelogo-financial-aid img").click(function() {
    $(this).attr("src", "../assets/images/check-circle.png");
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

});
