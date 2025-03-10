import React, { useState } from 'react';

const TestForm = () => {
  // Stan formularza
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Funkcja obsługująca zmiany w formularzu
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Funkcja obsługująca wysłanie formularza
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setSubmitted(true); // Pokazuje, że formularz został wysłany
  };

  return (
    <div>
      <h2>Testowy formularz</h2>
      {submitted && <p>Dziękujemy za przesłanie formularza!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Imię:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Wiek:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};

export default TestForm;
