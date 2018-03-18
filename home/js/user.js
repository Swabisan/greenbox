$(document).ready(function () {
  $("#strain-submit").click(function (event) {
    event.preventDefault();
    $("#mood-panel").show();
    $("#strain-panel").slideUp("slow", function () {
      $("#strain-panel").hide();
    });
  });

  $(".submit").click(function(event){
    event.preventDefault();
    $formData = $("#create-preferences").serialize();
    //console.log($formData);
    $.ajax({
      url: '/update-settings/',
      dataType: 'json',
      type: 'POST',
      data: $formData,
      success: function(data){
        console.log(data);
      },
      error: function(data){
        console.log(data);
      }
    });
  });
});
