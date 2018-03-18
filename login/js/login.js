$(".submit").click(function(event){
  event.preventDefault;
  var formData = $("#login-account").serialize();
  $.post({
    url: "localhost:3000/login",
    data: formData,
    method: "POST"
  }).done(function(response){
    var returnValue = JSON.decode(response);
    console.log(returnValue);
  });
});