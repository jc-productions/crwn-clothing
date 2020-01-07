import React from "react";
import "./CustomButton.styles.scss";

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) {
  return (
    <div>
      <button
        className={`${inverted ? "inverted" : ""}
        
        ${isGoogleSignIn ? "google-sign-in" : " "} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
}
