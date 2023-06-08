import React from 'react';
import { Link } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <>
      <h1 id="title">
        <Link to="/">
          <strong style={{color: "#fc3903"}}>LEAH CARDOZ</strong>
          <span id="small-header">  they/them</span>
        </Link>
        <Dropdown id="hamburger-icon" item icon='bars' style={{fontSize: 24, paddingBottom: "23px"}} >
            <Dropdown.Menu direction="left">
              <Dropdown.Item id="dropdown-items" as={Link} to={'/'} icon='home' text='Home'/>
              <Dropdown.Item id="dropdown-items" as={Link} to={'/portfolio'} icon='folder' text='Portfolio' />
              <Dropdown.Item id="dropdown-items" as={Link} to={'/resumes'} icon='file alternate' text='Resumes' />
              <Dropdown.Item id="dropdown-items" as={Link} to={'/contact'} icon='envelope' text='Contact' />
            </Dropdown.Menu>
          </Dropdown>
      </h1>
    </>
  )
}

export default NavBar;