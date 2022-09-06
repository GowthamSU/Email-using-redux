import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { connect } from "react-redux";
import { loginUser } from "./redux/action";
// import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function Loginpage(props) {
  const onFinish = (values) => {
    console.log("user values", values);
    props.loginUser(values);
    // toast("Wow so easy!")
    // props.login(true)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container-fluid">
      {/* {props.notifyMsg && <ToastContainer />} */}
      <div className="row d-flex">
        <div className="col-md-8">
          <img
            src="https://media.istockphoto.com/vectors/laptop-with-email-marketing-concept-flat-design-vector-vector-id1170828052?k=20&m=1170828052&s=612x612&w=0&h=kG-C6XmCLJzR0trKnTdFAojuQaPdv1lcZ5TSCvUsvR0="
            alt="e-mail"
            className="mail_image"
          />
        </div>
        <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-primary">E-MAIL</h2>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  type: "email",
                  message: "Please enter valid email!",
                },
                {
                  required: true,
                  message: "Please enter username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter password!",
                },
                {
                  pattern:
                    /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!#$%\-_=+<>])([a-zA-Z0-9!#$%\-_=+<>]+)$/,
                  message: `Password must includes 1Capital letter, 1Number, 1Special Character`,
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    login: state.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);
