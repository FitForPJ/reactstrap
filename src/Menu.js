import React from 'react';
import 'rc-menu/assets/index.css';
import {Nav, NavItem, NavLink,  Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import './App.css'
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
export default class MenuNav extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          openKeys: [],
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

      onClick(info) {
        console.log('click ', info);
      }
    
      onOpenChange = (openKeys) => {
        console.log('onOpenChange', openKeys);
        this.setState({
          openKeys,
        });
      }
    

    render() {
        return(
          
            <Menu
            onClick={this.onClick}
            mode="inline"
            onOpenChange={this.onOpenChange}
            openKeys={this.state.openKeys}
          >
              <MenuItem key="1-1">
                 <a exact href="/" >Home</a>
              </MenuItem>
             
            <SubMenu key="2" title="Manage">
              <MenuItem key="2-1">
                <a  href="/add">Add</a>
              </MenuItem>
              <MenuItem key="2-2">
                <a  href="/edit">Edit</a>
              </MenuItem>
            </SubMenu>
            <MenuItem key="3">
                <a  href="/export">Export</a>
            </MenuItem>
          </Menu>
           
        );
    }
}