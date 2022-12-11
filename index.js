const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener('click', () => {
    const item = document.querySelector(".nav-items");
    item.className = item.className = "slider";


    const hamburger = document.querySelector(".hamburger");
    hamburger.remove();

    const d = document.querySelector(".close-container");
    const closeBtn = document.createElement("img");
    closeBtn.src ="./assets/images/icon-menu-close.svg";
    closeBtn.className= "close-btn";

    d.appendChild(closeBtn)

});

const closeBtn = document.querySelector(".close-container");

closeBtn.addEventListener('click', () => {
    
    const item = document.querySelector(".slider");
    item.className = item.className = "nav-items";

    const closeBtn = document.querySelector(".close-container");
    closeBtn.removeChild(closeBtn.firstChild);

    hamburgerContainer = document.querySelector(".hamburger-container")

    const hamburger = document.createElement("img");
    hamburger.src ="./assets/images/icon-menu.svg";
    hamburger.className= "hamburger";
    hamburgerContainer.appendChild(hamburger)

})