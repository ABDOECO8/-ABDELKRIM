document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collecter les données du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Paramètres = variables du template EmailJS ({{name}}, {{email}}, {{title}}, {{message}})
    const params = {
        name: name,
        email: email,
        title: subject,
        message: message,
        time: new Date().toLocaleString()
    };

    const formStatus = document.getElementById("formStatus");
    const btn = document.getElementById("contactForm").querySelector(".sendBtn");
    btn.disabled = true;

    // Utilisation d'EmailJS pour envoyer l'email
    emailjs.send("service_0rv26ai", "template_nhi5nmb", params)
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);

        formStatus.classList.remove("error");
        formStatus.classList.add("success");
        formStatus.innerText = "Your message has been sent successfully.";
        formStatus.style.display = "block";
        document.getElementById("contactForm").reset();
        btn.disabled = false;

        setTimeout(function() {
            formStatus.style.display = "none";
        }, 5000);
    }, function(error) {
        console.log("FAILED...", error);

        formStatus.classList.remove("success");
        formStatus.classList.add("error");
        formStatus.innerText = "There was an error sending the message. Please try again.";
        formStatus.style.display = "block";
        btn.disabled = false;

        setTimeout(function() {
            formStatus.style.display = "none";
        }, 5000);
    });
});
