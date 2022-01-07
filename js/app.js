const email = document.querySelector('#inputEmail4');
const password = document.querySelector('#inputPassword4');
const address = document.querySelector('#inputAddress');
const city = document.querySelector('#inputCity');
const state = document.querySelector('#inputText4');
const message = document.querySelector('#errmsg');
const formDetails = document.querySelector('form');

formDetails.addEventListener('submit', formValidation);

function formValidation(e) {
    e.preventDefault();


    if (
			email.value === '' ||
			password.value === '' ||
			address.value === '' ||
			city.value === '' ||
			state.value
		) {
			// styling
			message.style.color = 'red';
			message.style.marginBottom = 0;
			message.style.fontSize = '17px';
			message.style.fontWeight = 'bold';
            message.innerHTML = 'input fields can not be submitted empty';
		}
    
} 