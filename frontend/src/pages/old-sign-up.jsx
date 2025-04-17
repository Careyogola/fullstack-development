import React from "react";
import { useState } from "react";
import { Link } from "react-router";
import Loader from "../components/Loader";
// import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Redirect, Fragment } from "react-router-dom";

const Signuppage = () => {

  const [authenticated, setAuthenticated] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const useSignup = (formData) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
  
    const signup = async () => {
      setLoading(true);
      try {
        const response = await axios.post("/api/auth/signup", {
          email: formData.email,
          username: formData.name,
          password: formData.password,
        });
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    return { signup, loading, error, data };
  };

  const { signup, loading } = useSignup(formData);

const handleSubmit = (e) => {
  e.preventDefault();
  signup();
};
  

  // const handleClick = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  // }
  return (
    <Fragment>
    {authenticated && <Redirect to="/login" /> }
    <div className="w-full flex  items-center justify-center p-7 h-screen">
        <div className='border-none rounded shadow-2xl  p-6 flex flex-col'>
            <h4 className='text-3xl font-bold  text-center text-white mb-7'>Register account here</h4>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-[400px]"
          >
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
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
              className="py-2 rounded px-2 items-center"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
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
              className="py-2 rounded px-2 items-center"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
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
              className="py-2 rounded px-2 items-center"
            />

            <button
            className="px-10 py-3 border-none hover:bg-teal-400 bg-teal-950  text-teal-50 rounded hover:cursor-pointer"
            type="submit"
            >
              {loading ? (
                <Loader />
              ) : (
                "Create account"
              )}
            </button>
          </form>
        </div>
        </div>
        </Fragment>

  )}

  export default Signuppage;

