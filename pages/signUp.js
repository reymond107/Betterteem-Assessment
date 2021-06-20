import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function SignUp() {
  return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 font-sans">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-purple-500 shadow-lg transform skew-y-6 sm:skew-y-0 sm:-rotate-50 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div className="mt-12 flex flex-col items-center">
                  <h1 className="text-4xl xl:text-3xl font-extrabold mb-8">Welcome to Betterteem</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="mx-auto max-w-xs">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        placeholder="Username"
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="password"
                        placeholder="Password"
                      />
                    <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="password"
                        placeholder="Repeat Password"
                      />
                      <button
                        className="mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      >
                        <span className="ml-3">
                          Sign Up
                        </span>
                      </button> 
                  
                  <div className="pt-6 text-base leading-6 font-thin sm:text-lg sm:leading-7">
                    <p>Already have an account?</p>
                    <p>
                      <a href="/signIn" className="text-cyan-600 hover:text-cyan-700"> Log In &rarr; </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
