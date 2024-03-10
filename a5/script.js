let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;

next.addEventListener("click", function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
});

prev.addEventListener("click", function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
});

function refreshInt() {
  next.click();
}

let refreshInterval = setInterval(refreshInt, 3000);

function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";

  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  function refreshInt() {
    next.click();
  }
  refreshInterval = setInterval(refreshInt, 3000);
}
