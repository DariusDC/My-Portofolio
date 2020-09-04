const menuBtn = document.querySelector(".burger");
const menuItems = document.querySelector(".nav-items");
const items = document.querySelectorAll(".nav-item");
const lines = document.querySelectorAll(".line");
const navbar = document.querySelector(".main-nav");
const header = document.querySelector(".header");
const portofolio = document.querySelector(".portofolio");
const contact = document.querySelector(".contact");
const about = document.querySelector(".about");
const work = document.querySelector(".work");
const contactBtn = document.querySelector(".header-btn");
const contactForm = document.querySelector("#contact-form");
const closeForm = document.querySelector(".close-form");
const aboutForm = document.querySelector(".about-form");
const messageForm = document.querySelector(".message-form");
const contactBtn2 = document.querySelector(".contact-btn");

let toggle = false;

const toggleBtn = () => {
  if (!toggle) {
    menuBtn.classList.add("close");
    menuItems.classList.add("show");
    items.forEach((item) => item.classList.add("show"));
    lines.forEach((line) => line.classList.add("show"));
  } else {
    menuBtn.classList.remove("close");
    menuItems.classList.remove("show");
    items.forEach((item) => item.classList.remove("show"));
    lines.forEach((line) => line.classList.remove("show"));
  }
  toggle = !toggle;
};

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += el.offsetLeft - xScroll + el.clientLeft;
      yPos += el.offsetTop - yScroll + el.clientTop;
    } else {
      // for all other non-BODY elements
      xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
      yPos += el.offsetTop - el.scrollTop + el.clientTop;
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos,
  };
}

window.addEventListener("scroll", () => {
  if (getPosition(header).y < -50) {
    navbar.classList.add("white");
    lines.forEach((line) => line.classList.add("white"));
  } else {
    navbar.classList.remove("white");
    lines.forEach((line) => line.classList.remove("white"));
  }
});

const removeCurrent = () => {
  contact.classList.remove("current");
  about.classList.remove("current");
  portofolio.classList.remove("current");
  work.classList.remove("current");
};

menuBtn.addEventListener("click", toggleBtn);

contactBtn.addEventListener("click", () => {
  contactForm.classList.add("show");
  aboutForm.classList.add("show");
  messageForm.classList.add("show");
  menuBtn.classList.add("no-display");
});

contactBtn2.addEventListener("click", () => {
  contactForm.classList.add("show");
  aboutForm.classList.add("show");
  messageForm.classList.add("show");
  menuBtn.classList.add("no-display");
});

closeForm.addEventListener("click", () => {
  contactForm.classList.remove("show");
  aboutForm.classList.remove("show");
  messageForm.classList.remove("show");
  menuBtn.classList.remove("no-display");
});

// Hide the navbar on mobile devices when choosing a section

items.forEach((item) => item.addEventListener("click", toggleBtn));
