/* ============================================
   Travel Insurance Info — Main JavaScript
   ============================================
   Features:
   1. Hamburger Menu Toggle (Mobile Navigation)
   2. FAQ Accordion
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------
     1. Hamburger Menu Toggle
     Usage: Add class "open" to nav-links on click
     ------------------------------------------ */
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');

      // Animate hamburger to X
      var spans = hamburger.querySelectorAll('span');
      var isOpen = navLinks.classList.contains('open');

      spans.forEach(function (s) {
        s.style.transform = isOpen ? 'rotate(45deg)' : 'none';
      });

      spans[1].style.opacity = isOpen ? '0' : '1';
      spans[2].style.transform = isOpen ? 'rotate(-45deg)' : 'none';
    });
  }

  /* ------------------------------------------
     2. FAQ Accordion
     Usage: Click .faq-question to toggle .faq-item.active
     ------------------------------------------ */
  var faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {
      var parent = this.parentElement;
      parent.classList.toggle('active');

      // Close other open FAQ items
      faqQuestions.forEach(function (other) {
        if (other.parentElement !== parent) {
          other.parentElement.classList.remove('active');
        }
      });
    });
  });

});
