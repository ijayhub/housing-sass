const Email = document.querySelector('#inputEmail4');
const password = document.querySelector('#inputPassword4');
const Address = document.querySelector('#inputAddress');
const city = document.querySelector('#inputCity');
const state = document.querySelector('#inputText4');
const message = document.querySelector('#msg');
const form = document.querySelector('form');

form.addEventListener('submit', formValidation);

function formValidation(e) {
    e.preventDefault();


    if (Email.value === "" && password.value === "") {
        
        message.innerHTML="Form can not be submitted blank"; 
    }
    //     message.style.color = "green";
    //     message.innerHTML="Form submitted successfully";
    // }
} 