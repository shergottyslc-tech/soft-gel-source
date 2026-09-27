<template>
  <section class="section">
    <div class="container">
      <h2>Let's Talk about Softgels</h2>
      <p class="intro-text">
        Softgels are completely sealed units produced using a rotary die process. 
        They are ideal for semi-solid or liquid fill materials, and highly suitable 
        for the delivery of oil-based formulations.
      </p>
      
      <div class="flex-grid">
        <!-- Card 1: Features -->
        <div class="flex-col card">
          <div class="icon">💊</div>
          <h3>Features of Encapsulation</h3>
          <ul class="feature-list">
            <li>Ease of Swallowing</li>
            <li>Enhanced Bioavailability</li>
            <li>Protection from tampering</li>
            <li>Long Shelf Life</li>
            <li>Visually Appealing</li>
            <li>High dosage uniformity</li>
          </ul>
        </div>
        
        <!-- Card 2: Shipping -->
        <div class="flex-col card">
          <div class="icon">🚚</div>
          <h3>Free Ground Shipping</h3>
          <p>
            Nobody likes to pay for shipping. Unless you need your order expedited, 
            FREE ground shipping from our manufacturing facility in Portland, Oregon 
            to anywhere in the other 48 contiguous states is included with your order!
          </p>
        </div>
        
        <!-- Card 3: Guarantee -->
        <div class="flex-col card">
          <div class="icon">🤝</div>
          <h3>Your Satisfaction Guaranteed</h3>
          <p>
            You'll be satisfied whether you like it or not. We'll send you all the 
            softgel samples you want until you find something that works perfectly 
            for you.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Constrains the top paragraph width and centers it */
.intro-text {
  max-width: 700px;
  margin: 1rem auto 3rem auto;
  font-size: 1.1rem;
  line-height: 1.6;
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-list {
  text-align: left;
  margin: 1rem auto;
  max-width: max-content;
  padding-left: 1.5rem;
}

.feature-list li {
  margin-bottom: 0.5rem;
}
</style>