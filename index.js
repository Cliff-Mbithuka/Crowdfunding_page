const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeIcon = document.getElementsByClassName("close-icon")[0];
const thankYouPage = document.getElementById("thankYouPage");
const closeThankYouBtn = document.getElementById("closeThankYouBtn");
const openThankYouBtn = document.getElementsByClassName("Continue");
const pledge = document.getElementsByClassName("pledge");
const closeMenu = document.getElementById("closeMenu");
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sidemenu");
const selectReward = document.getElementsByClassName("select");



openModal.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("fixed");
};

closeIcon.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("fixed");
};

//open thank you
for (let button of openThankYouBtn) {
  button.addEventListener("click", () => {
    modal.style.display = "none";
    thankYouPage.style.display = "block";
  });
}

closeThankYouBtn.onclick = function () {
  thankYouPage.style.display = "none";
  document.body.classList.remove("fixed");
};

//menu
menuToggle.addEventListener("click", () => {
  sideMenu.classList.add("open");
});
closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});

//select Reward
for (let button of selectReward) {
  button.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.classList.add("fixed");
  });
}


