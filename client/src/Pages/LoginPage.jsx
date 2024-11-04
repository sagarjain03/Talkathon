import React from 'react';

const LoginPage = () => {
  return (
    <div className="h-4/5 w-96 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-4 block text-sm font-medium text-black">
      <form className="space-y-4">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Login</button>
        <p className="text-center mt-4">Don&apos;t have an account? <a href="/register" className="text-blue-500 hover:text-blue-700">Sign up</a></p>
      </form>
    </div>
  );
};

export default LoginPage;
