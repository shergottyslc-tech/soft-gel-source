<script setup>
import HeroSection from './components/HeroSection.vue'
import InfoSection from './components/InfoSection.vue'
import ContactForm from './components/ContactForm.vue'
import AppFooter from './components/AppFooter.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <main>
    <NavBar />
    <HeroSection />
    <InfoSection />
    <ContactForm />
    <AppFooter />
  </main>
</template>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
  font-family: system-ui, -apple-system, sans-serif;
}
body {
  margin: 0;
  padding: 0;
}
</style>