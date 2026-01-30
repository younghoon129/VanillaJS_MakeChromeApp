const loginForm = document.querySelector('#login-form')
// const loginInput = document.querySelector('input')
// const loginButton = document.querySelector('button')

const loginInput = document.querySelector('#login-form input')
// const loginButton = document.querySelector('#login-form button')


function onLoginBtnClick() {
    // const username = loginInput.value;
    // if (username === '') {
    //     alert('Please write your name')
    // } else if(username.length > 15) {
    //     alert('Your name is too long.')
    // }
    tomato.preventDefault()
    console.log(username);
}

loginButton.addEventListener('click', onLoginBtnClick)

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    console.log(tomato);
}
loginForm.addEventListener('submit', onLoginSubmit);