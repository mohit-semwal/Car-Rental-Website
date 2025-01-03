const menuBtn = document.getElementById("menuBtn")
const navLinks = document.getElementById("navLinks")
const menuBtnIcon = menuBtn.querySelector("i");


//  creating Hamburger
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open")

  const isOpen = navLinks.classList.contains("open")
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
})
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open")
  menuBtnIcon.setAttribute("class", "ri-menu-line")
})
// Hamburger end here

//  animation 
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".headerImage img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".headerContent h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".headerContent h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".headerContent .sectionDescription", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".headerForm", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".aboutCard", {
  ...scrollRevealOption,
  interval: 500,
});
// animation end here

const tabs = document.querySelector(".dealsTabs");
tabs.addEventListener("click", (e) => {
  const tabContent = document.querySelectorAll(".dealsContainer .tabContent")
  Array.from(tabs.children).forEach((item) => {
    if (item.dataset.id === e.target.dataset.id) {
      item.classList.add("active")
    }
    else {
      item.classList.remove("active")
    }
  });
  tabContent.forEach(item => {
    if (item.id === e.target.dataset.id) {
      item.classList.add("active")
    }
    else {
      item.classList.remove("active")
    }
  })
})

ScrollReveal().reveal(".chooseImage img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".chooseContent .sectionHeader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chooseContent .sectionDescription", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chooseCard", {
  duration: 1000,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".subscribeImage img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".subscribeContent .sectionHeader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribeContent .sectionDescription", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".subscribeContent form", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});


