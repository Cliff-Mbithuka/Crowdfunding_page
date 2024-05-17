const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
 const closeIcon = document.getElementsByClassName("close-icon")[0];
 const thankYouPage = document.getElementById("thankYouPage");
 const closeThankYouBtn = document.getElementById("closeThankYouBtn");
const openThankYouBtn = document.getElementById("openThankYouBtn");
const pledge = document.getElementsByClassName('pledge');

openModal.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add('fixed');
  }

  closeIcon.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove('fixed');
  }

  openThankYouBtn.onclick = function(){
    modal.style.display = "none";
    thankYouPage.style.display = "block"
  }

  closeThankYouBtn.onclick = function(){
    thankYouPage.style.display = "none";
    document.body.classList.remove('fixed');
  }

 