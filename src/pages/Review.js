import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios'
import './Review.css';

function ReviewForm() {
  const [studentName, setStudentName] = useState("");
  const [branch, setBranch] = useState("");
 // const [salary, setSalary] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [errmsg,setErrmsg] =useState("")

  const history = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const Review = {studentName,branch,reviewText,companyName}
        const response=await axios.post('/reviews',Review)
        // history.push("/review");
        console.log(response.data)
        setErrmsg("")
    }catch(error){
      setErrmsg("error occured")
    }
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
        <p>{errmsg}</p>
        <label className="label">
          Name:
          <input
            type="texts"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
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
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        {/* <label className="label">
          Salary Package:
          <input
            type="texts"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </label> */}
        <label  className="label">
          Review:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
