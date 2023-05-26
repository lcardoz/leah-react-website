import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { Input, Card, Menu, Dropdown, Button, Segment } from 'semantic-ui-react';

const NavBar = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <h1 id="title">
        <span id="small-header">welcome to the personal site of  </span>
        <strong>LEAH CARDOZ</strong>
        {/* <Dropdown item icon='bars' style={{ fontSize: 24}} >
            <Dropdown.Menu direction="left" style={{ fontSize: 20, color: "black" }}>
              <Dropdown.Item as={Link} to={} icon='user' text='Projects' />
              <Dropdown.Item as={Link} to={} icon='tasks' text='Resumes' />
              <Dropdown.Item as={Link} to={} icon='edit' text='Contact' />
            </Dropdown.Menu>
          </Dropdown> */}
      </h1>
      {/* ADD HAMBURGER IN TOP RIGHT CORNER OF TITLE */}
      {/* links to pages: projects | resumes | contact */}
    </>
  )
}
export default NavBar;