
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { enrollCourse } from '../redux/actions/courseActions';
import { motion } from 'framer-motion';


// import CourseDetails from '../components/CourseDetails';

const CourseDetailsScreen = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);


  const courseId = window.location.pathname.split('/').pop();

  const selectedCourse = courses.find((course) => course.id === parseInt(courseId));

  const handleEnroll = () => {

    dispatch({ type: 'ENROLL_COURSE', payload: selectedCourse.id });
    console.log("hbuhbuh")
  };

  return (
    <div className='h-screen'>
    <motion.div className='flex xl:pb-4 pb-1 justify-around shadow-xl pt-8 items-center' initial={{y:-100}} animate={{y:0}} transition={{duration:.2, type:'spring', delay:1}} >
      <h1 className="sm:text-3xl text-lg font-bold  text-transparent  bg-clip-text bg-gradient-to-b from-green-100 from-55% to-sky-300transition duration-500 transform hover:scale-125 ">Course Listing</h1>
      <Link to="/dashboard" className=" sm:text-2xl text-sm font-semibold  transition duration-300 transform hover:scale-110 text-transparent text-center bg-clip-text bg-gradient-to-b from-green-100 from-55% to-sky-300 cursor-pointer">
        Go to Student Dashboard
      </Link>
      </motion.div>
    <motion.div className=" container mx-auto p-4 text-center mt-10 shadow-xl w-1/2 hover:bg-gradient-to-b from-cyan-200 to-sky-300 " initial={{y:-100}} animate={{y:50}} transition={{duration:2}} >
      {selectedCourse ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Course Details</h2>
          <p className="mb-2">Course Name: {selectedCourse.name}</p>
          <p>Instructor: {selectedCourse.instructor}</p>
          <p>Description: {selectedCourse.description}</p>
          <p>Enrollment Status: {selectedCourse.enrollmentStatus}</p>
          <p>Duration: {selectedCourse.duration}</p>
          <p>Schedule: {selectedCourse.schedule}</p>
          <p>Location: {selectedCourse.location}</p>
          <p>Prerequisites: {selectedCourse.prerequisites.join(', ')}</p>
          <details>
            <summary>Syllabus</summary>
            <ul>
              {selectedCourse.syllabus.map((week) => (
                <li key={week.week}>
                  <strong>Week {week.week}:</strong> {week.topic} - {week.content}
                </li>
              ))}
            </ul>
          </details>

          <button
            onClick={handleEnroll}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Enroll
          </button>

          <p className="mt-2">
            <Link to="/" className="text-blue-500 hover:underline">
              Back to Course Listing
            </Link>
          </p>
        </>
      ) : (
        <p>Course not found</p>
      )}
    </motion.div></div>
  );
};

export default CourseDetailsScreen;
