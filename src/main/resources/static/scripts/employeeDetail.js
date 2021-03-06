document.addEventListener("DOMContentLoaded", function(event)
{
	// Empty
});

function validateForm()
{
	let firstname = document.forms["createEmployee"]["firstname"].value;
	let lastname = document.forms["createEmployee"]["lastname"].value;
	let password = document.forms["createEmployee"]["password"].value;
	let verifyPassword = document.forms["createEmployee"]["verifyPassword"].value;

	if (firstname.length == 0 || lastname.length == 0 || password.length == 0)
	{
		alert("Please fill in all fields!");
		return false;
	}
	else if (password !== verifyPassword)
	{
		alert("Passwords do not match!");
		return false;
	}
	else
	{
		return true;
	}
}