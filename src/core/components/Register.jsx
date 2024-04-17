import React from "react";
import SignLogo from "/assets/SignupLogo.png";
import "./Register.css";

const Register = () => {
  return (
    <>
      <form>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={SignLogo} />
          </div>
          <div className="col-md-6">
            <a> Login</a>
            <a> Register</a>
            <a> Create your Farm2Home account using your email id</a>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email ID"
                icon="icon-envelope"
              />
              <small id="emailHelp" class="form-text text-muted">
                We will send a code to validate.
              </small>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
