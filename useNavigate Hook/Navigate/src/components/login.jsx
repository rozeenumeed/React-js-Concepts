
import React from 'react'

const Login = (Props) => {
  return (
    <div className="min-h-screen bg-orange-50 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl shadow-lg w-80">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-3 rounded-lg mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border p-3 rounded-lg mb-5 outline-none"
        />

        <button onClick={Props.function} className="w-full bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-700">
          Login
        </button>

        <p className="text-center text-gray-500 mt-4 text-sm">
          Don't have an account? Sign Up
        </p>

      </div>

    </div>
  )
}

export default Login
