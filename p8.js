var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
var reserve = document.querySelectorAll('.reverse-button');

reserve.forEach(item => {
	item.addEventListener('click', event => {
		location.href = "reservation.html";
	})
})

