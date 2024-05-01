 // Burger menus
 document.addEventListener("DOMContentLoaded", function () {
    // open
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
      for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.selectable-button');
    const makeAppointmentBtn = document.getElementById('makeAppointmentBtn');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Toggle the 'selected' class on the clicked button
        this.classList.toggle('selected');
      });
    });
  
    makeAppointmentBtn.addEventListener('click', function() {
      const selectedButtons = document.querySelectorAll('.selectable-button.selected');
      if (selectedButtons.length > 0) {
        // Handle appointment booking here
        console.log('Appointment booked for:', selectedButtons);
      } else {
        alert('Please select at least one service.');
      }
    });
  });
  // Get all the buttons
const buttons = document.querySelectorAll('.grid button');

// Loop through each button and add an event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    button.classList.add('active');
  });
});
