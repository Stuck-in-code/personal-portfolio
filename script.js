var tabLinks = document.getElementsByClassName("my-links")
var tabContents = document.getElementsByClassName("list-items")

function opentab (tabname){
  for(tabLink of tabLinks){
    tabLink.classList.remove("active-link")
  }
  for(tabContent of tabContents){
    tabContent.classList.remove("active-list")
  }
  console.log(tabname)

  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-list")
}
let hamburgerImg = document.querySelector(".hamburger-img");
  let navClosure = document.querySelector(".close-nav");
  let navBar = document.querySelector(".nav-list");

  hamburgerImg.addEventListener("click", () => {
    navBar.style.transform = "translateX(0px)";
  });
  navClosure.addEventListener("click", () => {
    navBar.style.transform = "translateX(300px)";
  });
