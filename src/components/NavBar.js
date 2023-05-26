import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Input, Card, Menu, Dropdown, Button, Segment } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

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
        {/* <div class="ui compact menu" position="right" id="hamburger-icon">
          <div class="ui simple dropdown item">
          <i class="bars icon" ></i>
            <Dropdown.Menu direction="left" >
              <Dropdown.Item>Action 1</Dropdown.Item>
              <Dropdown.Item>Action 2</Dropdown.Item>
              <Dropdown.Item>Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </div>
        </div> */}
        <Dropdown id="hamburger-icon" item icon='bars' style={{ fontSize: 24, paddingBottom: "25px"}} >
            <Dropdown.Menu direction="left">
              <Dropdown.Item id="dropdown-items" as={Link} to={'/'} icon='home' text='Home'/>
              <Dropdown.Item id="dropdown-items" as={Link} to={'/projects'} icon='folder' text='Projects' />
              <Dropdown.Item id="dropdown-items" as={Link} to={'/resumes'} icon='file alternate' text='Resumes' />
              <Dropdown.Item id="dropdown-items" as={Link} to={'/contact'} icon='envelope' text='Contact' />
            </Dropdown.Menu>
          </Dropdown>
      {/* <Menu.Menu position="right" id="hamburger-icon">
        <Dropdown 
          id="hamburger-icon"
          item
          size="big"
          icon='bars'
          // floating
          labeled
          button
          open={showDropdown}
          onClick={handleDropdownToggle}
        >
          <Dropdown.Menu direction="left" >
            <Dropdown.Item as={Link} to={'/'} icon='' text='Home' />
            <Dropdown.Item as={Link} to={'/projects'} icon='' text='Projects' />
            <Dropdown.Item as={Link} to={'/resumes'} icon='' text='Resumes' />
            <Dropdown.Item as={Link} to={'/contact'} icon='' text='Contact' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu> */}
      </h1>
    </>
  )
}
export default NavBar;