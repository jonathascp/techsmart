const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const lista = document.querySelectorAll(".list-menu a");

lista.forEach(item => {
    item.addEventListener("click", () => {
        if(menu.classList.contains("active"))
        {
            menu.classList.remove("active");
        }
    } )
})

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    if(window.scrollY > 100)
    {
        header.classList.add("fixed");
    }
    else
    {
        header.classList.remove("fixed");
    }
})

