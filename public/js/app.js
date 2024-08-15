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
let firstVidOpen = document.querySelector(".watch-vid")

firstVidOpen.addEventListener("click", () => {
  firstVid.classList.remove("hide")
  firstVidVideo.play();
})

firstVidClose.addEventListener("click", () => {
  firstVid.classList.add("hide")
  firstVidVideo.pause();
  firstVidVideo.currentTime = 0;
})

let scndVid = document.querySelector(".scnd-vid-div");
let scndVidVideo = document.querySelector(".scnd-vid-div video");
let scndVidClose = document.querySelector(".scnd-vid-div span");
let scndVidOpen = document.querySelector(".scnd-vid-watch")

scndVidOpen.addEventListener("click", () => {
  scndVid.classList.remove("hide")
  scndVidVideo.play()
})

scndVidClose.addEventListener("click", () => {
  scndVid.classList.add("hide")
  scndVidVideo.pause();
  scndVidVideo.currentTime = 0;
})

