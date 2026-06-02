/* ============================================
   Travel Insurance Info — Main JavaScript
   ============================================
   Features:
   1. Hamburger Menu Toggle (Mobile Navigation)
   2. FAQ Accordion
   3. Blog Card Toggle (Legacy)
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

  /* ------------------------------------------
     3. Blog Card Toggle (Legacy)
     Usage: Click .blog-card-link to expand article inline
     Note: No longer used since blog uses flat HTML files
     ------------------------------------------ */
  var blogCards = document.querySelectorAll('.blog-card-link');

  blogCards.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var card = this.closest('.blog-card');
      var article = card.querySelector('.blog-article-full');

      if (article) {
        var isOpen = card.classList.contains('expanded');

        // Close all expanded cards
        document.querySelectorAll('.blog-card.expanded').forEach(function (x) {
          x.classList.remove('expanded');
        });

        // Open clicked card if it wasn't already open
        if (!isOpen) {
          card.classList.add('expanded');
        }
      }
    });
  });

});
