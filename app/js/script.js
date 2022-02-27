const body = document.querySelector("body");
const wrap = document.querySelector(".wrapper");
const hamburger = document.querySelector('.hamburger');
const xclose = document.querySelector('.close');

hamburger.addEventListener("click", function () {
    console.log("click hamburger");
  
    if (wrap.classList.contains("-right-full")) {
      // Close Hamburger
      wrap.classList.remove("-right-full");
      body.classList.add("overflow-hidden");
      wrap.classList.add("right-0");
    }
});

xclose.addEventListener("click", function () {
    console.log("click close");
  
    if (wrap.classList.contains("right-0")) {
      // Close Hamburger
      wrap.classList.remove("right-0");
      body.classList.remove("overflow-hidden");
      wrap.classList.add("-right-full");
    }
});