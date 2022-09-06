import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import InputBox from '../src/common/InputBox/InputBox';
import { useForm } from "react-hook-form";
import FormErrorMessage from "../src/common/ErrorMessage/index";
import NormalButton from "../src/common/NormalButton/NormalButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

function App(props) {
  console.log(props, "props");

  const { register, handleSubmit, errors} = useForm({
    mode: "onChange",
  });
  const [showPassword, setshowPassword] = useState(false);

  const onSubmit = () => {
    // try {
    //   let body = {
    //     emailId: inputs.mailId,
    //     password: inputs.password,
    //   };
    //   let {
    //     data: {
    //       data: { token },
    //     },
    //   } = await LoginApi(body);
    //   saveToken(token);
    //   history.push("/admin/user");
    // } catch (err) {
    //   Toast({ type: "error", message: "Error" });
    // }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6">
            <img src="https://media.istockphoto.com/vectors/laptop-with-email-marketing-concept-flat-design-vector-vector-id1170828052?k=20&m=1170828052&s=612x612&w=0&h=kG-C6XmCLJzR0trKnTdFAojuQaPdv1lcZ5TSCvUsvR0=" alt="e-mail"/>
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-3">
              <div className="container">
                <div className="row py-5 text-center">
                  <div className="col-md-9 col-lg-8 mx-auto"></div>
                </div>
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading">E-MAIL</h3>
                    <form>
                      <div className="mt-5">
                        <InputBox
                          errors={errors}
                          type={"text"}
                          placeholder="Mail ID"
                          name="mailId"
                          register={register({
                            required: true,
                            pattern: /\S+@\S+\.\S+/,
                          })}
                        />
                        <FormErrorMessage
                          error={errors.mailId}
                          messages={{
                            required: "Mail ID is required",
                            pattern: "Invalid Mail ID",
                          }}
                        />
                      </div>
                      <div className="mt-4">
                        <div className="position-relative">
                          <InputBox
                            errors={errors}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            register={register({
                              required: true,
                            })}
                          />
                          {showPassword ? (
                            <VisibilityIcon
                              onClick={() => setshowPassword(!showPassword)}
                              className="inputIcon"
                            />
                          ) : (
                            <VisibilityOffIcon
                              onClick={() => setshowPassword(!showPassword)}
                              className="inputIcon"
                            />
                          )}
                        </div>
                        <FormErrorMessage
                          error={errors.password}
                          messages={{
                            required: "Password is required",
                          }}
                        />
                      </div>
                      <div className="mt-5">
                        <NormalButton
                          loginButton
                          label="login"
                          type="submit"
                          onClick={handleSubmit(onSubmit)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps)(App);
