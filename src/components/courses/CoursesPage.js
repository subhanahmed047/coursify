import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';

import CourseList from './CourseList';
class CoursesPage extends React.Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;

    if (courses.length === 0) {
      loadCourses().catch((err) => alert('Loading Courses Failed ' + err));
    }

    if (authors.length === 0) {
      loadAuthors().catch((err) => alert('Loading Authors Failed ' + err));
    }
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
};

const mapAuthorsToCourses = (state) => {
  const { authors, courses } = state;
  return authors.length === 0
    ? []
    : courses.map((course) => {
        return {
          ...course,
          author: authors.find((a) => a.id === course.authorId),
        };
      });
};

const mapStateToProps = (state) => {
  return {
    courses: mapAuthorsToCourses(state),
    authors: state.authors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
    loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
