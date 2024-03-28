export default function createDropdownMenu(master, options) {
  //Master here should be a name
  //Options here should be a list of buttons
  console.log("INSIDE THE MODULE!");
  const dropdown_menu = document.createElement("div");

  const menu_master = document.createElement("div");
  menu_master.classList = "menu-master";
  menu_master.appendChild(master);

  const button_list = document.createElement("div");

  button_list.classList = "button-list";
  options.forEach((button) => {
    button_list.appendChild(button);
  });

  menu_master.addEventListener("click", (e) => {
    e.preventDefault();
    button_list.classList.toggle("hidden");
  });

  dropdown_menu.appendChild(menu_master);
  dropdown_menu.appendChild(button_list);

  return dropdown_menu;
}

// module.exports = createDropdownMenu;
