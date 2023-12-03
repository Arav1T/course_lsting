

export const setCourses = (courses) => ({
  type: 'SET_COURSES',
  payload: courses,
});

export const enrollCourse = (courseId) => ({
  type: 'ENROLL_COURSE',
  payload: courseId,
});

