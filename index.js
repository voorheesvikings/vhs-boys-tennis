document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === '+' || e.key === '=' || e.key === '-' || e.key === '0')) {
        e.preventDefault();
    }
});

document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let menu = document.getElementById("menu");
    let menudrop = document.getElementById("menudrop");

    menu.addEventListener("click", () => {
        if (menudrop.style.display === "none" || menudrop.style.display === "") {
            menudrop.style.display = "block";
            setTimeout(() => {
                menudrop.style.opacity = "1";
                menudrop.style.transform = "translateY(0px)";
            }, 10);
        } else {
            menudrop.style.opacity = "0";
            menudrop.style.transform = "translateY(-10px)";
            setTimeout(() => {
                menudrop.style.display = "none";
            }, 300);
        }
    });
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menudrop.contains(event.target) && menu.classList.contains("change")) {
            openDiv(menu);
            closeMenu();
        }
    });

    function closeMenu() {
        menudrop.style.opacity = "0";
        menudrop.style.transform = "translateY(-10px)";
        setTimeout(() => {
            menudrop.style.display = "none";
        }, 300);
    }
});
function openDiv(x) {
    x.classList.toggle("change");
}
let home = document.getElementById("home");
let schedule = document.getElementById("schedule");
let team = document.getElementById("team");
let events = document.getElementById("events");
let contact = document.getElementById("contact");

homelink.addEventListener("click", ()=>{
    window.open("https://www.nhvweb.net/vhs/athletics/","_blank")
})

home.classList.add("menuElement");
schedule.classList.add("menuElement");
team.classList.add("menuElement");
events.classList.add("menuElement");
contact.classList.add("menuElement");

home.addEventListener("click", () => {
    window.location.href = "index.html";
});

schedule.addEventListener("click", () => {
    window.location.href = "schedule.html";
});

contact.addEventListener("click", () => {
    window.location.href = "contact.html";
});

team.addEventListener("click", () => {
    window.location.href = "team.html";
});

events.addEventListener("click", () => {
    window.location.href = "events.html";
});

// Image Gallery
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
