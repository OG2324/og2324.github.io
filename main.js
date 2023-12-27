document.querySelectorAll("#main-nav .nav-item").forEach(navItem => {
    navItem.addEventListener("click", (e) =>{
        newTab = document.getElementById(e.target.getAttribute("data-tab"));
        if (!newTab) {
            return;
        }
        oldNavItem = document.querySelector("#main-nav .nav-item.active")
        if (oldNavItem) {
            oldNavItem.classList.remove("active")
        }
        oldTab = document.querySelector("#main-content .tab.active")
        console.log(oldTab)
        if (oldTab) {
            oldTab.classList.remove("active")
        }
        newTab.classList.add("active")
        console.log(newTab)
        e.target.classList.add("active")

    })
})