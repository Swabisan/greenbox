$(document).ready(function () {
  $("#strain-submit").click(function (event) {
    event.preventDefault();
    $("#mood-panel").show();
    $("#strain-panel").slideUp("slow", function () {
      $("#strain-panel").hide();
    });
  });

  $("#submit").click(function(event){
    event.preventDefault();
    var activeButtons = [];

    $formData = $("button.active").each(function(){
      activeButtons.push($(this).attr("id"));
    });
    console.log(activeButtons);
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
