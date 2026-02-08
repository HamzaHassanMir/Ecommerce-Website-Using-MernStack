import React from 'react'
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Registered successfully");
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="border p-6 w-80">
        <h2 className="text-xl mb-4">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="border w-full p-2 mb-3"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-3"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-green-600 text-white px-4 py-2 w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

