import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCourses } from '../redux/actions/courseActions';
import { fetchCourses } from '../services/api';
import CourseCard from '../components/CourseCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css'

const CourseListing = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);


  useEffect(() => {
    fetchCourses().then((data) => {
      dispatch(setCourses(data));
      setFilteredCourses(data); 
    });
  }, [dispatch]);

  const courses = useSelector((state) => state.course.courses);


  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);


    const filtered = courses.filter(
      (course) =>
        course.name.toLowerCase().includes(query) || course.instructor.toLowerCase().includes(query)
    );

    setFilteredCourses(filtered);
  };

  return (
    <div className="container mx-auto pt-8 bg-transparent xl:h-screen ">
      <motion.div className='flex xl:pb-4 pb-1 justify-around shadow-xl ' initial={{y:-100}} animate={{y:0}} transition={{duration:.2, type:'spring', delay:1}} >
      <h1 className="sm:text-3xl text-lg font-bold  text-transparent  bg-clip-text bg-gradient-to-b from-green-100 from-55% to-sky-300transition duration-500 transform hover:scale-125 ">Course Listing</h1>
      <Link to="/dashboard" className=" sm:text-2xl text-sm font-semibold  transition duration-300 transform hover:scale-110 text-transparent text-center bg-clip-text bg-gradient-to-b from-green-100 from-55% to-sky-300 cursor-pointer">
        Go to Student Dashboard
      </Link>
      </motion.div>
      <div className=" flex justify-center xl:pt-4 pt-2">
      <motion.input
      
        type="text"
        placeholder="Search by course name or instructor"
        value={searchQuery}
        onChange={handleSearch}
        className="p-2 mb-4 border rounded bg-transparent shadow-md text-white shadow-fuchsia-50  "
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{duration: .5,type:'spring',delay:1}}
      />
      </div>

      <motion.div className='flex justify-center' initial={{scale:0}}
        animate={{scale:1}}
        transition={{duration: .5,type:'spring',delay:1}}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex  xl:overflow-x-scroll xl:p-16 gap-4 xl:w-5/6 scrol scrolx ">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      </motion.div>
      
    </div>
  );
};

export default CourseListing;
