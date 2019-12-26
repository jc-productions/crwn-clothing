import React from "react";
import Directory from "../../components/directory/Directory";

import "./HomePage.styles.scss";

export default function HomePage({ history }) {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}
