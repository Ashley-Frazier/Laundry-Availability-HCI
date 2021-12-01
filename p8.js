var submit = document.getElementById("submit-button");
var popup = document.getElementById("confirmation");
var close = document.getElementById("return-button");

submit.addEventListener('click', function() {
	popup.style.display = "block";
});

close.addEventListener('click', function(){
	location.href = "reserved.html";
});

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
