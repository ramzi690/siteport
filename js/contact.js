function sendmail(e) {
    e.preventDefault(); 
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    emailjs.send("service_5tp915j", "template_amccxcs", formData)
        .then((response) => {
            alert("Votre message a été envoyé avec succès !");
            document.getElementById('contactForm').reset();
        })
        .catch((error) => {
            alert("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.");
            console.error("EmailJS error:", error);
        });
}

document.getElementById('contactForm').addEventListener('submit', sendmail);
