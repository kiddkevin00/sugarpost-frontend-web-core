import BaseComponent from './BaseComponent';
import React from 'react';

class Footer extends BaseComponent {

  render() {
    return (
      <footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <div className="footer-col col-md-4">
                <h3>Location</h3>
                <p>New York, NY 10001</p>
              </div>
              <div className="footer-col col-md-4">
                <ul className="list-inline">
                  <li>
                    <a
                      href="https://www.facebook.com/mysugarpost"
                      target="_blank"
                      className="btn-social btn-outline"
                    >
                      <i className="fa fa-fw fa-facebook" /></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/mysugarpost"
                      target="_blank"
                      className="btn-social btn-outline"
                    >
                      <i className="fa fa-fw fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/mysugarpost/"
                      target="_blank"
                      className="btn-social btn-outline"
                    >
                      <i className="fa fa-fw fa-instagram" /></a>
                  </li>
                </ul>
              </div>
              <div className="footer-col col-md-4">
                <h3>About</h3>
                <h3>Support</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                    Copyright &copy; MYSUGARPOST 2017
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
