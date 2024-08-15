const menuTitles = document.querySelectorAll(".pageTitles .title");
const menuDivs = document.querySelectorAll(".ourMenu-body");

menuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menuDivs.forEach(div => {
      div.classList.remove("active")
      if(title.id === div.id) {
        div.classList.add("active")
      }
    })


    menuTitles.forEach(ele => {
      ele.classList.remove("active")
    })

    title.classList.add("active")
  });
});
