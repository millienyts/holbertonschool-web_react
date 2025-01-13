import React from 'react';
import CourseListRow from '../CourseList/CourseListRow';

const App = () => {
  return (
    <div className="App">
      <table>
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credits" />
        </thead>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
          <CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="20" />
          <CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40" />
        </tbody>
      </table>
    </div>
  );
};

export default App;
