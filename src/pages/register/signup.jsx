import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const tologin = useNavigate();

  const validateName = (name) => {
    const regex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const validatePassword = (pass) => {
    const regex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    return regex.test(pass);
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    if (!validateName(newName)) {
      setNameError("Invalid Name format");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!validateEmail(newEmail)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    if (!validatePhone(newPhone)) {
      setPhoneError("Invalid phone number format (10 digits)");
    } else {
      setPhoneError("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (!validatePassword(newPassword)) {
      setPasswordError("Invalid password");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="userpage">
      <div className="userContent">
        <h1>Register</h1>
        <div>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
          />
          {nameError && <p>{nameError}</p>}
        </div>
        <div>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          {emailError && <p>{emailError}</p>}
        </div>
        <div>
          <input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Phone"
          />
          {phoneError && <p>{phoneError}</p>}
        </div>
        <div>
          <input
            type="text"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          {passwordError && <p>{passwordError}</p>}
        </div>
        <button>submit</button>
        <button onClick={() => tologin("/login")}>Have Account</button>
      </div>
    </div>
  );
}
