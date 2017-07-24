$(document).ready(function() {
  // on click, the "thank u for signing up" div will appear
  $(".learn-more-btn").click(function(event) {
    event.preventDefault();
    $(".submission-received").css("visibility", "visible");
  });

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

});
