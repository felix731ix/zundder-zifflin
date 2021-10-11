
var registerForm = document.querySelector(".register-form");
if (registerForm) {
	var registerButton = document.getElementById('register-button');
	var checkbox = document.querySelector("#term-check");
	registerForm.addEventListener("submit", function (event) {
		event.preventDefault();
		var name = document.querySelector("#name");
		var address = document.querySelector("#address");
		var city = document.querySelector("#city");
		var email = document.querySelector("#email");
		var pass = document.querySelector("#password");
		var repass = document.querySelector("#repass");
		var gender = document.querySelector('input[name="Gender"]:checked');

		var lblErrorName = document.getElementById('label-error-name');
		var lblErrorAddress = document.getElementById('label-error-address');
		var lblErrorCity = document.getElementById('label-error-city');
		var lblErrorEmail = document.getElementById('label-error-email');
		var lblErrorPass = document.getElementById('label-error-pass');
		var lblErrorRepass = document.getElementById('label-error-repass');
		var lblErrorGender = document.getElementById('label-error-gender');

		lblErrorName.innerHTML = "";
		lblErrorAddress.innerHTML = "";
		lblErrorCity.innerHTML = "";
		lblErrorEmail.innerHTML = "";
		lblErrorPass.innerHTML = "";
		lblErrorRepass.innerHTML = "";
		lblErrorGender.innerHTML = "";

		let counterTerms = 0;

		if (name.value.length < 1) 
			lblErrorName.innerHTML = "Name cannot be empty.";
		else
			counterTerms++;
		if (address.value.length < 1)
			lblErrorAddress.innerHTML = "Address cannot be empty.";
		else
			counterTerms++;
		if (city.value.length < 1)
			lblErrorCity.innerHTML = "City cannot be empty.";
		else
			counterTerms++;
		if (email.value.length < 1)
			lblErrorEmail.innerHTML = "E-mail Address cannot be empty.";
		else
			counterTerms++;
		if (pass.value.length < 9) 
			lblErrorPass.innerHTML = "Password must be longer than 8 characters.";
		else
			counterTerms++;
		if (pass.value != repass.value)
			lblErrorRepass.innerHTML = "Password doesn't match";
		else
			counterTerms++;
		if (gender === null) 
			lblErrorGender.innerHTML = "Gender must be selected!";
		else
			counterTerms++;
		
		if(counterTerms === 7){
			alert("Member registered successfully");
				location.reload();
		}
			
	});

	registerButton.style.background = '#b9b9b9';
	registerButton.disabled = true;
	registerButton.style.cursor = "context-menu";
	checkbox.addEventListener('change', (event) =>{
		if (event.currentTarget.checked) {
			registerButton.disabled = false;
			registerButton.style.cursor = "pointer";
			registerButton.style.background = '#045cb4';
		  } else {
			registerButton.style.background = '#b9b9b9';
			registerButton.disabled = true;
			registerButton.style.cursor = "context-menu";
		  }
	})

}
