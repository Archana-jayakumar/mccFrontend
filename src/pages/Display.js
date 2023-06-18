import React, { useEffect, useState } from 'react';
import './Display.css';
import axios from '../api/axios'
 
const Display = () => {
  const [selectedCompany, setSelectedCompany] = useState('');

  const [reviews,setReviews]= useState([])
  const [errMsg,setErrMsg] = useState("")

  const handleFilterChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  useEffect(() => {
    const fetchBookings = async () => {
        try {
            const response = await axios.get('/reviews');
            
            setReviews(response.data)
        } catch (error) {
            if (!error?.response) {
                setErrMsg('no response from server');
            }
            else if(error.response?.status === 500){
                setErrMsg("an error occured");
            } else {
                console.log(`Error: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    fetchBookings();
}, []);

  const filteredReviews = selectedCompany
    ? reviews.filter((review) => review.company === selectedCompany)
    : reviews;    

  return (
    <div className="response-container">
      <h2 className="headings">Students Review</h2>
      <div className="filter-container">
        <label htmlFor="companyFilter">Filter by Company:</label>
        <select
          id="companyFilter"
          value={selectedCompany}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="TCS">TCS</option>
          <option value="Cognizant">Cognizant</option>
          <option value="Flipkart">Flipkart</option>
          <option value="Wipro">Wipro</option>
          
          {/* Add more options for other companies */}
        </select>
      </div>
      {filteredReviews.map((review, index) => (
        <div className="response-box" key={index}>
          <div className="response-header">
            <h3 className="name">{review.name}</h3>
            <h4 className="company">{review.company}</h4>
          </div>
          <p className="description">{review.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;