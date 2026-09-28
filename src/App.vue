<script setup>
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-layout">
    <NavBar />
    
    <main class="main-content">
      <router-view />
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  /* Offsets view content so it doesn't sit under the fixed navbar */
  padding-top: 70px; 
  flex: 1; /* Pushes the footer to the bottom of the screen */
}
</style>