
// JavaScript to toggle tab visibility
const tabs = document.querySelectorAll('[data-tabs-target]');
const tabContents = document.querySelectorAll('#default-tab-content > div');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.getAttribute('data-tabs-target'));

    // Hide all tab contents and remove active state from tabs
    tabContents.forEach(content => content.classList.add('hidden'));
    tabs.forEach(t => t.classList.remove('border-orange-400'));

    // Show the targeted tab content and mark tab as active
    target.classList.remove('hidden');
    tab.classList.add('border-blue-500');
  });
});

// Show the first tab by default
// document.getElementById('profile').classList.remove('hidden');
// document.getElementById('profile-tab').classList.add('border-blue-500');

// scroll color
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white', 'shadow-lg');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-white', 'shadow-lg');
  }
});

// Get the necessary DOM elements
const playButton = document.getElementById('playButton');
const videoModal = document.getElementById('videoModal');
const closeButton = document.getElementById('closeButton');
const videoPlayer = document.getElementById('videoPlayer');

// Event listener to open the modal when play button is clicked
playButton.addEventListener('click', function() {
  videoModal.classList.remove('hidden'); // Remove 'hidden' to display the modal
  videoPlayer.play(); // Play the video when modal opens
});

// Event listener to close the modal when close button is clicked
closeButton.addEventListener('click', function() {
  videoModal.classList.add('hidden'); // Add 'hidden' to hide the modal
  videoPlayer.pause(); // Pause the video
  videoPlayer.currentTime = 0; // Reset the video to the beginning
});


