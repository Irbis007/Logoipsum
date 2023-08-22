document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabs = document.querySelectorAll(".solution-tab");

  tabButtons.forEach((item, i) => {
    item.addEventListener("click", () => {
      if (i) {
        tabButtons[i - 1].classList.remove("active");
        tabs[i - 1].classList.remove("active");
      } else {
        tabButtons[i + 1].classList.remove("active");
        tabs[i + 1].classList.remove("active");
      }
      item.classList.add("active");
      tabs[i].classList.add("active");
    });
  });
});
