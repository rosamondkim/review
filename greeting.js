const loginForm = document.getElementById("loginForm");
const loginInput = document.querySelector("#loginForm input");
const loginBtn = document.querySelector("#loginForm button");
const sayHello = document.getElementById("sayHello");
const logoutBtn = document.querySelector(".logout button");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function greeting(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value ;
    localStorage.setItem(USERNAME_KEY,username);
    paingGreeting(username);
}

function paingGreeting(tomato){
    sayHello.innerHTML = `Hello ${tomato}`;
    sayHello.classList.remove(HIDDEN_CLASS);
    logoutBtn.classList.remove(HIDDEN_CLASS);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginBtn.addEventListener("click",greeting);
} else {
    paingGreeting(savedUsername);
}

function handleLogout(e){
    e.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASS);
    sayHello.classList.add(HIDDEN_CLASS);
    logoutBtn.classList.add(HIDDEN_CLASS);
    loginInput.value = null;
}

logoutBtn.addEventListener("click",handleLogout);
