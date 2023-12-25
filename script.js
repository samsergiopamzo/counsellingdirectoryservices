// JavaScript code for dropdown menu functionality
document.addEventListener("DOMContentLoaded", function() {
  var dropdowns = document.getElementsByClassName("dropdown");
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.querySelector(".dropdown-content");
      dropdownContent.classList.toggle("show");
    });
  }
});
