window.addEventListener("scroll",()=>{
    let navbar = document.getElementById("navBar");
    let search = this.document.getElementById("searchContent");
    let scrolled = window.scrollY > 0;
    navbar.classList.toggle("scrolled",scrolled);
    search.classList.toggle("searchScroll",scrolled);
})