const menubar = document.querySelector(".hamburger");
const navMenuContent = document.querySelector(".nav-list");
const navBar = document.querySelector(".navbar");

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  // Ajusta este valor según cuánto deseas que se desplace antes de cambiar el color
  var scrollTrigger = 100;

  window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY;

    if (scrollTop > scrollTrigger) {
      navbar.classList.add("navbar-colored");
      navbar.classList.remove("navbar-transparent");
    } else {
      navbar.classList.add("navbar-transparent");
      navbar.classList.remove("navbar-colored");
    }
  });
});

menubar.addEventListener("click", () => {
  document.querySelector(".line1").classList.toggle("line1_active");
  document.querySelector(".line2").classList.toggle("line2_active");
  document.querySelector(".line3").classList.toggle("line3_active");
  document.querySelector(".nav-list").classList.toggle("show_active");
});
