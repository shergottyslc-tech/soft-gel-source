<script setup>
import HeroSection from '../components/HeroSection.vue'
import InfoSection from '../components/InfoSection.vue'
import ContactForm from '../components/ContactForm.vue'
</script>

<template>
  <main>
    <HeroSection />
    <InfoSection />

    <!-- Wrapped Contact Form -->
    <div id="quote-form">
      <ContactForm />
    </div>

  </main>
</template>