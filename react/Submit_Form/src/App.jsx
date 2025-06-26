import React, { useState } from 'react';
import './App.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form validation or submission logic here
    console.log(formData);
      if(feedback.length > 20){
        alert("Submitted Successfully");
      }else{
        alert("Should be greater then 20");
      }
  };



  return (
    <div className="form-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>Feedback Form</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {!formData.name && (
            <span style={{ color: 'red' }}>Name is Required</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {!formData.email && (
            <span style={{ color: 'red' }}>Email is Required</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {!formData.password && (
            <span style={{ color: 'red' }}>Password is Required</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {!formData.confirmPassword && (
            <span style={{ color: 'red' }}>confirmPassword is Required</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            name="feedback"
            id="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
          {!formData.feedback && (
            <span style={{ color: 'red' }}>feedback is Required</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
