$(".submit").click(function(event){
  event.preventDefault();
  $formData = $("#login-account").serialize();
  console.log($formData);
  $.ajax({
    url: '/login/',
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