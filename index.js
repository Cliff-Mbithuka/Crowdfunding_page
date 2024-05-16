const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
 const closeIcon = document.getElementsByClassName("close-icon")[0];

openModal.onclick = function() {
    modal.style.display = "block";
  }

  closeIcon.onclick = function() {
    modal.style.display = "none";
  }