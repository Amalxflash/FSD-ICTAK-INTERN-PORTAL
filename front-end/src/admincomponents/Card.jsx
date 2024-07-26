import React from "react";
import { Link } from "react-router-dom";
import { BiBook, BiUser } from "react-icons/bi";

const course = [
  {
    title: "Mentors",
    duration: "2 hours",
    icon: <BiUser />,
    path: "/mentors",
  },
  {
    title: "Projects",
    Duration: "2 hours",
    icon: <BiBook />,
    path: "/project",
  },
];

const Card = () => {
  return (
    <div className="card--container">
      {course.map((item) => (
        <Link key={item.title} to={item.path} className="card-link">
          <div className="card">
            <div className="card--cover">{item.icon}</div>
            <div className="card--title">
              <h2>{item.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;