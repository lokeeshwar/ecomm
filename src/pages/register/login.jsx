import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './register.css'


export default function Login() {
  const [username, setUsername] = useState();
  const [userpassword, setUserpassword] = useState();

  const tosignup = useNavigate()

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setUsername(newName);
  };

  const handlePasswordChange = (e) => {
    const newPass = e.target.value;
    setUserpassword(newPass);

  };

  return (
    <div className="userpage">
      <div className="userContent">
      <h1>Login</h1>
      <div>
        <input type="text" value={username} onChange={handleNameChange} placeholder="Name"/>
      </div>
      <div>
        <input type="text" value={userpassword} onChange={handlePasswordChange} placeholder="Password"/>
      </div>
      <button>Submit</button>
      <button onClick={() =>tosignup('/signup')}>Need to Register</button>
      </div>
    </div>
  );
}
