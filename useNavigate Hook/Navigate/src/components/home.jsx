
import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center text-center px-5">

      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Welcome to My Website!
      </h1>

      <p className="text-gray-600 text-lg mb-6">
        Discover something amazing with us.
      </p>

      <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700">
        Get Started
      </button>

    </div>
  )
}

export default Home
