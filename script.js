let aboutMe = document.querySelector(".aboutMe");
let aboutMeSection = document.querySelector(".aboutMe-section");
let home = document.querySelector(".home");
let mainPage = document.querySelector(".mainPage");

function goAboutMe(){
    mainPage.classList.add("hide");
    aboutMeSection.classList.remove("hide");
    console.log("me");
}

function goMainPage(){
    aboutMeSection.classList.add("hide");
    mainPage.classList.remove("hide");
    console.log("home");
}

aboutMe.addEventListener("click", goAboutMe);
home.addEventListener("click", goMainPage);