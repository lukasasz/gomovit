import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="home">
      <Hero 
        title="Gomovit Wristband" 
        subtitle="Revolutionizing Personal Health Tracking" 
        image="/images/gomovit-hero.jpg" 
      />
      
      <section className="feature-showcase">
        <h2>Advanced Health Monitoring</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <img src="/images/heart-rate.svg" alt="Heart Rate Monitoring" />
            <h3>Continuous Heart Rate Tracking</h3>
            <p>Monitor your heart rate 24/7 with our advanced sensors.</p>
          </div>
          <div className="feature-item">
            <img src="/images/sleep.svg" alt="Sleep Analysis" />
            <h3>Comprehensive Sleep Analysis</h3>
            <p>Understand your sleep patterns and improve your rest.</p>
          </div>
          <div className="feature-item">
            <img src="/images/activity.svg" alt="Activity Tracking" />
            <h3>Intelligent Activity Recognition</h3>
            <p>Automatically detect and track various types of exercises.</p>
          </div>
        </div>
      </section>

      <section className="technology-spotlight">
        <h2>Cutting-Edge Technology</h2>
        <div className="tech-showcase">
          <img src="/images/sensor-diagram.png" alt="Gomovit Sensor Technology" />
          <div className="tech-description">
            <h3>Multi-Spectrum Sensors</h3>
            <p>Our proprietary sensor array utilizes multiple light wavelengths to provide unparalleled accuracy in health metrics.</p>
            <h3>AI-Powered Insights</h3>
            <p>Advanced machine learning algorithms analyze your data to provide personalized health recommendations.</p>
          </div>
        </div>
      </section>

      <section className="user-benefits">
        <h2>Empowering Your Wellness Journey</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <h3>Personalized Health Insights</h3>
            <p>Receive tailored recommendations based on your unique health profile.</p>
          </div>
          <div className="benefit-card">
            <h3>Holistic Health View</h3>
            <p>Understand the connections between your activity, sleep, and overall well-being.</p>
          </div>
          <div className="benefit-card">
            <h3>Goal Setting and Achievement</h3>
            <p>Set personalized health goals and track your progress over time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;