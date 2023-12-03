import React from 'react';
import { useSelector } from 'react-redux';
import DashboardCourseCard from '../components/DashboardCourseCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const StudentDashboardScreen = () => {
  const enrolledCourses = useSelector((state) => state.course.enrolledCourses);

  return (
    <div className='min-h-screen'>
    <motion.div className='flex xl:pb-4 pb-1 justify-around shadow-xl pt-8  ' initial={{y:-100}} animate={{y:0}} transition={{duration:.2, type:'spring', delay:1}} >
      <h1 className="sm:text-3xl text-lg font-bold  text-transparent  bg-clip-text bg-gradient-to-b from-green-100 from-55% to-sky-300transition duration-500 transform hover:scale-125 ">Course Listing</h1>
      <Link to="/" className=" sm:text-2xl text-sm font-semibold  transition duration-300 transform hover:scale-110 text-transparent text-center bg-clip-text bg-gradient-to-b from-green-100 from-55% to-sky-300 cursor-pointer">
        Go to Course Listing
      </Link>
      </motion.div>
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold m-4">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {enrolledCourses.map((courseId) => (
          <DashboardCourseCard key={courseId} courseId={courseId} />
        ))}
      </div>
      {/* <Link to="/" className="text-blue-500 hover:underline shadow-lg bg-transparent text-center hover:bg-gradient-to-b from-cyan-200 to-sky-300 ">
              Back to Course Listing
            </Link> */}
    </div></div>
  );
};

export default StudentDashboardScreen;


