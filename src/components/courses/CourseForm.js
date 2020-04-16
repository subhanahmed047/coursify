import React from 'react';
import { Modal } from 'antd';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const CourseForm = ({ showForm, onClose }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      title="Add Course"
      visible={showForm}
      onOk={onClose}
      onCancel={onClose}
    >
      <Form {...layout} form={form} name="control-hooks">
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CourseForm;
