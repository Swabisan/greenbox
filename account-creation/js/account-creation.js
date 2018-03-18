$("submit").click(function(event){
  event.preventDefault;
  var formData = $("#create-account").serialize();
  $.post({
    url: "localhost:3000/create",
    data: formData,
    method: "POST"
  }).done(function(response){
    var returnValue = JSON.decode(response);
    console.log(returnValue);
  });
});