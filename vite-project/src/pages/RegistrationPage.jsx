import React, { useState } from "react";
import "../styles/RegistrationPage.css";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    userType: "Individual",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.phone) {
      alert("All fields are required!");
      return;
    }
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Registration successful!");
  };


  return (
    <main id="main-content">
    <div className="registration-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange}  />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange}  />
        <label>Phone Number:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange}  />
        <label>User Type:</label>
        <select name="userType" value={formData.userType} onChange={handleChange}>
          <option value="Individual">Individual</option>
          <option value="Organization">Organization</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
    </main>
  );
}

export default RegistrationPage;