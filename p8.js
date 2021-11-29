// var dt = new Date();
// document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
var reserveAll = document.querySelectorAll('.reverse-button');
var submit = document.getElementById("submit-button");
var popup = document.getElementById("confirmation");
var close = document.getElementById("return-button")
var dryer = document.getElementById("fl1-dryer-1")
var dryer_button = document.getElementById("fl1-dryer-1-button")


reserveAll.forEach(item => {
	item.addEventListener('click', event => {
		location.href = "reservation.html";
	})
})

submit.addEventListener('click', event => {
	popup.style.display = "block";
})

close.addEventListener('click', event =>{
	location.href = "availabilitypage.html";
	dryer.style.backgroundColor = "gray";
	dryer_button.innerHTML = "Cancel Reservation"
})

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
