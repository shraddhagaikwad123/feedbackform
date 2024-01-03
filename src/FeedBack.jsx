import React, { useState } from 'react';
import './FeedBack.css';

const FeedBack = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.name === '' || formData.email === '' || formData.message === '') {
      alert('Please fill in all entries.');
      return;
    }

    // Submission successful
    setSubmitted(true);
  };

  return (
    <div className="feedback-container" >
      {submitted ? (
        <p className="success-message">Feedback submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Feedback:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};


export default FeedBack;
