const logoutButton = document.querySelector('#logout-button');

logoutButton?.addEventListener('click', () => {
    sessionStorage.removeItem('token');
    window.location.href = "/";
})