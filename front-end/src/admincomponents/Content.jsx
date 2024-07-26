import React from 'react'
import '../style/style1.css';
import Card from './Card';
import CourseList from './CourseList';
import ContentHeader from './ContentHeader';


const Content = () => {
  return (
    <div className='content'>
        <ContentHeader/>
        <Card/>
        <CourseList/>

    </div>
  )
}

export default Content