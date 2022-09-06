import React, { useState } from "react";
import { Input, Button, Form, Modal } from "antd";
import { connect } from "react-redux";
import { composeMail } from "./redux/action";

function ComposeModal({ visible, handleClose, composeMail }) {
  const { TextArea } = Input;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values, "values");
    composeMail(values);
    form.setFieldsValue({ to: "", message: "" });
    handleClose();
  };

  const handleCancel = () => {
    form.setFieldsValue({ to: "", message: "" });
    handleClose();
  };

  return (
    <div>
      <Modal visible={visible} onCancel={handleCancel} footer={null}>
        <Form
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
          form={form}
          autoComplete="off"
          onFinish={onFinish}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5 className="mb-5">Compose Mail</h5>
                <Form.Item
                  label="To"
                  name="to"
                  rules={[
                    {
                      type: "email",
                      message: "Please enter valid email!",
                    },
                    { required: true, message: "Please provide sender email" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-12">
                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label="Message"
                    name="message"
                    rules={[
                      { required: true, message: "Please provide message" },
                    ]}
                    className="w-100"
                  >
                    <TextArea />
                  </Form.Item>
                </div>
              </div>
              <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Send
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    login: state.login,
    currentMail: state.currentMail,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    composeMail: (sender, description) =>
      dispatch(composeMail(sender, description)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComposeModal);
