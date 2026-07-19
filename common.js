/**
 * common.js � Shared Navbar & Footer
 * All pages load this file; it auto-injects the navbar and footer.
 *
 * Required in each HTML page:
 *   1. <div id="site-navbar"></div>  � at the very top of <body>
 *   2. <div id="site-footer"></div>  � just before </body>
 *   3. <script src="/common.js"></script>  (adjust path as needed)
 */

/* ---------------------------------------------
   1. INJECT SHARED CSS (navbar + footer styles)
   --------------------------------------------- */
(function injectCommonStyles() {
  const css = `
    /* -- Sticky Glass Navbar -- */
    .navbar {
      position: sticky;
      top: 0;
      background: var(--glass-bg, rgba(255,255,255,0.85));
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--glass-border, rgba(226,232,240,0.8));
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      z-index: 1000;
      padding: 1rem 0;
      transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-family: var(--font-heading, 'Space Grotesk', sans-serif);
      font-weight: 700;
      font-size: 1.5rem;
      color: var(--navy-dark, #030f26);
      text-decoration: none;
    }
    .nav-links-wrapper {
      display: flex;
      gap: 1.75rem;
      align-items: center;
    }
    .nav-dropdown { position: relative; }
    .nav-dropdown-btn {
      font-family: inherit;
      font-weight: 500;
      font-size: 0.95rem;
      color: var(--text-medium, #475569);
      background: none;
      border: none;
      padding: 0.5rem 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.35rem;
      transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    .nav-dropdown-btn:hover { color: var(--primary, #0f62fe); }
    .dropdown-arrow { font-size: 0.7rem; transition: transform 0.2s ease; }
    .nav-dropdown-content {
      position: absolute;
      top: calc(100% + 12px);
      left: 50%;
      transform: translateX(-50%);
      background: var(--bg-white, #ffffff);
      min-width: 210px;
      border-radius: 4px;
      border: 1px solid var(--border-color, #e2e8f0);
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      padding: 0.25rem 0;
      opacity: 0;
      visibility: hidden;
      z-index: 1000;
      display: flex;
      flex-direction: column;
    }
    .nav-dropdown-content a {
      display: block;
      padding: 0.5rem 1.1rem;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-medium, #475569);
      text-align: left;
      text-decoration: none;
    }
    .nav-dropdown-content a:hover {
      background-color: var(--primary-light, #eff4ff);
      color: var(--primary, #0f62fe);
    }
    @media (min-width: 769px) {
      .nav-dropdown:hover .nav-dropdown-content {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(0);
      }
      .nav-dropdown:hover .dropdown-arrow { transform: rotate(180deg); }
    }
    .nav-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: var(--navy-dark, #030f26);
      cursor: pointer;
    }

    /* -- Footer -- */
    .site-footer {
      background-color: #fafafa;
      color: var(--text-medium, #475569);
      padding: 5rem 0 2rem;
      border-top: 1px solid var(--border-color, #e2e8f0);
    }
    .site-footer * { transition: none !important; animation: none !important; }
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1.5rem;
      margin-bottom: 4rem;
    }
    .footer-col h4 {
      color: var(--navy-dark, #030f26);
      font-size: 1rem;
      margin-bottom: 1rem;
      font-family: var(--font-heading, 'Space Grotesk', sans-serif);
      letter-spacing: 0.5px;
    }
    .footer-col ul { list-style: none; padding: 0; margin: 0; }
    .footer-col ul li { margin-bottom: 0.4rem; }
    .footer-col a {
      font-size: 0.875rem;
      color: var(--text-medium, #475569);
      text-decoration: none;
      line-height: 1.8;
    }
    .footer-col a:hover { color: var(--primary, #0f62fe); }
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      border-top: 1px solid var(--border-color, #e2e8f0);
      font-size: 0.85rem;
      color: var(--text-light, #94a3b8);
    }
    .footer-bottom-links { display: flex; gap: 1.5rem; }
    .footer-bottom-links a { color: var(--text-medium, #475569); text-decoration: none; }
    .footer-bottom-links a:hover { color: var(--primary, #0f62fe); }
    .back-to-top {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--primary, #0f62fe);
      text-decoration: none;
    }

    /* -- Responsive: Mobile Nav -- */
    @media (max-width: 768px) {
      .nav-toggle { display: block; }
      .nav-links-wrapper {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        flex-direction: column;
        padding: 1.5rem;
        border-bottom: 1px solid var(--border-color, #e2e8f0);
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        display: none;
        align-items: flex-start;
        gap: 0;
      }
      .nav-links-wrapper.active { display: flex; }
      .nav-dropdown { width: 100%; }
      .nav-dropdown-btn {
        width: 100%;
        justify-content: space-between;
        padding: 0.75rem 0;
        font-size: 1.05rem;
      }
      .nav-dropdown-content {
        position: static;
        transform: none;
        opacity: 1;
        visibility: visible;
        display: none;
        box-shadow: none;
        border: none;
        border-left: 2px solid var(--primary-light, #eff4ff);
        padding-left: 1rem;
        margin-top: 0.25rem;
        background: none;
        min-width: unset;
      }
      .nav-dropdown.active .nav-dropdown-content { display: flex; }
      .nav-dropdown.active .dropdown-arrow { transform: rotate(180deg); }
      .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
      .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
    }
    @media (max-width: 480px) {
      .footer-grid { grid-template-columns: 1fr; }
      .footer-bottom-links { flex-wrap: wrap; justify-content: center; gap: 0.75rem; }
    }
  `;
  const style = document.createElement('style');
  style.id = 'common-styles';
  style.textContent = css;
  document.head.appendChild(style);
})();


/* ---------------------------------------------
   2. NAVBAR HTML
   --------------------------------------------- */
const NAVBAR_HTML = `
<nav class="navbar">
  <div class="container nav-container">
    <a href="/" class="nav-logo">
      <img src="https://jeecounselling.com/logo.png" alt="JEE Counselling Logo" width="40" height="40">
      JEE Counselling
    </a>

    <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
      <i class="fas fa-bars"></i>
    </button>

    <div class="nav-links-wrapper">
      <!-- JEE Main -->
      <div class="nav-dropdown">
        <button class="nav-dropdown-btn" aria-haspopup="true" aria-expanded="false">
          JEE Main <i class="fas fa-chevron-down dropdown-arrow"></i>
        </button>
        <div class="nav-dropdown-content">
          <a href="/jee-main">JEE Main Exam</a>
          <a href="/jee-main/syllabus">JEE Main Syllabus</a>
          <a href="/jee-main/eligibility-criteria">JEE Main Eligibility</a>
          <a href="/jee-main/application-form">JEE Main Application</a>
          <a href="/jee-main/registration">JEE Main Registration</a>
          <a href="/jee-main/exam-pattern">JEE Main Exam Pattern</a>
          <a href="/jee-main/cutoff">JEE Main Cutoff</a>
        </div>
      </div>

      <!-- JEE Advanced -->
      <div class="nav-dropdown">
        <button class="nav-dropdown-btn" aria-haspopup="true" aria-expanded="false">
          JEE Advanced <i class="fas fa-chevron-down dropdown-arrow"></i>
        </button>
        <div class="nav-dropdown-content">
          <a href="/jee-advanced">JEE Advanced Exam</a>
          <a href="/jee-advanced/syllabus">JEE Advanced Syllabus</a>
          <a href="/jee-advanced/eligibility-criteria">JEE Advanced Eligibility</a>
          <a href="/jee-advanced/application-form">JEE Advanced Application</a>
          <a href="/jee-advanced/registration">JEE Advanced Registration</a>
          <a href="/jee-advanced/exam-pattern">JEE Advanced Exam Pattern</a>
          <a href="/jee-advanced/cutoff">JEE Advanced Cutoff</a>
        </div>
      </div>

      <!-- Counselling -->
      <div class="nav-dropdown">
        <button class="nav-dropdown-btn" aria-haspopup="true" aria-expanded="false">
          Counselling <i class="fas fa-chevron-down dropdown-arrow"></i>
        </button>
        <div class="nav-dropdown-content">
          <a href="/josaa-counselling">JoSAA Counselling</a>
          <a href="/josaa-seat-allotment">JoSAA Seat Allotment</a>
          <a href="/josaa-seat-matrix">JoSAA Seat Matrix</a>
          <a href="/josaa-counselling-schedule">JoSAA Counselling Schedule</a>
          <a href="/csab-counselling">CSAB Counselling</a>
          <a href="/dasa-counselling">DASA Counselling</a>
        </div>
      </div>

      <!-- Predictors -->
      <div class="nav-dropdown">
        <button class="nav-dropdown-btn" aria-haspopup="true" aria-expanded="false">
          Predictors <i class="fas fa-chevron-down dropdown-arrow"></i>
        </button>
        <div class="nav-dropdown-content">
          <a href="/college-predictor">College Predictor</a>
          <a href="/jee-main-college-predictor">Jee Main College Predictor</a>
          <a href="/jee-main-rank-predictor">Jee Main Rank Predictor</a>
          <a href="/jee-main-percentile-predictor">Jee Main Percentile Predictor</a>
          <a href="/jee-advanced-college-predictor">Jee Advanced College Predictor</a>
          <a href="/jee-advanced-rank-predictor">Jee Advanced Rank Predictor</a>
        </div>
      </div>

      <!-- Resources -->
      <div class="nav-dropdown">
        <button class="nav-dropdown-btn" aria-haspopup="true" aria-expanded="false">
          Resources <i class="fas fa-chevron-down dropdown-arrow"></i>
        </button>
        <div class="nav-dropdown-content">
          <a href="/updates">News &amp; Updates</a>
          <a href="/colleges">Participating Colleges</a>
          <a href="/faqs">FAQs</a>
        </div>
      </div>
    </div>
  </div>
</nav>
`;


/* ---------------------------------------------
   3. FOOTER HTML
   --------------------------------------------- */
const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-brand-row"
      style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:2rem;border-bottom:1px solid var(--border-color,#e2e8f0);padding-bottom:2.5rem;margin-bottom:3rem;">
      <div style="max-width:450px;">
        <a href="/" class="nav-logo"
          style="color:var(--navy-dark,#030f26);font-size:1.5rem;margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem;">
          <img src="https://jeecounselling.com/logo.png" alt="JEE Counselling Logo" width="32" height="32">
          JEE Counselling
        </a>
        <p style="color:var(--text-medium,#475569);font-size:0.9rem;line-height:1.6;">Our free seat
          predictors help engineering aspirants secure target admission possibilities with cutting-edge
          allocation algorithms.</p>
      </div>
      <div style="display:flex;align-items:center;">
        <a href="https://whatsapp.com/channel/0029VbDlNBu6LwHdql1GNU0G" target="_blank" rel="noopener"
          style="color:white;background:#057568;width:196px;height:40px;border-radius:20px;display:inline-flex;align-items:center;justify-content:center;font-size:0.95rem;font-weight:600;gap:0.5rem;text-decoration:none;">
          <i class="fab fa-whatsapp" style="font-size:1.25rem;"></i> Join Channel
        </a>
      </div>
    </div>

    <div class="footer-grid">
      <div class="footer-col">
        <h4>JEE Main</h4>
        <ul>
          <li><a href="/jee-main">JEE Main Exam</a></li>
          <li><a href="/jee-main/syllabus">JEE Main Syllabus</a></li>
          <li><a href="/jee-main/eligibility-criteria">JEE Main Eligibility</a></li>
          <li><a href="/jee-main/reservation">JEE Main Reservation</a></li>
          <li><a href="/jee-main/application-form">JEE Main Application</a></li>
          <li><a href="/jee-main/registration">JEE Main Registration</a></li>
          <li><a href="/jee-main/exam-dates">JEE Main Exam Date</a></li>
          <li><a href="/jee-main/admit-card">JEE Main Admit Card</a></li>
          <li><a href="/jee-main/result">JEE Main Result</a></li>
          <li><a href="/jee-main/exam-pattern">JEE Main Exam Pattern</a></li>
          <li><a href="/jee-main/session-2">JEE Main Session 2</a></li>
          <li><a href="/jee-main/cutoff">JEE Main Cutoff</a></li>
          <li><a href="/jee-main/answer-key">JEE Main Answer Key</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>JEE Advanced</h4>
        <ul>
          <li><a href="/jee-advanced">JEE Advanced Exam</a></li>
          <li><a href="/jee-advanced/syllabus">JEE Advanced Syllabus</a></li>
          <li><a href="/jee-advanced/eligibility-criteria">JEE Advanced Eligibility</a></li>
          <li><a href="/jee-advanced/reservation">JEE Advanced Reservation</a></li>
          <li><a href="/jee-advanced/application-form">JEE Advanced Application</a></li>
          <li><a href="/jee-advanced/registration">JEE Advanced Registration</a></li>
          <li><a href="/jee-advanced/exam-dates">JEE Advanced Exam Date</a></li>
          <li><a href="/jee-advanced/admit-card">JEE Advanced Admit Card</a></li>
          <li><a href="/jee-advanced/result">JEE Advanced Result</a></li>
          <li><a href="/jee-advanced/exam-pattern">JEE Advanced Exam Pattern</a></li>
          <li><a href="/jee-advanced/cutoff">JEE Advanced Cutoff</a></li>
          <li><a href="/jee-advanced/answer-key">JEE Advanced Answer Key</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Counselling</h4>
        <ul>
          <li><a href="/josaa-counselling">JoSAA Counselling</a></li>
          <li><a href="/josaa-seat-allotment">JoSAA Seat Allotment</a></li>
          <li><a href="/josaa-seat-matrix">JoSAA Seat Matrix</a></li>
          <li><a href="/josaa-counselling-schedule">JoSAA Counselling Schedule</a></li>
          <li><a href="/csab-counselling">CSAB Counselling</a></li>
          <li><a href="/dasa-counselling">DASA Counselling</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Predictors</h4>
        <ul>
          <li><a href="/college-predictor">College Predictor</a></li>
          <li><a href="/jee-main-college-predictor">Jee Main College Predictor</a></li>
          <li><a href="/jee-main-rank-predictor">Jee Main Rank Predictor</a></li>
          <li><a href="/jee-main-percentile-predictor">Jee Main Percentile Predictor</a></li>
          <li><a href="/jee-advanced-college-predictor">Jee Advanced College Predictor</a></li>
          <li><a href="/jee-advanced-rank-predictor">Jee Advanced Rank Predictor</a></li>
          <li><a href="/csab-college-predictor">CSAB College Predictor</a></li>
          <li><a href="/dasa-college-predictor">DASA College Predictor</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>More Resources</h4>
        <ul>
          <li><a href="/updates">News &amp; Updates</a></li>
          <li><a href="/colleges">Participating Colleges</a></li>
          <li><a href="/faqs">FAQs</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; <span id="currentYear"></span> JEE Counselling. All Rights Reserved.</p>
      <div class="footer-bottom-links">
        <a href="/about">About Us</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms &amp; Conditions</a>
        <a href="/contact">Contact Us</a>
        <a href="/disclaimer">Disclaimer</a>
        <a href="/sitemap.xml">Sitemap</a>
      </div>
      <a href="#" class="back-to-top">Back to Top <i class="fas fa-arrow-up"></i></a>
    </div>
  </div>
</footer>
`;


/* ---------------------------------------------
   4. INJECT NAVBAR
   --------------------------------------------- */
function initNavbar() {
  const slot = document.getElementById('site-navbar');
  if (!slot) return;
  slot.outerHTML = NAVBAR_HTML;

  const navToggle = document.querySelector('.nav-toggle');
  const navLinksWrapper = document.querySelector('.nav-links-wrapper');
  if (!navToggle || !navLinksWrapper) return;

  navToggle.addEventListener('click', () => {
    const isExpanded = navLinksWrapper.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars', !isExpanded);
    icon.classList.toggle('fa-times', isExpanded);
    navToggle.setAttribute('aria-expanded', String(isExpanded));
    if (!isExpanded) {
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('active'));
    }
  });

  document.querySelectorAll('.nav-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        const parent = btn.parentElement;
        document.querySelectorAll('.nav-dropdown').forEach(d => {
          if (d !== parent) d.classList.remove('active');
        });
        parent.classList.toggle('active');
      }
    });
  });

  navLinksWrapper.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinksWrapper.classList.remove('active');
      const icon = navToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      navToggle.setAttribute('aria-expanded', 'false');
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('active'));
    });
  });
}


/* ---------------------------------------------
   5. INJECT FOOTER
   --------------------------------------------- */
function initFooter() {
  const slot = document.getElementById('site-footer');
  if (!slot) return;
  slot.outerHTML = FOOTER_HTML;

  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}


/* ---------------------------------------------
   6. AUTO-INIT
   --------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFooter();
});
