const viewPassword = document.getElementById("viewPassword");
const passwordinput = document.getElementById("inputcontra");
const usernameinput = document.getElementById("inputusername");
const loginboton = document.getElementById("loginboton");
const loginForm = document.getElementById("login");

viewPassword.addEventListener("click", () => {
    const actualType = passwordinput.getAttribute('type')
    if (actualType == 'password') {
        passwordinput.setAttribute('type', 'texto')
    } else {
        passwordinput.setAttribute('type', 'password')
    }
})


const users = [
    {
        username: 'usuario1',
        password: 'usuario1'
    },
    {
        username: 'usuario2',
        password: 'usuario2'
    }
]

loginboton.addEventListener("click", (event) => {
    event.preventDefault()
    const usernameValue = usernameinput.value
    const passwordValue = passwordinput.value

    const user = users.find((user) => user.username == usernameValue && user.password == passwordValue)

    if (user) {
        alert('logged in')
        localStorage.setItem('islogged', true)
        window.location.href = "../HTML/index.html"
    } else {
        usernameinput.value = ''
        passwordinput.value = ''
        alert('Wrong credentials')
    }
})

if (localStorage.getItem('islogged')) {
    const form = document.getElementById('login')
    form.innerHTML = `<button id="logout">LogOut</button>`

    const loginoutboton = document.getElementById('logout')
    loginoutboton.addEventListener('click', () => {
        localStorage.removeItem('islogged')
        window.localStorage.href = "../HTML/index.html"
    })
}