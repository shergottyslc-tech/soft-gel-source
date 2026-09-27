<template>
  <section class="section hero-background">
    <!-- Dark overlay to make text readable -->
    <div class="hero-overlay"></div>
    
    <!-- Content container -->
    <div class="container hero-content">
      <img src="../assets/logo-no-bg.jpg" class="hero-logo" />
      <h1>Premium Softgel Manufacturing</h1>
      <p>Custom formulations, scalable production, and industry-leading quality control.</p>
      <a href="#contact" class="btn">Get a toke</a>
    </div>
  </section>
</template>

<style scoped>
.hero-background {
  /* Set the image as the background */
  background-image: url('../assets/gel capsule clear.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  color: white; /* Ensure text is readable over image */
  padding: 0; /* Remove default section padding so background stretches fully */
}

.hero-overlay {
  position: absolute;
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 50% opacity black overlay */
}

.hero-content {
  position: relative;
  z-index: 1; /* Places content above the overlay */
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.hero-logo {
  max-width: 200px;
  height: auto;
  margin-bottom: 2rem;
}

h1 { 
  color: white; 
  margin-bottom: 1rem; 
}

p { 
  color: #f4f5f9; 
  margin-bottom: 2rem; 
}
</style>