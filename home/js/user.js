$(document).ready(function () {
  $("#strain-preference").show();
  $("#time").click(function () {
    if ($("#strain-preferences").is(":visible")) {
      $("#strain-preferences").slideUp();
    } else {
      $("#strain-preferences").slideDown();
    }
  });

})