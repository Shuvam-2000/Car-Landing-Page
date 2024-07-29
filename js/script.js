// Show the sidebar
const showSidebar = () => {
    const sidebar = document.querySelector('.side');
    sidebar.style.display = 'flex';
};

// Hide the sidebar
const hideSidebar = () => {
    const hidesidebar = document.querySelector('.side');
    hidesidebar.style.display = 'none';
};

// Preloader - hiding the preloader
const loader = document.getElementById("preloader");

window.addEventListener("load", () => {
    loader.style.display = "none";
});

// sending email when contact form submitted
const submitForm = () => {
    const email = document.getElementById("email").value;
    const body = 'This is the Body'; 
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shuvamsaha2000@gmail.com",
        Password : "779B5104FB65FF4056DCB9D7DD31D67138CD",
        To : 'shuvamsaha2000@gmail.com',
        From : email,
        Subject : "New Contact Form Enquiry",
        Body : body
    }).then(
      message => confirm(message)
    ).catch((error) => {
        console.log("Failed To Send Email", error)
        alert("Failed to send Email")
    })
}