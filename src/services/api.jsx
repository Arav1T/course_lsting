// api.js
const fetchCourses = () => {
    return fetch('http://localhost:3000/courses').then((response) => response.json());
  };
  
  export { fetchCourses };
  