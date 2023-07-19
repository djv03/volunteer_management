import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
const roles = ['Collection', 'distribute', 'technical', 'other'];

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');

  const [isloading, setIsLoading] = useState(false);
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { name, email, phone, age, role }
    console.log(data);
    const res = await fetch(` ${process.env.NEXT_PUBLIC_HOST}/api/signup2`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(res);
    let response = await res.json();
    if (response.sucess) {
      toast.success('sucessfully registered as volunteer,we will contact you soon', {
        position: "top-left",
        autoClose: 2200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(response);
      setName('');
      setEmail('');
      setPhone('');
      setRole('');
      setAge('');
      router.push(`${process.env.NEXT_PUBLIC_HOST}/welcome`)
    }
    else {
      toast.error(`${response.fail}`, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setIsLoading(false)

  }
  return (
    <div className="  mt-12">
      <ToastContainer
        position="top-left"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h2 className="text-2xl font-bold mb-4">Be the part of India Recycles:</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border  border-gray-300 p-2 input"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            className="w-full border border-gray-300 p-2 input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
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
            className="w-full border border-gray-300 p-2 input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block font-bold mb-1">
            Email:
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="w-full border border-gray-300 p-2 input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block font-bold mb-1">
            Phone:
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="w-full border border-gray-300 p-2 input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          {isloading ? `Loading...` : `Submit`}
        </button>
      </form>
    </div>
  );
};

export default Login;
