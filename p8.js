// var dt = new Date();
// document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
var reserveAll = document.querySelectorAll('.reverse-button');
var submit = document.getElementById("submit-button");
var popup = document.getElementById("confirmation");
var close = document.getElementById("return-button")
var cancel = document.getElementById("cancel-button")


reserveAll.forEach(item => {
	item.addEventListener('click', event => {
		location.href = "reservation.html";
	})
})

submit.addEventListener('click', event => {
	popup.style.display = "block";
})

close.addEventListener('click', event =>{
	location.href = "reserved.html";
})

cancel.addEventListener('click', event =>{
	location.href = "availabilitypage.html";
})

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
