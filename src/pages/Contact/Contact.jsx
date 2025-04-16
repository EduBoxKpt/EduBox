// ContactUs.js
import axios from 'axios';
import React, { useState } from 'react';
import './Contact.css';

const baseUrl = process.env.REACT_APP_BASE_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/contact`, formData);
      setFormStatus(response.data); // Expecting plain text from backend
      setFormData({ name: '', email: '', message: '', subject: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setFormStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Have any questions or feedback? We'd love to hear from you! Fill out the form below, and our team
        will respond as soon as possible.
      </p>

      {formStatus && <p className="form-status">{formStatus}</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: eduboxkpt@gmail.com</p>
        <p>Phone: +91 8310846925</p>
        <p>Address: Mangaluru, Karnataka, India</p>
      </div>
    </div>
  );
};

export default Contact;
