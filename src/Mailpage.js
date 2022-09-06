import React, { useState } from "react";
import { connect } from "react-redux";
import { logOut } from "./redux/action";
import { FiLogOut } from "react-icons/fi";
// import { Button, Form, Input, Modal } from "antd";
import ComposeModal from "./ComposeModal";
import Table from "react-bootstrap/Table";
import "./App.css";

function Mailpage(props) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <div className="overall_mail_page">
        <img
          src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
          height={80} className="mt-4"
        />
        <h3 className="m-5 header_color">Welcome to mail</h3>
        <div
          onClick={props.logOut}
          className="m-5 logout_button d-flex flex-column"
        >
          <h6 className="user">{props.currentUser}</h6>
          <FiLogOut size={30} className="logout" />
        </div>
      </div>
      <div>
        <h2 className="mt-3 compose" onClick={showModal}>
          Compose
        </h2>
        <h2 className="mt-3 inbox text-center">Inbox</h2>
      </div>

      <Table bordered hover>
        <thead>
          <tr className="text-center">
            <th>
              <h4>Sender</h4>
            </th>
            <th>
              <h4>Message</h4>
            </th>
          </tr>
        </thead>
        {props.currentMail.map((currentMails) => (
          <tbody>
            <tr className="text-center">
              <td>
                <p> {currentMails.sender}</p>
              </td>
              <td>
                <p> {currentMails.description}</p>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>

      <ComposeModal handleClose={() => handleCancel()} visible={visible} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
    login: state.login,
    currentMail: state.currentMail,
    currentUser: state.currentUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mailpage);
