$(document).ready(function() {
  // on click, the "thank u for signing up" div will appear
  $(".learn-more-btn").click(function(event) {
    event.preventDefault();
    $(".submission-received").css("visibility", "visible");
  });

// var icons = [".circlelogo-selection img", "#circlelogo-essays img", "#circlelogo-recommendations img",
// "#circlelogo-interviews img", "#circlelogo-academics img", "#circlelogo-extracurriculars img",
// "#circlelogo-financial-aid img"];

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
    // $(this).attr("src", "../assets/images/check-circle.png");

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
    // $(this).attr("src", "../assets/images/check-circle.png");
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
    // $(this).attr("src", "../assets/images/check-circle.png");
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
    // $(this).attr("src", "../assets/images/check-circle.png");
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
    // $(this).attr("src", "../assets/images/check-circle.png");
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
    // $(this).attr("src", "../assets/images/check-circle.png");
    // $("input").attr("checked", true);

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

  //   $("img").on({
  //    mouseenter: function () {
  //      console.log("in mouse enter");
  //      if(!$(this).attr("checked")){
  //        $(this).attr("src", "../assets/images/plus-circle-pinkred.png");
  //      }
  //      // }
  //    },
  //    mouseleave: function () {
  //      console.log("in mouse leave");
  //      if(!$(this).attr("checked")){
  //        $(this).attr("src", "../assets/images/plus-circle.png");
  //      }
  //    }
  //  });
   //
  //   $("input").on('click', function() {
  //        $(this).attr("checked", true);
  //        console.log('Check if get here' )
  //       $(this).siblings().attr("src", "../assets/images/check-circle.png");
  //       // console.log($(".radio-icons").children().not(this));
  //       $(".radio-icons").children().not($(this).siblings()).attr("src", "../assets/images/plus-circle.png");
  //   })

});
