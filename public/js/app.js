const navLinks = document.querySelectorAll(".nav-bar .links .link a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((ele) => {
      ele.classList.remove("active");
    });
    link.classList.add("active");
  });
});

const menuTitles = document.querySelectorAll(".pageTitles .title");
const menuDivs = document.querySelectorAll(".ourMenu-body");

menuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menuDivs.forEach((div) => {
      div.classList.remove("active");
      if (title.id === div.id) {
        div.classList.add("active");
      }
    });

    menuTitles.forEach((ele) => {
      ele.classList.remove("active");
    });

    title.classList.add("active");
  });
});

let modal = document.querySelector(".my-modal");
let modalShowBtn = document.querySelector(".modal-button");
let modalCloseBtn = document.querySelector(".my-modal .close");

modalShowBtn.addEventListener("click", () => {
  modal.classList.toggle("active");
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

let firstVid = document.querySelector(".first-video-div");
let firstVidVideo = document.querySelector(".first-video-div video");
let firstVidClose = document.querySelector(".first-video-div span");
let firstVidOpen = document.querySelector(".watch-vid");

firstVidOpen.addEventListener("click", () => {
  firstVid.classList.remove("hide");
  firstVidVideo.play();
});

firstVidClose.addEventListener("click", () => {
  firstVid.classList.add("hide");
  firstVidVideo.pause();
  firstVidVideo.currentTime = 0;
});

let scndVid = document.querySelector(".scnd-vid-div");
let scndVidVideo = document.querySelector(".scnd-vid-div video");
let scndVidClose = document.querySelector(".scnd-vid-div span");
let scndVidOpen = document.querySelector(".scnd-vid-watch");

scndVidOpen.addEventListener("click", () => {
  scndVid.classList.remove("hide");
  scndVidVideo.play();
});

scndVidClose.addEventListener("click", () => {
  scndVid.classList.add("hide");
  scndVidVideo.pause();
  scndVidVideo.currentTime = 0;
});

// _________________________________________

let nextBtns = document.querySelectorAll(".next");
let previousBtns = document.querySelectorAll(".previous");
let containers = document.querySelectorAll(".carousel-container");

//* sliding function
let currentIndex = 0;
const slideImage = (index, myBtn) => {
  let carouselBtnAttribute = myBtn.getAttribute("carouselBtn");

  containers.forEach((container) => {
    if (container.id == carouselBtnAttribute) {
      //! variables  sal7in  ghir  l lelement  li mt7a9a9 fih chart dyalna
      let slides = container.querySelectorAll(".slide");
      let camera = container.querySelector(".carousel");
      let slideWidth = slides[0].clientWidth;
      let indicators = container.querySelectorAll(".indicator");

      //* clikit 3la previous  o ana  aslan f awel image  khasni nmchi  l image lakhra
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        //* clikit 3la next o ana  aslan f akhir image khasni nrje3  l image lewla
        index = 0;
      }

      indicators.forEach((indicator) => {
        indicator.classList.remove("activeIndicator");
      });
      indicators[index].classList.add("activeIndicator");

      //* hna bach n7arek l camera dyal lcarousel
      camera.style.transform = `translateX(-${slideWidth * index}px)`;
      currentIndex = index;
    }
  });
};

//* btn dyal next
nextBtns.forEach((next) => {
  next.addEventListener("click", (event) => {
    slideImage(currentIndex + 1, event.target);
  });
});

//* btn dyal previous
previousBtns.forEach((previous) => {
  previous.addEventListener("click", (event) => {
    slideImage(currentIndex - 1, event.target);
  });
});

//* auto slide
containers.forEach((container) => {
  //* check wach  l element 3ando attribute auto slide
  if (container.getAttribute("autoslide")) {
    let nextBtn = container.querySelector(".next");

    setInterval(() => {
      //* method  kanwarek  biha  3la  btn
      nextBtn.click();
    }, 3000);
  }
});

//* indicators

containers.forEach((container) => {
  //! variables  sal7in  ghir  l lelement  li mt7a9a9 fih chart dyalna
  let slides = container.querySelectorAll(".slide");
  let indicatorsGrp = document.createElement("div");
  indicatorsGrp.classList.add("indicators-grp");
  container.appendChild(indicatorsGrp);

  slides.forEach((slide) => {
    let indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicatorsGrp.appendChild(indicator);
  });
  indicatorsGrp.querySelector(".indicator").classList.add("activeIndicator");
});

let upButton = document.querySelector(".up");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    upButton.style.right = "20px";
  } else {
    upButton.style.right = "-80px";
  }
});
upButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
