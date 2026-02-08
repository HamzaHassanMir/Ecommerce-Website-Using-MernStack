import React from "react";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    localStorage.setItem("token", data.token);
    alert("Login successful");
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="border p-6 w-80">
        <h2 className="text-xl mb-4">Login</h2>

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

        <button className="bg-blue-500 text-white px-4 py-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
