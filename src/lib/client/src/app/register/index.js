import AsyncRoute from '../../common/components/AsyncRoute';
import BaseComponent from '../../common/components/BaseComponent';
import { Route } from 'react-router-dom';
import React from 'react';


class RegisterApp extends BaseComponent {

  render() {
    return (
      <div id="registration-template">
        <div className="inner-bg">

          <Route
            exact={ true }
            path={ `${this.props.match.path}/login` }
            render={ (props) => (
              <AsyncRoute
                props={ props }
                loadingPromise={ System.import('./login/components/App') }
              />
            ) }
          />
          <Route
            exact={ true }
            path={ `${this.props.match.path}/signup` }
            render={ (props) => (
              <AsyncRoute
                props={ props }
                loadingPromise={ System.import('./signup/components/App') }
              />
            ) }
          />
          <Route
            exact={ true }
            path={ `${this.props.match.path}/payment` }
            render={ (props) => (
              <AsyncRoute
                props={ props }
                loadingPromise={ System.import('./payment/components/App') }
              />
            ) }
          />
          <Route
            exact={ true }
            path={ `${this.props.match.path}/forgot-password` }
            render={ (props) => (
              <AsyncRoute
                props={ props }
                loadingPromise={ System.import('./forgot-password/components/App') }
              />
            ) }
          />
          <Route
            exact={ true }
            path={ `${this.props.match.path}/referral` }
            render={ (props) => (
              <AsyncRoute
                props={ props }
                loadingPromise={ System.import('./referral/components/App') }
              />
            ) }
          />
        </div>
      </div>
    );
  }

}

export default RegisterApp;
