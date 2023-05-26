import React from 'react';
import { Link } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react';

const NavBar = () => {

  return (
    <>
      <h1 id="title">
        <span id="small-header">welcome to the personal site of  </span>
        <strong>LEAH CARDOZ</strong>
        <Dropdown id="hamburger-icon" item icon='bars' style={{ fontSize: 24, paddingBottom: "25px"}} >
            <Dropdown.Menu direction="left">
              <Dropdown.Item id="dropdown-items" as={Link} to={'/'} icon='home' text='Home'/>
              <Dropdown.Item id="dropdown-items" as={Link} to={'/projects'} icon='folder' text='Projects' />
              <Dropdown.Item id="dropdown-items" as={Link} to={'/resumes'} icon='file alternate' text='Resumes' />
              <Dropdown.Item id="dropdown-items" as={Link} to={'/contact'} icon='envelope' text='Contact' />
            </Dropdown.Menu>
          </Dropdown>
      </h1>
    </>
  )
}
export default NavBar;