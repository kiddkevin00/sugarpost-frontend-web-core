import homeStore from '../stores/homeStore';
import homeActionCreator from '../actions/homeActionCreator';
import SubscribeForm from './SubscribeForm';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class HomeApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    homeStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    homeStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div id="page-top">
        <header>
          <div className="header-content">
            <div className="header-content-inner">
              <h1 id="homeHeading">SUGARPOST</h1>
              <hr />
              <h3 className="section-heading">
                We are New York City &#39;s Premium Subscription Service!
              </h3>
              <button className="btn btn-primary btn-xl btn-sign-up page-scroll">
                Sign up Now</button>
              <a href="#about" className="page-scroll">
                <p className="text-faded">Find Out More</p></a>
            </div>
          </div>
        </header>
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">HOW IT WORKS</h2>
                <hr className="primary" />
                <p className="text-muted">Sugarpost is a New York based online monthly premium
                      subscription service that provides its customers with e-packages of trendy
                      and innovative desserts ranging from frozen treats to baked goods. We have
                      scoured the internet and attained insight from various food bloggers and
                      dessert connoisseurs to deliver our subscribers a selection of unique desserts
                      around New York City!
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-envelope-o text-primary sr-icons" />
                  <h3>Get Codes</h3>
                  <p className="text-muted">
                      After purchase a monthly subscription, you’ll receive an e-mail with unique
                      redemption codes during the first week of every month.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-child text-primary sr-icons" />
                  <h3>Go Venture</h3>
                  <p className="text-muted">
                    Visit all of the locations on your curated list of destination dessert spots.
                    Your e-package will have a little color on each vendor as well.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-shopping-basket text-primary sr-icons" />
                  <h3>Claim Desserts</h3>
                  <p className="text-muted">
                    Present your redemption codes at the participating locations to claim your
                    treats. Take a photo, put it on social media, and enjoy.
                    </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-share-alt text-primary sr-icons" />
                  <h3>Share It</h3>
                  <p className="text-muted">
                    Eat up! If you enjoyed your experience, refer a friend for credit towards your
                    next e-package. If enough friends sign up, you’ll even get a month free!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="no-padding" id="product">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">FEATURED PRODUCTS</h2>
                <hr className="primary" />
              </div>
            </div>
            <div className="row no-gutter popup-gallery">
              <div className="col-lg-3 col-md-6">
                <a href="img/portfolio/fullsize/1.jpg" className="portfolio-box">
                 <img src="http://www.musicinmovement.com/blog/wp-content/uploads/2017/01/StockSnap_QFLIGL7A3M.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                            Category
                      </div>
                      <div className="project-name">
                            Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="img/portfolio/fullsize/2.jpg" className="portfolio-box">
                  <img src="http://www.musicinmovement.com/blog/wp-content/uploads/2017/01/StockSnap_U3KQPNUUQX.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                          Category
                      </div>
                      <div className="project-name">
                          Project Name
                    </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="img/portfolio/fullsize/3.jpg" className="portfolio-box">
                  <img src="http://www.musicinmovement.com/blog/wp-content/uploads/2017/01/StockSnap_6CKU4XLND6.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                          Category
                      </div>
                      <div className="project-name">
                          Project Name
                     </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="img/portfolio/fullsize/4.jpg" className="portfolio-box">
                  <img src="http://www.musicinmovement.com/blog/wp-content/uploads/2017/01/StockSnap_J53XVOX9CC.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                          Category
                      </div>
                      <div className="project-name">
                          Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="press">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">PRESS & MEDIA</h2>
                <hr className="primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row no-gutter popup-gallery">
              <div className="col-lg-3 col-md-6">
                <a href="img/portfolio/fullsize/1.jpg" className="portfolio-box">
                 <img src="http://www.musicinmovement.com/blog/wp-content/uploads/2017/01/StockSnap_QFLIGL7A3M.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                            Category
                      </div>
                      <div className="project-name">
                            Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="img/portfolio/fullsize/2.jpg" className="portfolio-box">
                  <img src="http://www.musicinmovement.com/blog/wp-content/uploads/2017/01/StockSnap_U3KQPNUUQX.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                          Category
                      </div>
                      <div className="project-name">
                          Project Name
                    </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="img/portfolio/fullsize/3.jpg" className="portfolio-box">
                  <img src="http://www.musicinmovement.com/blog/wp-content/uploads/2017/01/StockSnap_6CKU4XLND6.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                          Category
                      </div>
                      <div className="project-name">
                          Project Name
                     </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="img/portfolio/fullsize/4.jpg" className="portfolio-box">
                  <img src="http://www.musicinmovement.com/blog/wp-content/uploads/2017/01/StockSnap_J53XVOX9CC.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                          Category
                      </div>
                      <div className="project-name">
                          Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">Contact us</h2>
              </div>
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <i className="fa fa-envelope-o fa-3x sr-contact"></i>
                <p><a href="mailto:your-email@your-domain.com">ADMINISTRATOR@MYSUGARPOST.COM</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

  static _onSubmit(event, email) {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

    homeActionCreator.subscribe(email);
  }

  static _onLink(url) {
    const win = window.open(url, '_blank');

    win.focus();
  }

}

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {
    subscribeFeedbackTxt: homeStore.getSubscribeFeedbackTxt(),
    subscribeFeedbackCssClass: homeStore.getSubscribeFeedbackCssClass(),
  };
}

export default HomeApp;
