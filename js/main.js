/* ============================================
   Travel Insurance Info — Main JavaScript
   ============================================
   Features:
   1. Hamburger Menu Toggle (Mobile Navigation)
   2. Cookie Consent
   3. FAQ Accordion
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
     2. Cookie Consent Banner
     Usage: Shows a privacy/cookie notice to new visitors
     ------------------------------------------ */
  var cookieBanner = document.getElementById('cookie-banner');

  if (cookieBanner) {
    // Check if user already made a choice
    var cookieChoice = localStorage.getItem('cookie_consent');

    if (!cookieChoice) {
      // Show banner after a short delay for smooth UX
      setTimeout(function () {
        cookieBanner.classList.add('show');
      }, 500);
    }

    // Accept button
    var acceptBtn = document.getElementById('cookie-accept');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookie_consent', 'accepted');
        cookieBanner.classList.remove('show');
        loadTrackingScripts();
      });
    }

    // Decline button
    var declineBtn = document.getElementById('cookie-decline');
    if (declineBtn) {
      declineBtn.addEventListener('click', function () {
        localStorage.setItem('cookie_consent', 'declined');
        cookieBanner.classList.remove('show');
      });
    }

    // If user previously accepted, load tracking on page load
    if (localStorage.getItem('cookie_consent') === 'accepted') {
      loadTrackingScripts();
    }

  }

  /* ------------------------------------------
     Load Google Analytics + Google Tag Manager
     Only called after user gives cookie consent
     ------------------------------------------ */
  function loadTrackingScripts() {
    // Already loaded? Don't load again
    if (window._trackingLoaded) return;
    window._trackingLoaded = true;

    // 1. Google tag (gtag.js)
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-FPH9D9H12V';
    document.head.appendChild(gaScript);

    // 2. gtag config
    var gtagInline = document.createElement('script');
    gtagInline.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-FPH9D9H12V');
    `;
    document.head.appendChild(gtagInline);

    // 3. Google Tag Manager
    var gtmScript = document.createElement('script');
    gtmScript.textContent = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WGRMW39V');
    `;
    document.head.appendChild(gtmScript);

    // 4. GTM noscript iframe (for users without JS)
    var noscript = document.createElement('noscript');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-WGRMW39V';
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.appendChild(noscript);
  }

  /* ------------------------------------------
     3. FAQ Accordion
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
     4. Contact Form Validation (EmailJS)
     Usage: Validates required fields, sends via EmailJS
     ------------------------------------------ */
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var isValid = true;

      // Name
      var nameField = document.getElementById('fullName');
      var nameError = document.getElementById('fullNameError');
      if (nameField.value.trim() === '') {
        nameField.classList.add('error');
        nameError.textContent = 'Name is required.';
        isValid = false;
      } else {
        nameField.classList.remove('error');
        nameError.textContent = '';
      }

      // Email
      var email = document.getElementById('email');
      var emailError = document.getElementById('emailError');
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value.trim() === '') {
        email.classList.add('error');
        emailError.textContent = 'Email is required.';
        isValid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        email.classList.add('error');
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      } else {
        email.classList.remove('error');
        emailError.textContent = '';
      }

      // Message
      var message = document.getElementById('message');
      var messageError = document.getElementById('messageError');
      if (message.value.trim() === '') {
        message.classList.add('error');
        messageError.textContent = 'Message is required.';
        isValid = false;
      } else {
        message.classList.remove('error');
        messageError.textContent = '';
      }

      // If valid, send via EmailJS
      if (isValid) {
        var submitBtn = contactForm.querySelector('.btn-submit');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        emailjs.sendForm(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          e.target
        ).then(function () {
          contactForm.reset();
          contactForm.style.display = 'none';
          document.getElementById('formSuccess').classList.add('show');
        }).catch(function () {
          alert('Something went wrong. Please try again.');
        }).finally(function () {
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
        });
      }
    });
  }

});
