const myArray = [];

const Application = function() {
    this.showMainPage = function() {
        document.querySelector('.main_page').classList.add('show')
        document.querySelector('.auth_page').classList.remove('show')
        document.querySelector('.registration_page').classList.remove('show')
    }
    this.showAuthPage = function() {
        document.querySelector('.auth_page').classList.add('show')
        document.querySelector('.main_page').classList.remove('show')
        document.querySelector('.registration_page').classList.remove('show')
    }
    this.showRegistrationPage = function() {
        document.querySelector('.registrationauth_page').classList.add('show')
        document.querySelector('.main_page').classList.remove('show')
        document.querySelector('auth._page').classList.remove('show')
        const email = document.querySelector('.registration-input-email').value
        const pass = document.querySelector('.registration-input-pass').value
        const user = {email: email, pass: pass}
        myArray.push(user)
        console.log(myArray)
        this.showAuthPage()
    }
    this.auth = function() {
        const authEmail = document.querySelector('.auth-imput-email').value
        const authPass = document.querySelector('.auth-imput-email').value
        const user = myArray.find(currentUser => currentUser.email === authEmail)
        if(user.pass = authPass) alert('You are logged in!')
    }
}
const app = new Application();
app.showMainPage();

document.querySelector('.registration_button').addEventListener('click', app.registration)

