import React from "react";
import "./SignIn.scss";
import SignInComponent from "../../components/sign-in/SignInComponent";
import SignUpComponent from "../../components/sign-up/SignUpComponent";
export default function SignIn() {
  return (
    <div className="sign-in-and-sign-up">
      <SignInComponent />
      <SignUpComponent />
    </div>
  );
}
