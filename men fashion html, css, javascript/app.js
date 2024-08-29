const icon = document.querySelector(".nav");

icon.addEventListener("click", onEvent);

function onEvent(e) {
  const menu = document.querySelector(".menu");

  // each menu add and styling
  const txt1 = document.createElement("p");
  txt1.textContent = "Home";
  txt1.style.fontSize = "1.6rem";
  txt1.style.color = "white";
  const txt2 = document.createElement("p");
  txt2.textContent = "About";
  txt2.style.fontSize = "1.6rem";
  txt2.style.color = "white";
  const txt3 = document.createElement("p");
  txt3.textContent = "Product";
  txt3.style.fontSize = "1.6rem";
  txt3.style.color = "white";
  const drawer = document.createElement("div");
  const drawerContainer = document.createElement("div");

  // creating the cancel bar

  let cancel = document.createElement("section");

  cancel.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  drawer.appendChild(cancel);

  drawer.appendChild(drawerContainer);

  // cancel.style.border = "2px solid red";
  cancel.style.display = "flex";
  cancel.style.justifyContent = "end";
  cancel.style.fontSize = "3.0rem";
  cancel.style.color = "white";
  cancel.style.fontWeight = "100";
  cancel.style.paddingRight = "18px";

  //  create an event listener to cancel menu

  cancel.addEventListener("click", cancelevent);

  function cancelevent(e) {
    e.preventDefault();
  }

  // change bg color
  drawer.style.backgroundColor = "teal";
  drawer.style.height = "100vh";
  drawer.style.width = "100%";

  drawerContainer.style.height = "70vh";
  // change bg color of body

  const body = document.querySelector(".wrapall");
  document.body.style.backgroundColor = "teal";

  // remove other icons

  const favourite = document.querySelector(".fav");
  const search = document.querySelector(".glass");
  favourite.remove();
  search.remove();

  // appending txt menu

  drawerContainer.appendChild(txt1);
  drawerContainer.appendChild(txt2);
  drawerContainer.appendChild(txt3);
  console.log(drawer);

  // styling the container

  drawerContainer.style.display = "flex";
  drawerContainer.style.flexDirection = "column";
  drawerContainer.style.justifyContent = "center";
  drawerContainer.style.alignItems = "center";
  drawerContainer.style.gap = "70px";
  // drawerContainer.style.border = "2px solid red";

  menu.appendChild(drawer);
  icon.style.visibility = "hidden";
  console.log(menu);

  e.preventDefault();
}
