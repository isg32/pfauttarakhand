// script.js

document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");

  // Wait for 1 second, then fade out the loading screen
  setTimeout(() => {
    loadingScreen.style.opacity = "0"; // Start fade-out effect

    // After the fade-out transition, hide the loading screen and show main content
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
      mainContent.style.opacity = "1"; // Fade in the main content
    }, 1000); // Match the transition duration in CSS
  }, 1000); // Initial delay before fading out
});

 
 
 
 // JavaScript to create automatic sliding for the gallery
  let currentImageIndex = 0; // Renamed from 'currentIndex' to avoid conflicts
  const gallerySlides = document.querySelectorAll('.slider-item'); // Renamed from 'slides'
  const totalGallerySlides = gallerySlides.length; // Renamed from 'totalSlides'

  function nextImageSlide() {
    if (currentImageIndex < totalGallerySlides - 1) {
      currentImageIndex++;
    } else {
      currentImageIndex = 0; // Loop back to the first slide
    }
    updateGallerySliderPosition();
  }

  function updateGallerySliderPosition() {
    const gallerySlider = document.querySelector('.slider'); // Renamed from 'slider'
    const slideWidth = gallerySlides[0].offsetWidth + 20; // Image width + margin
    gallerySlider.style.transform = `translateX(-${currentImageIndex * slideWidth}px)`;
  }

  // Automatically move to the next slide every 3 seconds
  setInterval(nextImageSlide, 3000);




// Toggle hamburger menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}

// Add shadow and adjust navbar height when scrolling
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});


window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});


















// Automatic Slideshow
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();



const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and contents
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => {
      content.classList.remove('active');
      content.style.transform = 'translateY(-20px)';
    });

    // Add active class to the clicked tab and corresponding content
    tab.classList.add('active');
    const target = document.querySelector(tab.dataset.target);
    target.classList.add('active');
    target.style.transform = 'translateY(0)';
  });
});



// JavaScript for Animation
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.trustee-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.5 });

  cards.forEach(card => {
    observer.observe(card);
  });
});






  // Wait for the DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Select all dropdown buttons
    const dropdowns = document.querySelectorAll('.w3-dropdown-hover');

    // Add click event listener for each dropdown button
    dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('.w3-button');
      const dropdownContent = dropdown.querySelector('.w3-dropdown-content');

      // Toggle dropdown content on button click
      button.addEventListener('click', function() {
        // Toggle visibility of the dropdown content
        dropdownContent.classList.toggle('show');
      });

      // Close the dropdown if clicked outside of it
      document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
          dropdownContent.classList.remove('show');
        }
      });
    });
  });


















    

    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
          // Toggle 'active' class on click
          item.classList.toggle('active');
          
          // Close other FAQ items if opened
          document.querySelectorAll('.faq-item').forEach(otherItem => {
              if (otherItem !== item) {
                  otherItem.classList.remove('active');
              }
          });
      });
  });

  
// Function to check if the element is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Add scroll event listener to animate sections when they come into view
window.addEventListener('scroll', () => {
  const donationSection = document.querySelector('.donation-section');
  if (isInView(donationSection)) {
      donationSection.classList.add('visible');
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".efforts-content");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        content.classList.add("visible");
      }
    });
  });
  observer.observe(content);
});



function filterGallery(animal) {
  // Get all gallery items and category icons
  const items = document.querySelectorAll('.gallery-item');
  const categoryIcons = document.querySelectorAll('.animal-icon');

  // Loop through each item to apply the filter
  items.forEach(item => {
      if (animal === 'all') {
          item.style.display = 'block';
          item.style.opacity = 1;
      } else if (item.classList.contains(animal)) {
          item.style.display = 'block';
          setTimeout(() => item.style.opacity = 1, 50);
      } else {
          item.style.opacity = 0;
          setTimeout(() => item.style.display = 'none', 300);
      }
  });

  // Highlight the selected category
  categoryIcons.forEach(icon => {
      icon.classList.remove('selected');
      if (icon.getAttribute('onclick').includes(animal)) {
          icon.classList.add('selected');
      }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const trusteeCards = document.querySelectorAll('.trustee-card');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);  // Stop observing once visible
          }
      });
  }, { threshold: 0.1 });

  trusteeCards.forEach(card => {
      observer.observe(card);
  });
});


document.querySelector('.play-button').addEventListener('click', function() {
  const videoContainer = document.querySelector('.video-container');
  videoContainer.classList.add('clicked'); // Add class to hide play button and show video
  const video = videoContainer.querySelector('.video');
  video.play(); // Start playing the video
});


// Get the modal and button
const modal = document.getElementById('donationModal');
const donateBtn = document.getElementById('donateBtn');

// Get the <span> element to close the modal
const closeBtn = document.createElement('span');
closeBtn.textContent = '×';
closeBtn.classList.add('close');
modal.querySelector('.modal-content').prepend(closeBtn);

// When the "Donate Now" button is clicked, open the modal
donateBtn.addEventListener('click', () => {
    modal.style.display = "block";
});

// When the close button (×) is clicked, close the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// When the user clicks anywhere outside the modal, close it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Form submit handling
const form = document.getElementById('donation-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Show success message
    document.getElementById('success-message').style.display = 'block';

    // Show QR code for UPI payment
    document.getElementById('qr-code').style.opacity = 1;
    document.getElementById('qr-code').style.display = 'block';

    // Reset form
    form.reset();
});


document.addEventListener("DOMContentLoaded", () => {
  const animalSelect = document.getElementById("animal");
  const frequencySelect = document.getElementById("frequency");
  const payableAmount = document.getElementById("payable");
  const goAheadButton = document.getElementById("goAheadButton");
  const qrCodeSection = document.getElementById("qrCode");
  const qrCodeImage = document.getElementById("qrCodeImage");  // Using the new id

  // Function to calculate and display the payable amount
  function updatePayableAmount() {
      const [monthly, yearly] = animalSelect.value.split(",");
      const isMonthly = frequencySelect.value === "monthly";
      payableAmount.textContent = isMonthly ? monthly : yearly;
  }

  // Function to show QR Code with local image
  function showQRCode() {
      const qrCodeURL = "images/QR_code_for_mobile_English_Wikipedia.svg.png"; // Update path as needed
      qrCodeImage.src = qrCodeURL; // Set the source dynamically
      qrCodeSection.style.display = "block"; // Show the QR code section
  }

  // Event Listeners
  animalSelect.addEventListener("change", updatePayableAmount);
  frequencySelect.addEventListener("change", updatePayableAmount);
  goAheadButton.addEventListener("click", showQRCode);

  // Initial update of payable amount
  updatePayableAmount();
});




const careData = {
  cat: { "3": 145500, "6": 291000, "12": 582000 },
  equine: { "3": 435090, "6": 870180, "12": 1740360 },
  poultry: { "3": 5250, "6": 10500, "12": 21000 },
  sheep: { "3": 23220, "6": 46440, "12": 92880 },
};

document.getElementById("care-animal").addEventListener("change", updateCareAmount);
document.getElementById("care-plan").addEventListener("change", updateCareAmount);

function updateCareAmount() {
  const animal = document.getElementById("care-animal").value;
  const plan = document.getElementById("care-plan").value;

  if (animal && plan) {
    const amount = careData[animal][plan];
    const duration =
      plan === "3" ? "3 months" : plan === "6" ? "6 months" : "a year";
    document.getElementById("care-amount-display").innerHTML = `
      You can care for a ${animal} for ${duration} with a contribution of ₹${amount}.
    `;
  }
}

document.getElementById("care-submit-button").addEventListener("click", () => {
  const qrCodeContainer = document.getElementById("care-qr-code-container");
  qrCodeContainer.classList.remove("care-hidden");
});


// JavaScript for handling form submission
const contactForm = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  thankYouMessage.style.display = "block"; // Show thank-you message
});



