import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export const createCourse = (course) => {
  return {
    type: types.CREATE_COURSE,
    course,
  };
};

export const loadCoursesSuccess = (courses) => {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses,
  };
};

export const loadCourses = () => {
  return (dispatch) => {
    return courseApi.getCourses().then((courses) => {
      return dispatch(loadCoursesSuccess(courses));
    });
  };
};
