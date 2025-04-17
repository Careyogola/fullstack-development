import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import { Link } from "react-router"

const Loginpage = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
      const response = await axios.post("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      console.log("login success:", response.data);

      // Redirect to login page on success
      navigate("/homepage");

    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='w-full flex items-center justify-center p-7 h-screen'>
        <div className='border-none rounded shadow-2xl  p-6 flex flex-col'>
            <h4 className='text-3xl font-bold text-center text-white mb-5'>Login Here</h4>
            <form  onSubmit={handleSubmit} className='flex flex-col gap-4 w-[400px]'>

                <label htmlFor='name'>Email</label>
                <input
                type='email'
                placeholder='Enter your email address'
                name='email'
                value={formData.email}
                required
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        email: e.target.value
                    })
                }}
                className='py-2 rounded px-2 items-center'
                />

                <label htmlFor='name'>Password</label>
                <input
                type='password'
                placeholder='********'
                name='password'
                maxLength={15}
                value={formData.password}
                required
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        password: e.target.value
                    })
                }}
                className='py-2 rounded px-2 items-center'
                />

                {error && (
                <div className="text-red-400 text-sm">{error}</div>
                )}
                <Link to="/forgotpassword" className="">Forgot password?</Link>

            <button
            className="px-10 py-3 border-none bg-teal-950 text-teal-50 hover:bg-teal-400 rounded hover:cursor-pointer"
            >
              {loading ? (
                <Loader />
              ) : "Login"}

            </button>
          </form>
          <p className="text-center font-normal mt-5">
            Don't have account yet.
            <span className="text-violet-200">
              <Link to="/signups"> Sign up.</Link>
            </span>
          </p>
        </div>
    </div>
  );
};

export default Loginpage;
