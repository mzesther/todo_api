var people = [
    {
        firstname:"",
        lastname:"",
        emailaddress:"",
        username:"",
        password:"",

    }
]




function registerUser() {

	// store new users details
	var registerFirstname = document.getElementById('firstname');registerFirstname.textContent = firstname;
	// store secondname
    var registerLastname = document.getElementById('newLastname').value

    var registerEmailaddress = document.getElementById('newEmailaddress').value

    var registerUsername = document.getElementById('newUsername').value

	var registerPassword = document.getElementById('newPassword').value
	// store new user data in an object
	var newUser = {
        firstname = registerFirstname,
        lastname = registerLastname,
         emailaddress = registerEmailaddress,
		username = registerUsername,
		password = registerPassword
	}
	
	
	// push new object to the people array
	People.push(newUser)
	// console the updated people array
	console.log(People)
}