var People = [

	{ // user
		username: "sarah",
		password: "tunga12"
	},
	{ // user 1 
		username: "paul",
		password: "password"
	},
	{ // user 2
		username: "esther",
		password: "123456"
	}

]

function getInfo() {
	var user = document.getElementById("username");user.textContent = username;
	var password = document.getElementById("password").value

	
for(var i = 0; i <  People.length; i++) {
		// check if user input matches username and password of the current user of the objPeople array
		if(username == People[i].username && password == People[i].password) {
			
			console.log(username + " Welcome back!!!")
			
			return
		}
	}
	console.log("incorrect username or password")
}
