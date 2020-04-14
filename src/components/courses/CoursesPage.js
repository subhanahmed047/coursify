import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Layout, PageHeader } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as authorActions from '../../redux/actions/authorActions';
import * as courseActions from '../../redux/actions/courseActions';
import Wrapper from '../common/Wrapper';
import CourseList from './CourseList';
import CourseForm from './CourseForm';

const { Content } = Layout;

const CoursesPage = ({ courses, authors, loadAuthors, loadCourses }) => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((err) => alert('Loading Courses Failed ' + err));
    }

    if (authors.length === 0) {
      loadAuthors().catch((err) => alert('Loading Authors Failed ' + err));
    }
  });

  return (
    <Content>
      <Wrapper>
        <CourseForm showForm={showForm} onClose={() => setShowForm(false)} />
        <PageHeader
          className="site-page-header"
          backIcon="false"
          title="Courses"
          extra={[
            <Button
              icon={<PlusCircleOutlined />}
              onClick={() => setShowForm(true)}
            >
              Add Course
            </Button>,
          ]}
        />
        <CourseList courses={courses} />
      </Wrapper>
    </Content>
  );
};

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

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
