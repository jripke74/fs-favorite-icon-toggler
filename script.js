const spans = document.querySelectorAll(".favorite-icon");

spans.forEach((span) => {
  span.addEventListener("click", function () {
    if (span.classList.contains("filled")) {
      span.innerHTML = "&#9825;";
      span.classList.remove("filled");
    } else {
      span.classList.add("filled");
      span.innerHTML = "&#10084";
    }
  });
});
