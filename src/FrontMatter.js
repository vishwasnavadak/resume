import React from "react";

const FrontMatter = ({ name, ...contact }) => {
  const faIcons = {
    email: "envelope",
    phone: "phone",
    github: "github-alt",
    website: "globe"
  };
  console.log("TCL: FrontMatter -> contact", contact);

  return (
    <React.Fragment>
      <h1>{name}</h1>
      <p className="contact">
        {Object.keys(contact).map(ele => {
          return (
            <span key={ele}>
              <i className={`fa fa-${faIcons[ele]}`} />
              {contact[ele]}
            </span>
          );
        })}
      </p>
    </React.Fragment>
  );
};
export default FrontMatter;
