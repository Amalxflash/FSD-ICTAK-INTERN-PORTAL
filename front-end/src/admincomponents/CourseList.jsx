import React from "react";
import "../style/style1.css";
import course from "../images/course.png";

const courses = [
  // {
  //   image: course,
  //   name: "Full Stack MERN",
  //   duration: "6 Months",
  //   cost: "35,000",
  // },
  // {
  //   image: course,
  //   name: "Full Stack MEAN",
  //   duration: "6 Months",
  //   cost: "35,000",
  // },
  // {
  //   image: course,
  //   name: "Full Stack .NET",
  //   duration: "6 Months",
  //   cost: "26,000",
  // },
  // {
  //   image: course,
  //   name: "Full Stack JAVA",
  //   duration: "6 Months",
  //   cost: "20,000",
  // },
];

const CourseList = () => {
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2></h2>
      </div>
      <div className="list--container">
        {courses.map((course) => (
          <div className="list">
            <div className="teacher--detail">
              <img src={course.image} alt={course.name} />
              <h5>{course.name}</h5>
            </div>
            <span>{course.duration}</span>
            <span>₹{course.cost}/-</span>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;