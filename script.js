document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collecter les données du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Préparer l'objet de paramètres
    const params = {
        from_name: name,
        email_id: email,
        subject: subject,
        message: message,
    };

    // Utilisation d'EmailJS pour envoyer l'email
    emailjs.send("S2Vxs/2@#ls", "8ioS?F@QweDF?", params)
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);

        const formStatus = document.getElementById("formStatus");
        formStatus.classList.remove("error");  // Retirer l'erreur si présente
        formStatus.classList.add("success");   // Ajouter le succès
        formStatus.innerText = "Your message has been sent successfully.";
        formStatus.style.display = "block";    // Afficher le message

        // Masquer le message après 5 secondes
        setTimeout(function() {
            formStatus.style.display = "none";
        }, 5000); // 5000ms = 5 secondes
    }, function(error) {
        console.log("FAILED...", error);

        const formStatus = document.getElementById("formStatus");
        formStatus.classList.remove("success");  // Retirer le succès si présent
        formStatus.classList.add("error");       // Ajouter l'erreur
        formStatus.innerText = "There was an error sending the message. Please try again.";
        formStatus.style.display = "block";      // Afficher le message

        // Masquer le message après 5 secondes
        setTimeout(function() {
            formStatus.style.display = "none";
        }, 5000); // 5000ms = 5 secondes
    });
});
