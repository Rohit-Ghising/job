import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username);
  return;

  <div className="h-[90vh]">
    <form
      onSubmit={handleSubmit}
      className="max-w-sm w-full border shadow-md p-4"
    >
      <div>
        <label htmlFor="username">Username</label>

        <input type="text" name="username" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="bg-teal-500 text-white p-2 rounded-md">Login</button>
    </form>
  </div>;
};

export default LoginPage;
