import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Review.css';

function ReviewForm() {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [salary, setSalary] = useState("");
  const [review, setReview] = useState("");
  const [company, setCompany] = useState("");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log(name, branch, salary, review);
    // reset form fields
    setName("");
    setBranch("");
    setSalary("");
    setReview("");
    setCompany("");
    // Redirect to '/review' after form submission
    history.push("/review");
  };

  return (
    <div>
      <div className="fixed-taskbar">
        <nav className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Company" className="nav-link active">
                Company
              </Link>
            </li>
              <li className="nav-item">
              <a href="#" className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="review">Review Form</h1>
      <form className=" reviewform"onSubmit={handleSubmit}>
        <label className="label">
          Name:
          <input
            type="texts"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label  className="label">
          Branch:
          <input
            type="texts"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
        </label>
        <label className="label">
          Company:
          <input
            type="texts"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
        <label className="label">
          Salary Package:
          <input
            type="texts"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </label>
        <label  className="label">
          Review:
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
