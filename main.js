//! Asynchronous code
const dogImg = document.querySelector("#dogImg");

const newDogButton = document.querySelector("#newDogButton");

newDogButton.style.justifySelf = "center";

//! Step 1: make an API request
newDogButton.addEventListener("click", function () {
	fetch("https://dog.ceo/api/breeds/image/random")
		//? Parse the body of the raw HTTP response
		.then(function (httpResponse) {
			return httpResponse.json();
		})
		// ? Handle the response bady data
		.then(function (data) {
			console.log(data.message);
			newImg = dogImg.src = data.message;
			return newImg;
		});
});

//! Step 2 - 10: do some other stuff
