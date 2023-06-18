import React, { useState } from 'react';
import CompanyData from './Details.json';
import './Company.css';
import { Link } from 'react-router-dom';
import View from './view';

const Company = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleViewDetails = (title) => {
    const company = CompanyData.find((details) =>
      details.title === title
    );
    if (company) {
      setData([company]);
    }
  };

  return (
    <div className='body'>
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
      {!data.length && (
        <form className='top'>
          <center>
            <h1>
              <br />
              <br />
              SEARCH COMPANY DETAILS
              <br />
            </h1>
            <input
              size='50'
              type='text'
              className='search'
              placeholder='search'
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <br />
            <br />
          </center>
        </form>
      )}
      <form className='form'>
        {data.length === 0 && (
          CompanyData.filter((details) =>
            details.title.toLowerCase().includes(search.toLowerCase())
          ).map((details) => (
            <fieldset className='fset' key={details.title}>
              <h2 className='bottom'>
                &nbsp;&nbsp;{details.title}{' '}
                <button className='view' onClick={() => handleViewDetails(details.title)}>
                  View Details
                </button>
              </h2>
            </fieldset>
          ))
        )}
        
        {data.length > 0 && <View company={data[0]} />}
      </form>
    </div>
  );
};

export default Company;
