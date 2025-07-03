const buttons = document.querySelectorAll(".favorite-icon");
console.log(buttons);
buttons.forEach(button => {
  button.addEventListener("click", function() {
    if (button.classList.contains("filled")) {
      button.innerHTML = "&#9825;"
      button.classList.remove("filled");
    } else {
      button.classList.add("filled");
      button.innerHTML = "&#10084";
    }
  })
});