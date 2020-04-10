import React, { useState } from 'react';

const CoursesPage = () => {
  const [course, setCourse] = useState({});

  const handleChange = (event) => {
    setCourse({ ...course, title: event.target.value.trim() });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(course);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add a Course</h3>
        <input type="text" onChange={handleChange} value={course.title} />
        <input type="submit" value="Save" />
      </form>
    </>
  );
};

export default CoursesPage;
