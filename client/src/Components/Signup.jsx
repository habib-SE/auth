import React, { useState } from 'react';
import axios from 'axios';
const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5555/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status !== 200) {
        throw new Error('Signup failed');
      }
  
      setIsSubmitted(true);
      setError('');
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        {isSubmitted ? (
          <p className="text-green-600 mb-4">Signup successful! You can now log in.</p>
        ) : (
          <form onSubmit={handleSubmit}>

            {/* Username Input */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-semibold text-gray-600">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Signup Button */}
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Sign Up</button>

            {error && <p className="text-red-500 mt-2">{error}</p>}

          </form>
        )}

        {/* Already Have an Account? */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Already have an account? <a href="#" className="text-blue-500">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
