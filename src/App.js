import React from "react";
// import { Routes, Route } from "react-router-dom";
import Loginpage from "./Loginpage";
import Mailpage from "./Mailpage";
import { connect } from "react-redux";

function App(props) {
  return (
    <div>
      {/* <Routes> */}
      {/* //  <Route path="/" element={<Mailpage />} /> :
        // <Route path="/mailpage" element={<Loginpage />} />
      } */}
      {/* </Routes> */}

      {props.login === true ? <Mailpage /> : <Loginpage />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(App);
