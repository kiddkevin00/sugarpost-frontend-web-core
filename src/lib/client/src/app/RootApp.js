import authStore from '../common/auth/stores/authStore';
import authActionCreator from '../common/auth/actions/authActionCreator';
import ScrollDiv from '../common/components/ScrollDiv';
import BaseComponent from '../common/components/BaseComponent';
import constants from '../common/constants/';
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-scroll';

class RootApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    authStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  render() {
    const tabsShownWhenUserLoggedIn = [];
    const accountTab = (
      <LinkContainer key="1" to="/account">
        <NavItem>Account</NavItem>
      </LinkContainer>
    );
    const paymentTab = (
      <LinkContainer key="2" to={ { pathname: '/register/payment', query: { email: this.state.user.email } } }>
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
      <LinkContainer to="/" key="1" active={ false }>
        <NavItem eventKey={ 1 }>About</NavItem>
      </LinkContainer>
    )
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
      <LinkContainer to="/register/signup" key="5" active={ false }>
        <NavItem eventKey={ 5 }>Signup</NavItem>
      </LinkContainer>
    )
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
      <LinkContainer to="/register/login" key="6" active={ false }>
        <NavItem eventKey={ 6 }>Login</NavItem>
      </LinkContainer>
    )
    const logoutTab = (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <NavItem key="5">
        <span onClick={ RootApp._onLogout }>
          Logout
        </span>
      </NavItem>
      /* eslint-enable */
    );

    if (this.state.isLoggedIn) {
      switch (this.state.user.type) {
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
    } else if (window.innerWidth < 768) {
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

  _onChange() {
    this.setState(_getState());
  }

  static _onLogout() {
    authActionCreator.logout();
  }

  static _onLink(url) {
    const win = window.open(url, '_blank');

    win.focus();
  }

}
RootApp.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {
    isLoggedIn: authStore.isLoggedIn(),
    user: authStore.getUser(),
  };
}

export default RootApp;
