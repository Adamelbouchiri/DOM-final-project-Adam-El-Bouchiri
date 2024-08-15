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
