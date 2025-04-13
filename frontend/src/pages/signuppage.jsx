import React from "react";
import { useState } from "react";
import { Link } from "react-router";

const Signuppage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user:", formData);
  };

  return (
    <div className="w-full flex bg-linear-to-t from-teal-300 via-teal-600 to-teal-500 items-center justify-center p-7 h-screen">
      <div className="flex flex-col">
        <h4 className="text-3xl font-bold text-center text-teal-50 mb-5">
          Register account here
        </h4>

        <div className="border-none rounded shadow-2xl  p-6 flex flex-col">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-[400px]"
          >
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              required
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }}
              className="bg-amber-50 py-2 rounded px-2 items-center"
            />
            <label htmlFor="name">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              required
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
              className="bg-amber-50 py-2 rounded px-2 items-center"
            />
            <label htmlFor="name">Password</label>
            <input
              type="password"
              placeholder="********"
              maxLength={15}
              name="password"
              value={formData.password}
              required
              onChange={(e) => {
                setFormData({
                  ...formData,
                  password: e.target.value,
                });
              }}
              className="bg-amber-50 py-2 rounded px-2 items-center"
            />

            <button className="px-10 py-3 border-none hover:bg-teal-400 bg-teal-950  text-teal-50 rounded hover:cursor-pointer">
              Create account
            </button>
          </form>
        </div>
        <p className="text-gray-800 text-center mt-3">
          <span className="loading loading-spinner loading-sm"></span>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signuppage;
