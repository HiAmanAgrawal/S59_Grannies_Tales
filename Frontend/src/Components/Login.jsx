import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://s59-grannies-tales-9nzx.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const userData = await response.json();
        document.cookie = `username=${userData._id}`;
        document.cookie = `accessToken=${userData.accessToken}; path=/;`;
        setLoggedIn(true);
        console.log('Login successful!');
        document.getElementById("my_modal_3").close()
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  const handleLogout = () => {
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setLoggedIn(false);
    console.log('Logged out!');
  };

  return (
    <>
    {loggedIn ? (
      <button type="button" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200" onClick={handleLogout}>
        Logout
      </button>
    ) : (
      <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200" onClick={() => document.getElementById("my_modal_3").showModal()}>
        Login
      </button>
    )}
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>
              ✕
            </button>
          <form onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
            </div>
            <div className="flex justify-around mt-6">
              <p>
                Not registered?{' '}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>{' '}
              </p>
              <button type='submit' className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
    </>
  );
}

export default Login;
