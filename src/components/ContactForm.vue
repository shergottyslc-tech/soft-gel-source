<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // In a real app, you would send this to your backend/API
  console.log('Form submitted:', formData.value)
  alert('Thanks for your inquiry! We will be in touch.')
  formData.value = { name: '', email: '', message: '' } // clear form
}
</script>

<template>
  <section id="contact" class="contact">
    <h2>Partner With Us</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Company Name</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="message">Project Details</label>
        <textarea id="message" v-model="formData.message" rows="5" required></textarea>
      </div>
      <button type="submit">Submit Inquiry</button>
    </form>
  </section>
</template>

<style scoped>
.contact {
  padding: 5rem 2rem;
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}
input, textarea {
  padding: 0.8rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 1rem;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>