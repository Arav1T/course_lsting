// // Component to display detailed course information
// import React from 'react';

// const CourseDetails = ({ course }) => {
//   return (
//     <div>
//       <h1>{course.name}</h1>
//       <p>{course.instructor}</p>
//       {/* Display other course details */}
//     </div>
//   );
// };

// export default CourseDetails;
// /src/components/CourseDetails.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { enrollCourse } from '../redux/actions/courseActions';

const CourseDetails = ({ course }) => {
  const dispatch = useDispatch();

  const handleEnroll = () => {
    dispatch(enrollCourse(course.id));
    console.log("hgcug")
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Course Details</h2>
      <p className="mb-2">Course Name: {course.name}</p>
      {/* Add more course details as needed */}
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
    </div>
  );
};

export default CourseDetails;
