import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return <div className="footer">{year}. All Rights Reserved.</div>;
}

export default Footer;
