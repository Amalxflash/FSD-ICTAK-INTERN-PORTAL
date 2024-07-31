import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiBook, BiUser } from "react-icons/bi";
import axiosInstance from "../axiosInterceptor";

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
const getBg = (title)=>{
  switch (title) {
    case "Mentors":
      return {
        cardBg : "#17a2b8",
        footerBg : "#116f7e"
      } 

    case "Projects":
      return {
        cardBg : "#ffc107",
        footerBg : "#e5ad06"
      } 
    default:
      return {
        cardBg : "#ffc107",
        footerBg : "#e5ad06"
      }  
  }
}

const Card = () => {

  const [mentorCount, setMentorCount] = useState([]);
  const [projectCount, setProjectCount] = useState([]);
  
 
  const fetchMentorCount = () => {
    axiosInstance.get('/api/mentorCount')
      .then((res) => {
        console.log(res)
        setMentorCount(res?.data?.count);
      })
      .catch((error) => {
        console.error('Error fetching the mentor count:', error);
      });
  };

 

  const fetchProjectCount = () => {
    axiosInstance.get('/api/project/projectCount')
      .then((res) => {
        console.log(res)
        setProjectCount(res?.data?.count);
      })
      .catch((error) => {
        console.error('Error fetching the project count:', error);
      });
  };

  useEffect(() => {
    fetchProjectCount();
    fetchMentorCount();
  }, []);


  return (
    <div className="card--container dashboard--new-container" style={{marginTop:'10px'}}>
      {course.map((item) => (
        <Link key={item.title} to={item.path} className="card-link" style={{width:"30%",gap:'10px' }}>
          {/* <div className="bg-red-300" style={{gap:'10px' }}>
            <div className="card--cover">{item.icon}</div>
            <div className="card--title">
              <h2>{item.title}</h2>
            </div>
          </div> */}
          <div className="card-new" style={{background: getBg(item?.title)?.cardBg}}>
            <div className="number">
              {item?.title ==="Mentors" ? mentorCount: projectCount}
            </div>
            <div className="head">{item?.title}</div>
            <div className="icon-new">{item.icon}</div>
            {/* <img src={item.icon} alt="" className="icon-new" /> */}
            <div className="card-footer-new" style={{background:getBg(item?.title)?.footerBg}}>view more &rarr;	</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;