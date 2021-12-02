var cancel = document.getElementById("cancel-button");
var reserveAll = document.querySelectorAll('.reverse-button');

// Connects reserve button on all machines to reservation page
reserveAll.forEach(item => {
	item.addEventListener('click', event => {
		location.href = "reservation.html";
	})
});

// Connects canncel button to original availability page
cancel.addEventListener('click', function(){
	location.href = "availabilitypage.html";
});
