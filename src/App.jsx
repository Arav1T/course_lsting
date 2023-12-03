// Main App component with routing
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseListing from './screens/CourseListing';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import StudentDashboardScreen from './screens/StudentDashboardScreen';
import { motion } from 'framer-motion';
import './App.css'

const App = () => {
  return (
    <motion.div className='bg-gradient-to-br from-cyan-200 via-cyan-400 to-sky-500 scroly scrol ' initial={{x:-3000}} animate={{x:0}} transition={{duration:1, type:'spring'}} >
      <Router>
      <Routes>
        <Route path="/" exact  element={<CourseListing/>} />
        <Route path="/course/:courseId"  element={<CourseDetailsScreen/>}/>
        <Route path="/dashboard"  element={<StudentDashboardScreen/>} />
      </Routes>
    </Router>
    </motion.div>
  );
};

export default App;
