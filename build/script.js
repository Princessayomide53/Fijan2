document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // hamburger.addEventListener('click', () => {
  //   mobileMenu.style.display =
  //     mobileMenu.style.display === 'block' ? 'none' : 'block';
  // });

  const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
  mobileDropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
      const menu = dropdown.querySelector('.mobile-dropdown-menu');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
  });

  //
  const searchIcon = document.querySelector('.search-icon-1');
  const searchForm = document.querySelector('.search-form-1');

  searchIcon.addEventListener('click', () => {
    // searchForm.style.backdropFilter = blur('5px');
    searchForm.classList.toggle('hidden');
  });

  const searchIcon2 = document.querySelector('.search-icon-2');
  const searchForm2 = document.querySelector('.search-form-2');

  searchIcon2.addEventListener('click', () => {
    // searchForm.style.backdropFilter = blur('5px');
    searchForm2.classList.toggle('hidden');
    searchIcon2.style.display = 'none';
  });
});

// dropdown nav
document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const dropdownMenu = dropdown.querySelector('.dropdown-menu');
  const dropNone = dropdown.querySelector('.drops');

  dropdown.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block';
  });
  dropNone.addEventListener('mouseleave', () => {
    dropdownMenu.style.display = 'none';
  });

  // dropdown.addEventListener('mouseleave', () => {
  //   dropdownMenu.style.display = 'none';
  // });
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

// nav-links for large screen
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  const currentHref = window.location.href; // Get the current URL

  // Check if the current URL matches the link's href
  if (currentHref.endsWith(link.href)) {
    console.log(link.href);
    link.classList.add('active');
  }
});

// nav-links for mobile screen
// const navLinks2 = document.querySelectorAll('.mobile-link');

// navLinks2.forEach((link) => {
//   const currentHref = window.location.href; // Get the current URL

//   // Check if the current URL matches the link's href
//   if (currentHref.endsWith(link.href)) {
//     console.log(link.href);
//     link.classList.add('actives');
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.mobile-link');
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href) {
      const linkPath = href.split('/').pop();

      if (
        linkPath === currentPath ||
        (linkPath === '' && currentPath === 'index.html')
      ) {
        link.classList.add('actives');
      }

      // Check if the current link is part of the Job Seekers dropdown
      if (
        ['nurses.html', 'medicalDoctor.html', 'careSupport.html'].includes(
          currentPath
        )
      ) {
        const jobSeekersLink = document.querySelector('.job-seekers-main-link');
        if (jobSeekersLink) {
          jobSeekersLink.classList.add('actives');
        }
      }
    }
  });
});

// toggle mobile nav
let isShow = false;

const toggleNavdown = () => {
  isShow = !isShow;
  const dropdownContent = document.getElementById('navContent');
  const dropdownIcon = document.getElementById('navIcon');

  if (isShow) {
    dropdownContent.classList.add('show');
    dropdownIcon.classList.remove('fa-chevron-down');
    dropdownIcon.classList.add('fa-chevron-up');
  } else {
    dropdownContent.classList.remove('show');
    dropdownIcon.classList.remove('fa-chevron-up');
    dropdownIcon.classList.add('fa-chevron-down');
  }

  console.log(isShow, 'open');
};

document
  .getElementById('dropdownButtons')
  .addEventListener('click', toggleNavdown);

// swiper coverflow
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: false,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// scroll-bar arrows
document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.getElementById('scroll-container');
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');

  leftArrow.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  });

  rightArrow.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  });
});
