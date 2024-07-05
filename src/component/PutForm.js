import React, { useState } from 'react';

const PutForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Form updated successfully!');
    console.log('Form Data:',formData);
    const id = parseInt(formData.id,10);
    if(isNaN(id)|| id< 1 || id > 500){
        console.error('Invalid ID! It should be between 1 and 100.');
        return;
    }
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      });
      console.log('Response status:', response.status);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log('PUT response:', data);
      } else {
        const text = await response.text();
        console.error('Unexpected non-JSON response:', text);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="ID"
        className="input"
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="input"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="input"
      />
      <button type="submit" className="button">Update</button>
    </form>
  );
};

export default PutForm;