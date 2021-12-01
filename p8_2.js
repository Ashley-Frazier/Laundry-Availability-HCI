var cancel = document.getElementById("cancel-button");
var reserveAll = document.querySelectorAll('.reverse-button');

reserveAll.forEach(item => {
	item.addEventListener('click', event => {
		location.href = "reservation.html";
	})
});

cancel.addEventListener('click', function(){
	location.href = "availabilitypage.html";
});