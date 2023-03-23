// for header 

let menu  = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// for window scroll 

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }

  window.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  }

}

// for home section 

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});
//images/gym-equipment.jpeg
//images/cardio-equipment.jpeg
//images/cardio-equipment.jpeg
// for about us section

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const imageContainer = document.querySelector(".image-container");
const image = imageContainer.querySelector("img");

document.getElementById("btn1").setAttribute("selected", "");

// Add event listeners to the buttons
btn1.addEventListener("click", () => {
  image.src = "images/gym-equipment.jpeg";
  document.querySelectorAll("button").forEach(btn => btn.classList.remove("selected"));

});


btn2.addEventListener("click", () => {
  image.src = "images/cardio-equipment.jpeg";
  document.querySelectorAll("button").forEach(btn => btn.classList.remove("selected"));

});

btn3.addEventListener("click", () => {
  image.src = "images/solarium.jpg";
  document.querySelectorAll("button").forEach(btn => btn.classList.remove("selected"));

});

// for feature section

var swiper = new Swiper(".feature-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});


// var swiper = new Swiper(".trainer-slider", {
//   spaceBetween: 20,
//   grabCursor: true,
//   loop: true,
//   centeredSlides: true,

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     991: {
//       slidesPerView: 3,
//     },
//   },
// });

// for trainers section

var swiper = new Swiper(".trainer-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide:  1,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
});


