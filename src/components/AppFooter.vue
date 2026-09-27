<template>
  <footer class="footer">
    <div class="container footer-content">
      
      <!-- Left Column: Explore Links -->
      <div class="footer-links">
        <h4>Explore</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Glossary of Softgel Terms</a></li>
          <li><a href="#">Shipping & Returns</a></li>
          <li><a href="#">Customer Service</a></li>
        </ul>
      </div>

      <!-- Center Column: Logo -->
      <div class="footer-logo">
        <!-- Replace with your actual logo file path just like the Hero image -->
        <img src="../assets/logo-no-bg.jpg" alt="Softgel Source Logo" />
      </div>

      <!-- Right Column: Contact & Legal -->
      <div class="footer-contact">
        <h4>Connect</h4>
        <ul>
          <li><a href="#contact">Contact Us</a></li>
          <li>Phone: <a href="tel:503-438-0041">503-438-0041</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Legal Notices</a></li>
        </ul>
      </div>

    </div>
    
    <!-- Bottom Copyright Row -->
    <div class="footer-bottom">
      <div class="container">
        <p>Copyright &copy; 2026 Softgel Source LLC | Powered by Softgel Source LLC</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #261D1B; /* Custom dark background */
  color: #ffffff; /* Sets default text color to white */
  padding: 4rem 2rem 1rem;
  border-top: 1px solid #3a2e2c; /* Slight contrast border */
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  text-align: center;
}

.footer h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #ffffff;
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer li {
  margin-bottom: 0.5rem;
}

.footer a {
  text-decoration: none;
  color: #e0e0e0; /* Off-white for links so they are readable */
  transition: color 0.2s ease;
}

.footer a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.footer-logo img {
  max-width: 180px;
  height: auto;
}

.footer-bottom {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #3a2e2c;
  text-align: center;
  font-size: 0.85rem;
}

/* Explicitly target paragraphs in the footer to ensure they are white */
.footer p {
  color: #ffffff;
  opacity: 0.9;
}

/* Tablet & Desktop Layout */
@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .footer-links {
    flex: 1;
    order: 1;
    text-align: left;
  }
  
  .footer-logo {
    flex: 1;
    order: 2;
    display: flex;
    justify-content: center;
  }
  
  .footer-contact {
    flex: 1;
    order: 3;
    text-align: right;
  }
}
</style>