// script.js 
function checkPrime(num) { 
	if (num <= 1) { 
		return false; 
	} 
	for ( 
		let i = 2; 
		i <= Math.sqrt(num); i++ 
	) { 
		if (num % i === 0) { 
			return false; 
		} 
	} 
	return true; 
} 

document 
	.getElementById("btn-submit") 
	.addEventListener("click", 
		function () { 
			let num = 
				document.getElementById("input-field").value; 
			let result = checkPrime(num); 

			if (result) { 
				document.getElementById("message").innerHTML = 
					num + " is a prime number."; 
			} else { 
				document.getElementById("message").innerHTML = 
					num + " is not a prime number."; 
			} 
		} 
	); 
document.getElementById("btn-clear") 
	.addEventListener("click", () => { 
		document.getElementById("input-field").value = ""; 
		document.getElementById("message").innerHTML = "Result"; 
	})
