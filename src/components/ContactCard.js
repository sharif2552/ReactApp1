import React from 'react';

const ContactCard = ({ name, email, phone, onNameChange, onEmailChange, onPhoneChange, onSubmit }) => {
  return (
    <div className="contact-card">
      <h2>Contact Information</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          required
        />
        <br />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={onPhoneChange}
          required
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactCard;
