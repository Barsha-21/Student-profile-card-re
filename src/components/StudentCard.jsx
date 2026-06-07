import React from 'react';
import './StudentCard.css';

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <div className="card-header">
        <h3>{student.name}</h3>
      </div>
      <div className="card-body">
        <p><strong>Roll No:</strong> {student.rollNo}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Email:</strong> {student.email}</p>
      </div>
    </div>
  );
};

export default StudentCard;
