// showing the sidebar
function show(){
    const sidebar = document.querySelector('.side')
    sidebar.style.display = 'flex'
}


// hiding the sidebar
function hide(){
    const hidesidebar = document.querySelector('.side')
    hidesidebar.style.display = 'none'
};

// preloader - hiding the preloader 
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none"
});
