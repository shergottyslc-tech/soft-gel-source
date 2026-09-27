<template>
  <header class="navbar">
    <div class="nav-container">
      <div class="logo">
        <router-link to="/">
          <!-- Replace with your actual logo path -->
          <!-- <img src="/placeholder-logo.png" alt="Softgel Source Logo" height="40" /> -->
        </router-link>
      </div>
      <nav class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/contact">Contact Us</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #261D1B;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #e0e0e0;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #ffffff;
  border-bottom: 2px solid #ffffff;
}
</style>