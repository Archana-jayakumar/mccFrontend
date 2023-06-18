import React, { useState } from 'react';
import './Display.css';

const reviews = [
  {
    name: 'Ann Mary',
    company: 'TCS',
    description: 'Hi everyone, my name is Anu, and Iam thrilled to share my experience of securing a placement at TCS. It has been an incredible journey filled with hard work, determination, and personal growth.Firstly, I did like to emphasize that getting placed at TCS was not an overnight accomplishment. It required consistent effort and a focused approach. From the beginning, I made it a point to equip myself with the necessary technical skills and knowledge. I dedicated countless hours to studying computer science concepts, practicing coding exercises, and exploring real-world projects. Continuous learning became my mantra, and I challenged myself to stay updated with the latest technologies and industry trends.'
  },
  {
    name: 'Meenakshi',
    company: 'Cognizant',
    description: 'Getting placed in Cognizant has been an incredible journey for me. It was a dream come true to be a part of such a prestigious company. The experience throughout the recruitment process was challenging but rewarding.To begin with, I focused on building a strong foundation of technical knowledge in my field of interest. I dedicated countless hours to studying programming languages, data structures, and algorithms. This helped me perform well in the technical rounds of the selection process. Additionally, I actively participated in coding competitions and hackathons, which not only enhanced my problem-solving skills but also gave me exposure to real-world scenarios. These experiences were valuable in preparing me for the rigorous interview rounds at Cognizant.'
  },
  {
    name: 'Rahul',
    company: 'Flipkart',
    description: 'To say that the placement process was challenging would be an understatement. The competition was fierce, and I knew I had to go above and beyond to stand out from the crowd. My journey began with thorough research about Flipkart, its values, and its work culture. Understanding their vision and how they revolutionize the e-commerce industry fueled my determination to become a part of their team.Next, I focused on building a strong foundation of technical knowledge and skills. I dedicated countless hours to honing my programming abilities, learning about software development, and staying updated with the latest industry trends. Flipkart values technical prowess, and I wanted to demonstrate my capabilities during the selection process.'
  },
  {
    name:'Elizebeth',
    company:'Wipro',
    description:'From the beginning, I was determined to join a reputed organization like Wipro. To achieve this goal, I focused on enhancing my skills and knowledge in the relevant areas. I pursued my studies diligently and made sure to stay updated with the latest industry trends.During my college years, I actively participated in various extracurricular activities and workshops related to my field. These experiences not only allowed me to expand my network but also helped me gain practical insights into the industry. Additionally, I took up internships and projects that provided me with hands-on experience, enabling me to apply theoretical knowledge to real-world scenarios.'
  },
  {
    name:'John',
    company:'Flipkart',
    description:'I still cannot believe it! After months of hard work, dedication, and countless interviews, I have finally landed my dream job at Flipkart. Joining this renowned company feels like a remarkable achievement and a significant milestone in my career. Allow me to share my experience and what I did to secure this amazing placement opportunity.From the very beginning, my aspiration was to work with a leading e-commerce company that values innovation, customer satisfaction, and employee growth. Flipkart stood out as the epitome of these qualities, and I set my sights on joining their dynamic team.'
  },
  {
    name:'Serin',
    company:'Wipro',
    description:'I am thrilled to share my incredible journey of securing a placement at Wipro, a renowned global company. The experience has been nothing short of extraordinary, filled with challenges, growth, and immense personal development.From the beginning, I knew that getting placed in Wipro would require dedication, hard work, and a competitive edge. I started my preparations well in advance, diving deep into technical subjects and polishing my problem-solving skills. Additionally, I focused on improving my communication abilities and honing my interpersonal skills, knowing their significance in the corporate world.'
  }
  // Add more review objects here as needed
];
 
const Display = () => {
  const [selectedCompany, setSelectedCompany] = useState('');

  const handleFilterChange = (event) => {
    setSelectedCompany(event.target.value);
  };

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