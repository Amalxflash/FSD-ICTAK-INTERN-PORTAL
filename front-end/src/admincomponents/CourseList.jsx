import React from "react";
import "../style/style1.css";
import course from "../images/course.png";

const courses = [
  {
    image: course,
    name: "Full Stack MERN",
    duration: "20 hours lession",
    cost: "100",
  },
  {
    image: course,
    name: "Full Stack MEAN",
    duration: "20 hours lession",
    cost: "100",
  },
  {
    image: course,
    name: "Full Stack .NET",
    duration: "20 hours lession",
    cost: "26",
  },
  {
    image: course,
    name: "Full Stack JAVA",
    duration: "20 hours lession",
    cost: "100",
  },
];

const CourseList = () => {
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Courses</h2>
        <select>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
      <div className="list--container">
        {courses.map((course) => (
          <div className="list">
            <div className="teacher--detail">
              <img src={course.image} alt={course.name} />
              <h5>{course.name}</h5>
            </div>
            <span>{course.duration}</span>
            <span>${course.cost}/hr.</span>
            <span className="teacher--todo">:</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;