var submit = document.getElementById("submit-button");
var popup = document.getElementById("confirmation");
var close = document.getElementById("return-button");

// Makes pop up visible when submit button is clicked
submit.addEventListener('click', function() {
	popup.style.display = "block";
});

// Connects ok button to reserved machine page
close.addEventListener('click', function(){
	location.href = "reserved.html";
});

// Makes pop up disappear if screen is clicked 
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
