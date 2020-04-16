import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import { Button, Tooltip } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      key: 'author[name]',
      render: (text, record) => <Link to="#">{record.author.name}</Link>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <>
          <Tooltip placement="top" title="Edit Course">
            <Button type="link">
              <EditFilled />
            </Button>
          </Tooltip>
          <Tooltip placement="top" title="Delete Course">
            <Button type="link" danger>
              <DeleteFilled />
            </Button>
          </Tooltip>
        </>
      ),
    },
  ];
  return <Table dataSource={courses} columns={columns} />;
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
