//Creates the header navbar that will always be rendered, but will change dependiing on the application state

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../../../assets/images/PS-Logo.png';
import IG_logo_white from '../../../assets/images/IG_logo_white.png';
import IG_logo_teal from '../../../assets/images/IG_logo_teal.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderLinks() {
    //If application state authenticated flag is true, then user is authenticated, render a signout link.
    if (this.props.authenticated) {
      //show a link to sign out
      return (
        <NavItem>
          <NavLink tag={RRNavLink} to={'/signout'}>
            Sign Out
          </NavLink>
        </NavItem>
      );
      //If application state authenticated flag is false, then user is not authenticated, render a signin and signup link.
    } else {
      //using array brackets on the return statement instead of parens allows us to return multiple list items without having to wrap them in a <div> tag.
      //keys were chosen since these list items will not change over time.
      return [
        <NavItem key={1}>
          <NavLink tag={RRNavLink} to={'/signin'}>
            Sign In
          </NavLink>
        </NavItem>,
        <NavItem key={2}>
          <NavLink tag={RRNavLink} to={'/signup'}>
            Sign Up
          </NavLink>
        </NavItem>
      ];
    }
  }
  render() {
    return (
      <Navbar dark expand="md">
        {/* Takes the place of a logo, or somehting similar, that will take the user to the root route. */}
        <NavbarBrand tag={RRNavLink} to={'/'}>
          <img src={logo} alt="Perfomance Society" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto">
            <NavItem>
              <a className="nav-link" target="_blank" href="https://www.instagram.com/performancesociety/">
                <img src={IG_logo_white} />
                <img src={IG_logo_teal} />
              </a>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to={'/workouts'}>
                Workouts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to={'/articles'}>
                Articles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to={'/videos'}>
                Videos
              </NavLink>
            </NavItem>
            {/* Calls function that checks state to determine how header will be rendered */}
            {/* {this.renderLinks()} */}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  //Pulls off the authenticated flag specifically
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
