import React, { useState } from 'react';

const roles = ['Collec  tion', 'distribute', 'technical', 'other'];

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    age: '',
    contact: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container mx-auto w-[50vw] mt-12">
      <h2 className="text-2xl font-bold mb-4">Be part of India Recycles</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 p-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block font-bold mb-1">
            Role:
          </label>
          <select
            id="role"
            name="role"
            className="w-full border border-gray-300 p-2"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block font-bold mb-1">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="w-full border border-gray-300 p-2"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block font-bold mb-1">
            Email/Phone:
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="w-full border border-gray-300 p-2"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
