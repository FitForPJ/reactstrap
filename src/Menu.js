import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import './App.css'
export default class Menu extends React.Component {
    render() {
        return(
          
                 <Nav vertical className="m-p-0" >
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                  
                </Nav>
           
        );
    }
}