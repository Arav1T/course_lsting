import React from 'react';
import { useDispatch } from 'react-redux';
import { enrollCourse } from '../redux/actions/courseActions';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  // const dispatch = useDispatch();


  // const handleEnroll = () => {

  //   dispatch(enrollCourse(course.id));
  //   console.log("card")
  //   console.log(course)

  // };

  return (
    <Link to={`/course/${course.id}`}>
    <div className="bg-transparent p-4 m-2  shadow-xl shadow-sky-800 cursor-pointer transition duration-300 transform hover:scale-105 hover:bg-gradient-to-b from-cyan-200 to-sky-300">
      <h3 className="text-xl font-bold">{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      {/* <p>Description: {course.description}</p> */}
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      {/* <p>Schedule: {course.schedule}</p> */}
      {/* <p>Location: {course.location}</p> */}
      {/* <p>Prerequisites: {course.prerequisites.join(', ')}</p> */}

      {/* Syllabus */}
      {/* <details>
        <summary>Syllabus</summary>
        <ul>
          {course.syllabus.map((week) => (
            <li key={week.week}>
              <strong>Week {week.week}:</strong> {week.topic} - {week.content}
            </li>
          ))}
        </ul>
      </details> */}

      {/* Enroll button */}
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleEnroll}
      >
        Enroll
      </button> */}
    </div> </Link>
  );
};

export default CourseCard;
