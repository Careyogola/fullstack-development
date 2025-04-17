import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Loader from "../components/Loader";
import axios from "axios";
import { Link } from "react-router"
const Signuppage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/auth/signup", {
        email: formData.email,
        username: formData.name,
        password: formData.password,
      });

      console.log("Signup success:", response.data);

      // Redirect to login page on success
      navigate("/login");

    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex items-center flex-col justify-center p-7 h-screen">
      <div className="border-none rounded shadow-2xl p-6 flex flex-col bg-gray-900">
        <h4 className="text-3xl font-bold text-center text-white mb-7">
          Register account here
        </h4>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[400px]"
        >
          <label htmlFor="name" className="text-white">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            required
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="py-2 rounded px-2"
          />

          <label htmlFor="email" className="text-white">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="py-2 rounded px-2"
          />

          <label htmlFor="password" className="text-white">Password</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            maxLength={15}
            name="password"
            value={formData.password}
            required
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="py-2 rounded px-2"
          />

          {error && (
            <div className="text-red-400 text-sm">{error}</div>
          )}

          <button
            className="px-10 py-3 border-none hover:bg-teal-400 bg-teal-950 text-teal-50 rounded cursor-pointer"
            type="submit"
          >
            {loading ? <Loader /> : "Create account"}
          </button>
        </form>
      </div>
      <p className="text-center font-normal mt-5">
            Already have an account .
            <span className="text-violet-200">
              <Link to="/login"> Login.</Link>
            </span>
          </p>
    </div>
  );
};

export default Signuppage;
