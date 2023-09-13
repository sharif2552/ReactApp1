import React, { useState } from 'react';
import './App.css';
import ContactCard from './ContactCard';

function App() {
  // Define state variables to store user input and a list of contacts
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Handle state changes in the App component
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new contact object
    const newContact = {
      name: name,
      email: email,
      phone: phone,
    };
    // Append the new contact to the list of contacts
    setContacts([...contacts, newContact]);
    // Clear the form fields
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <h1>Contact App</h1>
      <ContactCard
        name={name}
        email={email}
        phone={phone}
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onPhoneChange={handlePhoneChange}
        onSubmit={handleSubmit}
      />
      {/* Render the list of contacts */}
      <div className="contact-list">
        <h2>Contact List</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <p>Name: {contact.name}</p>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
