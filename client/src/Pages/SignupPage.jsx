import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SignupPage = () => {
  return (
    <div className="h-4/5 w-96 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-4 block text-sm font-medium text-black">
      <form className="space-y-4">
        <div>
          <label htmlFor="fullname" >Full Name</label>
          <input type="text" name="fullname" id="fullname" className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="username" >Username</label>
          <input type="text" name="username" id="username" className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="password" >Password</label>
          <input type="password" name="password" id="password" className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="confirm-password" >Confirm Password</label>
          <input type="password" name="confirm-password" id="confirm-password" className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign up</button>
        <div className="mt-4">
          <p className="text-center">Or sign up with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="p-2 rounded-full bg-blue-500 text-white">
              <FaGoogle className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full bg-gray-500 text-white">
              <FaGithub className="h-6 w-6" />
            </button>
          </div>
          <p className="text-center mt-4">Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-700">Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
