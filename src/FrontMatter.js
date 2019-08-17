import React from "react";

const FrontMatter = ({ name, email, phone, github }) => {
  return (
    <React.Fragment>
      <h1>{name}</h1>
      <div className="intro">{email}</div>
    </React.Fragment>
  );
};
export default FrontMatter;
