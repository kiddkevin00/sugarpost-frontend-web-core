import authStore from '../common/auth/stores/authStore';
import authActionCreator from '../common/auth/actions/authActionCreator';
import HomeApp from './home/components/HomeApp';
import LoginApp from './login/components/LoginApp';
import SignupApp from './signup/components/SignupApp';
import MemoApp from './memo/components/MemoApp';
import BaseComponent from '../common/components/BaseComponent';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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

    if (this.state.isLoggedIn) {
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      tabsShownWhenUserLoggedIn.push(
        <NavItem key="0">
          <div onClick={ RootApp._onLogout }>
            Log out
          </div>
        </NavItem>
      );
      /* eslint-enable */
    } else {
      tabsShownWhenUserLoggedIn.push((
        <LinkContainer key="1" to="/signup">
          <NavItem>Sign Up</NavItem>
        </LinkContainer>
      ), (
        <LinkContainer key="2" to="/login">
          <NavItem>Log In</NavItem>
        </LinkContainer>
      ));
    }

    return (
      <div>
        {/*
        <Navbar className="navbar-fixed-top header-custom">
          <Navbar.Header>
            <Navbar.Brand>
              <img className="icon-custom" src="/assets/images/logo-tmp.jpg" alt="Icon" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="navbar-right">
              <LinkContainer to="/home">
                <NavItem>Home</NavItem>
              </LinkContainer>
              { tabsShownWhenUserLoggedIn }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        */}

        { this.props.children }

        <div className="footer-hack" />
        <Navbar className="navbar footer-custom">
          <Navbar.Header>
            <Navbar.Brand>
              <a>©Sugarpost 2016</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className="navbar-collapse-custom">
            <Nav className="navbar-right">
              <NavItem>
                {/* eslint-disable jsx-a11y/no-static-element-interactions, max-len */}
                <div onClick={ RootApp._onLink.bind(null, 'https://www.facebook.com/mysugarpost') }>
                  <svg className="link-icon-custom" width="24px" height="24px" viewBox="0 0 96.124 96.123">
                    <g>
                      <path
                        d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803
                          c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654
                          c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246
                          c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"
                      />
                    </g>
                  </svg>
                </div>
              </NavItem>
              <NavItem>
                <div onClick={ RootApp._onLink.bind(null, 'https://www.instagram.com/mysugarpost/') }>
                  <svg className="link-icon-custom" width="24px" height="24px" viewBox="0 0 612 612">
                    <g>
                      <path
                        d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411
                          c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513
                          c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101
                          c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104
                          c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194
                          c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485
                          c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"
                      />
                    </g>
                  </svg>
                </div>
              </NavItem>
              <NavItem>
                <div onClick={ RootApp._onLink.bind(null, 'https://twitter.com/mysugarpost') }>
                  <svg className="link-icon-custom" width="24px" height="24px" viewBox="0 0 97.395 97.395">
                    <g>
                      <path
                        d="M12.501,0h72.393c6.875,0,12.5,5.09,12.5,12.5v72.395c0,7.41-5.625,12.5-12.5,12.5H12.501C5.624,97.395,0,92.305,0,84.895
                          V12.5C0,5.09,5.624,0,12.501,0L12.501,0z M70.948,10.821c-2.412,0-4.383,1.972-4.383,4.385v10.495c0,2.412,1.971,4.385,4.383,4.385
                          h11.008c2.412,0,4.385-1.973,4.385-4.385V15.206c0-2.413-1.973-4.385-4.385-4.385H70.948L70.948,10.821z M86.387,41.188h-8.572
                          c0.811,2.648,1.25,5.453,1.25,8.355c0,16.2-13.556,29.332-30.275,29.332c-16.718,0-30.272-13.132-30.272-29.332
                          c0-2.904,0.438-5.708,1.25-8.355h-8.945v41.141c0,2.129,1.742,3.872,3.872,3.872h67.822c2.13,0,3.872-1.742,3.872-3.872V41.188
                          H86.387z M48.789,29.533c-10.802,0-19.56,8.485-19.56,18.953c0,10.468,8.758,18.953,19.56,18.953
                          c10.803,0,19.562-8.485,19.562-18.953C68.351,38.018,59.593,29.533,48.789,29.533z"
                      />
                    </g>
                  </svg>
                </div>
                {/* eslint-enable */}
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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

const clientRoutes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ RootApp }>
      <IndexRoute component={ HomeApp } />
      <Route path="home" component={ HomeApp } />
      <Route path="memo" component={ MemoApp } />
      <Route path="signup" component={ SignupApp } />
      <Route path="login" component={ LoginApp } />
    </Route>
  </Router>
);

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {
    isLoggedIn: authStore.isLoggedIn(),
  };
}

export default clientRoutes;
