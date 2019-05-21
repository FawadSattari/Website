function myFunction() {
  var x = document.getElementById("myTopNav");
  if (x.className === "menu_list") {
    x.className += " responsive";
  } else {
    x.className = "menu_list";
  }
} 