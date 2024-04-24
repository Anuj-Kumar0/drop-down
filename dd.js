const firstNav = document.querySelector("#first");
const allDrops = document.querySelectorAll("#visible");

firstNav.addEventListener("mouseover", () => {
  allDrops.forEach((item) => {
    item.style.display = "block";
  });
});

firstNav.addEventListener("mouseout", () => {
  allDrops.forEach((item) => {
    item.style.display = "none";
  });
});
