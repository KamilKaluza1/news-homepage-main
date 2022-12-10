const el = document.getElementById("d");


el.addEventListener('click', () => {
    const item = document.querySelector(".nav-items");
    item.className = item.className = "slider";


    const hamburger = document.querySelector("#hamburger");
    hamburger.remove();

    const slider = document.querySelector(".slider");
    const closeBtn = document.createElement("img");
    closeBtn.src ="./assets/images/icon-menu-close.svg";
    closeBtn.className= "close-btn";

    slider.appendChild(closeBtn)

})

// addEventListener('click', () => {
//     const closeBtn = document.querySelector(".close-btn");
//     const item = document.querySelector(".slider");

// })