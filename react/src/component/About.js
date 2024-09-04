import React from 'react';

const About = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    headerTitle: {
      fontSize: '36px',
      color: '#333',
    },
    headerSubtitle: {
      fontSize: '18px',
      color: '#666',
    },
    section: {
      marginBottom: '20px',
    },
    sectionTitle: {
      fontSize: '28px',
      color: '#444',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '16px',
      color: '#555',
      lineHeight: '1.6',
    },
    list: {
      paddingLeft: '20px',
    },
    listItem: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '8px',
    },
    contactLink: {
      color: '#007BFF',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>About Let's Eat</h1>
        <p style={styles.headerSubtitle}>Your go-to destination for delicious meals!</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={styles.paragraph}>
          Let's Eat was founded with the mission to bring together food lovers and provide them with an exceptional dining experience. Whether you're in the mood for a cozy dinner at home or want to explore new cuisines, we have something for everyone.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Values</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Quality:</strong> We source the best ingredients to ensure every meal is delicious and fresh.</li>
          <li style={styles.listItem}><strong>Community:</strong> We believe food brings people together, and we're proud to be a part of your community.</li>
          <li style={styles.listItem}><strong>Innovation:</strong> We're constantly experimenting with new recipes and ideas to keep things exciting.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Team</h2>
        <p style={styles.paragraph}>
          Our team is made up of passionate chefs, dedicated customer service representatives, and food enthusiasts who all share a love for great food. We're here to make your dining experience unforgettable.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.paragraph}>
          Have questions or feedback? We'd love to hear from you! Reach out to us at <a href="mailto:info@letseat.com" style={styles.contactLink}>ymahaky@gmail.com</a> or call us at 9817748915.
        </p>
      </section>
    </div>
  );
};

export default About;
