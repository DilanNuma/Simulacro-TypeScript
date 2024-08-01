import { PageController } from './src/Controllers/page.controller'

const url = 'https://reqres.in/api/'

const loginForm = document.querySelector('#loginForm') as HTMLFormElement;
const emailUser = document.querySelector('#emailUser') as HTMLInputElement;
const passwordUser = document.querySelector('#passwordUser') as HTMLInputElement;

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const user = {
        email: emailUser.value,
        password: passwordUser.value,
    }

    const pageController = new PageController(url);
    const token = await pageController.login(user, "login");

    console.log(token);
    

});