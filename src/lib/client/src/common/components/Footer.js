import BaseComponent from './BaseComponent';
import React from 'react';

class Footer extends BaseComponent {

  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; MYSUGARPOST 2017</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li>
                  <a
                    href="https://www.facebook.com/mysugarpost"
                    target="_blank"
                  ><i className="fa fa-facebook" /></a></li>
                <li>
                  <a
                    href="https://twitter.com/mysugarpost"
                    target="_blank"
                  ><i className="fa fa-twitter" /></a></li>
                <li>
                  <a
                    href="https://www.instagram.com/mysugarpost/"
                    target="_blank"
                  ><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
