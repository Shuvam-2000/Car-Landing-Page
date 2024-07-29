// Show the sidebar
const show = () => {
    const sidebar = document.querySelector('.side');
    sidebar.style.display = 'flex';
};

// Hide the sidebar
const hide = () => {
    const hidesidebar = document.querySelector('.side');
    hidesidebar.style.display = 'none';
};

// Preloader - hiding the preloader
const loader = document.getElementById("preloader");

window.addEventListener("load", () => {
    loader.style.display = "none";
});
