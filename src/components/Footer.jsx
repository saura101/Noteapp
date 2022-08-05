import React from "react";

const cur_year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>copyright @{cur_year}</p>
    </footer>
  );
}

export default Footer;
