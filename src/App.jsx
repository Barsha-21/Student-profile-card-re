import React from 'react';
import StudentCard from './components/StudentCard';
import './App.css';

function App() {
  const students = [
    {
      id: 1,
      name: 'John Doe',
      rollNo: '101',
      course: 'React',
      email: 'john@gmail.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      rollNo: '102',
      course: 'JavaScript',
      email: 'jane@example.com'
    },
    {
      id: 3,
      name: 'Michael Brown',
      rollNo: '103',
      course: 'Full Stack Web Dev',
      email: 'michael@domain.com'
    }
  ];

  return (
    <div className="app-container">
      <h1>Student Profiles</h1>
      <div className="student-list">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default App;
