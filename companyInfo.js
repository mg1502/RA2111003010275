import React from 'react';
import ReactDOM from 'react-dom/client';
const CompanyInfo = () => {
    const companyData = {
      companyName: 'hid',
      ownerName: 'Maya',
      rollNo: '01',
      ownerEmail: 'mayank@abc.edu',
      accessCode: 'FKDLjg'
    };
  
    return (
      <div>
        <h2>Company Information</h2>
        <p>Company Name: {companyData.companyName}</p>
        <p>Owner Name: {companyData.ownerName}</p>
        <p>Roll No: {companyData.rollNo}</p>
        <p>Owner Email: {companyData.ownerEmail}</p>
        <p>Access Code: {companyData.accessCode}</p>
      </div>
    );
  };
  
  export default CompanyInfo;