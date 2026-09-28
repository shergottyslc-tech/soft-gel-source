<template>
  <div class="about-container">
    <header class="hero-section">
      <h1>Helping You Feel Good</h1>
      <p class="subtitle">Based in Portland, Oregon. Made in the USA.</p>
    </header>
    
    <div class="content-section">
      <h2>Let's Talk About Softgels</h2>
      <p>
        Softgels are often considered easier to use and swallow than other forms of dry pressed pills or capsules. They are ideal for semi-solid or liquid fill materials, and are highly suitable for the delivery of oil-based formulations.
      </p>
      <p>
        Softgels are completely sealed units that are produced using a rotary die process. Softgel shells are produced, filled with the selected fill material, and then sealed—all in a single process carried out in our production clean room.
      </p>
    </div>

    <div class="content-section features-section">
      <h2>Features of Softgel Encapsulation</h2>
      <div class="features-grid">
        <div class="feature-card">💧 Ease of Swallowing</div>
        <div class="feature-card">⚡ Enhanced Bioavailability</div>
        <div class="feature-card">🔒 Protection from Tampering</div>
        <div class="feature-card">⏳ Long Shelf Life</div>
        <div class="feature-card">✨ Visually Appealing</div>
        <div class="feature-card">⚖️ High Dosage Uniformity</div>
      </div>
    </div>

    <div class="content-section team-section">
      <img src="@/assets/brown-coat-v2.webp" alt="Production Team Expert" class="team-avatar" />
      <div class="team-info">
        <h3>Meet Our Expert Production Team</h3>
        <p>
          With years of specialized experience, our dedicated team, led by our lead encapsulation expert (pictured), ensures every custom soft gel formulation meets the highest quality and safety standards. Their technical precision on the production floor is the heart of Soft Gel Source.
        </p>
      </div>
    </div>

   <div class="content-section custom-section">
      <h2>We Manufacture Custom Softgels For You!</h2>
      <p>
        There are a number of standard softgel sizes and nearly infinite possibilities for softgel filling material. We can manufacture the size you want, filled with just what you want, in the quantities you need. 
      </p>
      <RouterLink to="/#quote-form" class="cta-button">Request a Quote</RouterLink>
    </div>

    <div class="perks-section">
      <div class="perk">
        <h3>🚚 Free Ground Shipping</h3>
        <p>
          Nobody likes to pay for shipping. Unless you need your order shipping expedited, FREE ground shipping from our manufacturing facility in Portland, Oregon USA to anywhere in the other 48 contiguous states is included with your custom softgel order!
        </p>
      </div>
      
      <div class="perk">
        <h3>🤝 Your Satisfaction Guaranteed</h3>
        <p>
          You'll be satisfied whether you like it or not. We'll send you all the softgel samples you want until you find something that works for you.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
  color: #333;
  background-color: #ffffff;
}

.hero-section {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eaeaea;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1.2rem;
  font-weight: 500;
}

h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.feature-card {
  background: #f9fafb;
  padding: 1.2rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-weight: 600;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

/* Team Section */
.team-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

@media (min-width: 768px) {
  .team-section {
    flex-direction: row;
    align-items: flex-start;
  }
}

.team-avatar {
  width: 100%;
  max-width: 280px;
  height: 280px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  flex-shrink: 0;
}

.team-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.team-info h3 {
  margin-bottom: 0.75rem;
  color: #2c3e50;
  font-size: 1.4rem;
}

.team-info p {
  margin-bottom: 0;
  font-size: 1.05rem;
  color: #555;
}

/* Custom Manufacturing Section */
.custom-section {
  text-align: center;
}

.cta-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 20px;
  margin-top: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
  text-decoration: none; /* Prevents link underlines */
  display: inline-block; /* Ensures proper button sizing for links */
}

.cta-button:hover {
  background-color: #3aa876;
}

/* Perks Section */
.perks-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eaeaea;
}

@media (min-width: 768px) {
  .perks-section {
    grid-template-columns: 1fr 1fr;
  }
}

.perk h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.perk p {
  color: #555;
  font-size: 1rem;
}
</style>
