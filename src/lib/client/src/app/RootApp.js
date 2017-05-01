import authActionCreator from '../common/auth/actioncreator/';
import ScrollDiv from '../common/components/ScrollDiv';
import BaseComponent from '../common/components/BaseComponent';
import constants from '../common/constants/';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class RootApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onLogout');
  }

  render() {
    const tabsShownWhenUserLoggedIn = [];
    const accountTab = (
      <LinkContainer key="1" to="/account">
        <NavItem>Account</NavItem>
      </LinkContainer>
    );
    const paymentTab = (
      <LinkContainer key="2" to={ { pathname: '/register/payment', query: { email: this.props.userEmail } } }>
        <NavItem>Payment</NavItem>
      </LinkContainer>
    );
    const voucherTab = (
      <LinkContainer key="3" to="/vouchers">
        <NavItem>Vouchers</NavItem>
      </LinkContainer>
    );
    const referralTab = (
      <LinkContainer key="4" to="/register/referral">
        <NavItem>Referral</NavItem>
      </LinkContainer>
    );
    const logoutTab = (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <NavItem key="5">
        <span onClick={ this._onLogout }>
          Logout
        </span>
      </NavItem>
      /* eslint-enable */
    );
    const aboutTab = (
      <li key="1">
        <LinkContainer to="/">
          <Link
            activeClass="active"
            className="page-scroll"
            to="about"
            spy={ true }
            smooth={ true }
            duration={ 700 }
            delay={ 300 }
          >
            About
          </Link>
        </LinkContainer>
      </li>
    );
    const aboutCollapseTab = (
      <LinkContainer key="1" to="/home">
        <NavItem>About</NavItem>
      </LinkContainer>
    );
    const servicesTab = (
      <li key="2">
        <LinkContainer to="/">
          <Link
            activeClass="active"
            className="page-scroll"
            to="services"
            spy={ true }
            smooth={ true }
            duration={ 700 }
            delay={ 300 }
          >
            Services
          </Link>
        </LinkContainer>
      </li>
    );
    const portfolioTab = (
      <li key="3">
        <LinkContainer to="/">
          <Link
            activeClass="active"
            className="page-scroll"
            to="portfolio"
            spy={ true }
            smooth={ true }
            duration={ 700 }
            delay={ 300 }
          >
            Featured
          </Link>
        </LinkContainer>
      </li>
    );
    const contactTab = (
      <li key="4">
        <LinkContainer to="/">
          <Link
            activeClass="active"
            className="page-scroll"
            to="contact"
            spy={ true }
            smooth={ true }
            duration={ 700 }
            delay={ 300 }
          >
            Contact
          </Link>
        </LinkContainer>
      </li>
    );
    const signupTab = (
      <li key="5">
        <LinkContainer to="/register/signup">
          <Link
            activeClass="active"
            className="page-scroll"
            to="registration"
            spy={ true }
            smooth={ true }
            duration={ 700 }
            delay={ 300 }
          >
            Signup
          </Link>
        </LinkContainer>
      </li>
    );
    const signupCollapseTab = (
      <LinkContainer key="5" to="/register/signup">
        <NavItem>Signup</NavItem>
      </LinkContainer>
    );
    const loginTab = (
      <li key="6">
        <LinkContainer to="/register/login">
          <Link
            activeClass="active"
            className="page-scroll"
            to="registration"
            spy={ true }
            smooth={ true }
            duration={ 700 }
            delay={ 300 }
          >
            Login
          </Link>
        </LinkContainer>
      </li>
    );
    const loginCollapseTab = (
      <LinkContainer key="6" to="/register/login">
        <NavItem>Login</NavItem>
      </LinkContainer>
    );

    if (this.props.isLoggedIn) {
      switch (this.props.userType) {
        case constants.SYSTEM.USER_TYPES.UNPAID:
          tabsShownWhenUserLoggedIn.push(accountTab, paymentTab, logoutTab);
          break;
        case constants.SYSTEM.USER_TYPES.PAID:
          tabsShownWhenUserLoggedIn.push(accountTab, voucherTab, referralTab, logoutTab);
          break;
        case constants.SYSTEM.USER_TYPES.CANCELLED:
          tabsShownWhenUserLoggedIn.push(accountTab, paymentTab, voucherTab, referralTab,
            logoutTab);
          break;
        case constants.SYSTEM.USER_TYPES.INFLUENCER:
          tabsShownWhenUserLoggedIn.push(accountTab, paymentTab, voucherTab, referralTab,
            logoutTab);
          break;
        case constants.SYSTEM.USER_TYPES.VENDOR:
          tabsShownWhenUserLoggedIn.push(accountTab, logoutTab);
          break;
        case constants.SYSTEM.USER_TYPES.ADMIN:
          tabsShownWhenUserLoggedIn.push(accountTab, paymentTab, voucherTab, referralTab,
            logoutTab);
          break;
        default:
          tabsShownWhenUserLoggedIn.push(logoutTab);
          break;
      }
    } else if (typeof window !== 'undefined' && window.innerWidth < 768) {
      tabsShownWhenUserLoggedIn.push(aboutCollapseTab, signupCollapseTab, loginCollapseTab);
    } else {
      tabsShownWhenUserLoggedIn.push(aboutTab, servicesTab, portfolioTab, contactTab, signupTab,
        loginTab);
    }

    return (
      <div id="root-app">
        <ScrollDiv
          activeClass="scroll"
          className="navbar navbar-default navbar-fixed-top"
          to="main"
          spy={ true }
          smooth={ true }
        >
          <Navbar fixedTop={ true } default={ true } collapseOnSelect={ true } fluid={ true }>
            <Navbar.Header>
              <Navbar.Brand>
                <LinkContainer to="/">
                  <a className="page-scroll" href="/">Sugarpost</a>
                </LinkContainer>
              </Navbar.Brand>
              <Navbar.Toggle>Menu</Navbar.Toggle>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight={ true }>
                { tabsShownWhenUserLoggedIn }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </ScrollDiv>

        { this.props.children }

      </div>
    );
  }

  _onLogout() {
    this.props.dispatchLogout();
  }

  static _onLink(url) {
    const win = window.open(url, '_blank');

    win.focus();
  }

}
RootApp.propTypes = {
  dispatchLogout: PropTypes.func.isRequired,

  isLoggedIn: PropTypes.bool.isRequired,
  userType: PropTypes.string,
  userEmail: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    userType: state.auth.user.type,
    userEmail: state.auth.user.email,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchLogout(field, value) {
      dispatch(authActionCreator.logout());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RootApp);
