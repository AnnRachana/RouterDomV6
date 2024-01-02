import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <p>Home</p>
      <Link to="/" state={"From Contact Page"}>Back to Home page</Link>
    </div>
  );
};

export default Contact;
