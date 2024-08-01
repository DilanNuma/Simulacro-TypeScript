import { PageController } from './src/Controllers/page.controller'

const url = 'https://reqres.in/api/'

const loginForm = document.querySelector('#loginForm') as HTMLFormElement;
const emailUser = document.querySelector('#emailUser') as HTMLInputElement;
const passwordUser = document.querySelector('#passwordUser') as HTMLInputElement;

loginForm.addEventListener('submit', async (event: Event) => {
    event?.preventDefault();

    const user = {
        email: emailUser.value,
        password: passwordUser.value,
    }
    try {
        const pageController = new PageController(url);
        const responseOfLogin = await pageController.login(user, "login");

        sessionStorage.setItem("token", responseOfLogin.token);

        const getToken = sessionStorage.getItem("token");
        if(getToken) {
            window.location.href = "./src/Views/home.html";
        }
    } catch (err) {
        console.error(err);
    }


});