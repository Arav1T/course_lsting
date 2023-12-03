import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

const DashboardCourseCard = ({ courseId }) => {
  const courses = useSelector((state) => state.course.courses);
  const enrolledCourses = useSelector((state) => state.course.enrolledCourses);

  const enrolledCourse = enrolledCourses.find((id) => id === courseId);
  const course = courses.find((c) => c.id === courseId);

  return (
    <motion.div className=" p-4 m-2 bg-transparent shadow-xl hover:bg-gradient-to-b from-cyan-200 to-sky-300" initial={{x:-1000}} animate={{x:0}} transition={{duration:1}} >
    
      <h3 className="text-xl font-bold">{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      {/* <p>Instructor: {course.instructor}</p> */}
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites.join(', ')}</p>
      {enrolledCourse && <p>Status: Enrolled</p>}


    </motion.div>
  );
};

export default DashboardCourseCard;
