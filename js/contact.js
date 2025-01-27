emailjs.init("HZZNbk9VNv-LhBkAc");

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    console.log("Template Params:", templateParams);
    emailjs
        .send("service_4riws1v", "template_8rlu0jg", templateParams)
        .then((response) => {
            alert("Email sent successfully!");
            console.log("SUCCESS!", response);
        })
        .catch((error) => {
            alert("Failed to send email. Please try again.");
            console.error("FAILED...", error);
        });

    event.target.reset();
});
