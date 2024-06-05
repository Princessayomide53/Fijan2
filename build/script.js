document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // hamburger.addEventListener('click', () => {
  //   mobileMenu.style.display =
  //     mobileMenu.style.display === 'block' ? 'none' : 'block';
  // });

  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseenter', () => {
      dropdown.querySelector('.dropdown-menu').style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
      dropdown.querySelector('.dropdown-menu').style.display = 'none';
    });
  });

  const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
  mobileDropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
      const menu = dropdown.querySelector('.mobile-dropdown-menu');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
  });
});

// frequent questions

function toggleFaq(element) {
  const faqItem = element.closest('.faq-item');
  const answer = faqItem.querySelector('.faq-answer');
  const icon = faqItem.querySelector('.icon');

  // Toggle the answer visibility
  answer.classList.toggle('show');
  answer.classList.toggle('hidden');
  faqItem.classList.toggle('open');

  // Update the icon
  if (faqItem.classList.contains('open')) {
    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-up');
  } else {
    icon.classList.remove('fa-chevron-up');
    icon.classList.add('fa-chevron-down');
  }

  // Close other FAQ items
  document.querySelectorAll('.faq-item').forEach((item) => {
    if (item !== faqItem) {
      const otherAnswer = item.querySelector('.faq-answer');
      const otherIcon = item.querySelector('.icon');

      otherAnswer.classList.add('hidden');
      otherAnswer.classList.remove('show');
      otherIcon.classList.remove('fa-chevron-up');
      otherIcon.classList.add('fa-chevron-down');
      item.classList.remove('open');
    }
  });
}

// small toggle dropdown for footer

let isOpen = false;

const toggleDropdown = () => {
  isOpen = !isOpen;
  const dropdownContent = document.getElementById('dropdownContent');
  const dropdownIcon = document.getElementById('dropdownIcon');

  if (isOpen) {
    dropdownContent.classList.add('show');
    dropdownIcon.classList.remove('fa-chevron-down');
    dropdownIcon.classList.add('fa-chevron-up');
  } else {
    dropdownContent.classList.remove('show');
    dropdownIcon.classList.remove('fa-chevron-up');
    dropdownIcon.classList.add('fa-chevron-down');
  }

  console.log(isOpen, 'open');
};

document
  .getElementById('dropdownButton')
  .addEventListener('click', toggleDropdown);

// mobile menu
var navOpen = document.getElementById('mobile-open');
var navClose = document.getElementById('mobile-close');
var mobileContainer = document.getElementById('mobile-menu-list');

function openNav() {
  mobileContainer.style.display = 'flex';
  document.body.style.position = 'fixed';
  navClose.style.display = 'block';
  navOpen.style.display = 'none';
}
function closeNav() {
  mobileContainer.style.display = 'none';
  document.body.style.position = '';
  navClose.style.display = 'none';
  navOpen.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  var navOpen = document.getElementById('mobile-open');
  var navClose = document.getElementById('mobile-close');
  var mobileContainer = document.getElementById('mobile-menu-list');

  navOpen.addEventListener('click', openNav);
  navClose.addEventListener('click', closeNav);
});

// nav-links
// document.addEventListener('DOMContentLoaded', function () {
//   const currentPath = window.location.pathname.split('/').pop();
//   const navLinks = document.querySelectorAll('ul li a');

//   navLinks.forEach((link) => {
//     const linkPath = link.getAttribute('href').split('/').pop();
//     if (linkPath === currentPath) {
//       link.classList.add('active');
//     }
//   });
// });
// document.addEventListener('DOMContentLoaded', function () {
//   const currentPath = window.location.pathname.split('/').pop();
//   console.log('Current Path:', currentPath); // Debugging line

//   const navLinks = document.querySelectorAll('ul li a');

//   navLinks.forEach((link) => {
//     const linkPath = link.getAttribute('href').split('/').pop();
//     console.log('Link Path:', linkPath); // Debugging line
//     if (
//       linkPath === currentPath ||
//       (linkPath === '' && currentPath === 'index.html')
//     ) {
//       link.classList.add('active');
//       console.log('Active link:', link); // Debugging line
//     }
//   });
// });
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  const currentHref = window.location.href; // Get the current URL

  // Check if the current URL matches the link's href
  if (currentHref.endsWith(link.href)) {
    console.log(link.href);
    link.classList.add('active');
  }
});
