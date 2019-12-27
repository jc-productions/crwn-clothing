import React from "react";
import "./CustomButton.styles.scss";

export default function CustomButton({
  children,
  isGoogleSignIn,
  ...otherProps
}) {
  return (
    <div>
      <button
        className={`${isGoogleSignIn ? "google-sign-in" : " "} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
}
