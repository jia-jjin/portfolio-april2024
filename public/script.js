let sections = document.querySelectorAll("section");
let navLinks2 = document.querySelectorAll("header nav a");
const navLinks = document.querySelector(".nav-links");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height && top >= 300) {
      navLinks2.forEach((links) => {
        links.classList.remove("text-amazon-green-400");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("text-amazon-green-400");
      });
    }
    if (window.scrollY > 50) {
    }
  });
};

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

let menu = document.querySelector(".menu");

function onToggleMenu() {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
  menu.name = menu.name === "menu" ? "close" : "menu";
}

// just in case, circle following cursor
// let circle = document.getElementById("circle");

const onMouseMove = (e) => {
  // circle.style.left = e.pageX + "px";
  // circle.style.top = e.pageY + "px";
};

//listen to any click events
const onclick = (e) => {};

document.addEventListener("mousemove", onMouseMove);
document.addEventListener("click", onclick);

let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

var x425 = window.matchMedia("(max-width: 500px)");
var x768 = window.matchMedia("(max-width: 768px)");
var x768min = window.matchMedia("(min-width: 768px)");

let active = 0;
function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 2;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;
  items[active].style.height = x425.matches ? "280px" : "360px";
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = 2 - stt;
    items[i].style.filter = "blur(2px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.8;
    items[i].style.height = x425.matches ? "200px" : "300px";
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = 2 - stt;
    items[i].style.filter = "blur(2px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.8;
    items[i].style.height = x425.matches ? "200px" : "300px";
  }
}
loadShow();
next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : 0;
  loadShow();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : items.length - 1;
  loadShow();
};

function skip(index) {
  active = index;
  loadShow();
}

let phplogo = document.querySelector(".phplogo");
let pythonlogo = document.querySelector(".pythonlogo");
let htmllogo = document.querySelector(".htmllogo");
let csslogo = document.querySelector(".csslogo");
let jslogo = document.querySelector(".jslogo");
let androidlogo = document.querySelector(".androidlogo");
let phpskill = document.querySelector(".phpskill");
let pythonskill = document.querySelector(".pythonskill");
let htmlskill = document.querySelector(".htmlskill");
let cssskill = document.querySelector(".cssskill");
let jsskill = document.querySelector(".jsskill");
let androidskill = document.querySelector(".androidskill");
let projects = document.querySelectorAll("#project");

function selected(index) {
  index.style.backgroundColor = "#8b8000";
  index.style.boxShadow = "0 0 8px 8px #8b8000";
}
function unselected(index) {
  index.style.backgroundColor = "transparent";
  index.style.boxShadow = "none";
}
function skillsmoreinfo(language) {
  language.style.opacity = 1;
}
function unskillsmoreinfo(language) {
  language.style.opacity = 0;
}

function moreinfo(index) {
  projects[index].style.borderBottom = "2px solid white";
}
function unmoreinfo(index) {
  projects[index].style.borderBottom = "none";
}

x425.addEventListener("change", function () {
  loadShow();
});

x768min.addEventListener("change", function () {
  navLinks.style.display = "none";
  menu.name = "menu";
  if (x768min.matches) {
    if (navLinks.style.display === "none") {
      navLinks.style.display = "flex";
    }
  }
});
