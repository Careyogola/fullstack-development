import React from "react";

const Crateaccountpage = () => {
  return (
    <div className="w-full h-screen dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-100 font-bold">Welcome, create account.</p>
        <div className="shadow-2xl rounded-2xl flex flex-col">
          <form>
            <label htmlFor="Name">Name</label>
            <input type="name" placeholder="Enter your name" />

            <label htmlFor="Email">Email</label>
            <input
              type="password"
              required
              placeholder="Enter your email adress"
            />

            <label htmlFor="Password">Password</label>
            <input type="password" required placeholder="*********" />

            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Crateaccountpage;
