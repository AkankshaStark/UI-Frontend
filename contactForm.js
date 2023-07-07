$(document).ready(function(){
	$('.frame').click(function(){
		$('.top').addClass('open');
		$('.message').addClass('pull');
	})
});
  
  function pay()
  {
    window.location = "card.html"
  }
  function reserve()
  {
    window.location = "reservation.html"
  }
  function email()
  {
    window.alert("Succesfully Sent Email");
  }