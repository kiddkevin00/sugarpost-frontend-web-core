import BaseComponent from '../../../common/components/BaseComponent';
import Footer from '../../../common/components/Footer';
import React from 'react';
import { Element } from 'react-scroll';

class HomeApp extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = _getState();
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="home-template">
        <header>
          <div className="header-content">
            <div className="header-content-inner">
              <h1>SUGARPOST</h1>
              <hr />
              <p>New York City&#39;s Premium Dessert Subscription Service!</p>
              <a href="/register/signup" className="btn btn-primary btn-xl page-scroll">
                Sign Up Now
              </a>
              <br />
              <a href="/#about" className="btn btn-circle page-scroll">
                <i className="fa fa-angle-double-down animated" />
              </a>
            </div>
          </div>
        </header>

        <Element name="main">

          <Element name="about">
            <section className="bg-primary" id="about">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2 className="section-heading">Got a sweet tooth? We&#39;ve got the cure!</h2>
                    <hr className="light" />
                    <p className="text-faded">
                      Sugarpost is a New York based online monthly premium subscription service
                      that provides its customers with e-packages of trendy and innovative desserts
                      ranging from frozen treats to baked goods. We have scoured the internet and
                      attained insight from various food bloggers and dessert connoisseurs to
                      deliver our subscribers a selection of unique desserts around New York City!
                      Within each Sugarpost e-package, subscribers will find a little background on
                      each featured dessert vendor, and their voucher which can claim in-store
                      desserts or Sugarpost exclusives.
                    </p>
                    <a href="/#services" className="btn btn-default btn-xl sr-button page-scroll">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </Element>

          <Element name="services">
            <section id="services">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading">How It Works</h2>
                    <hr className="primary" />
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
                        After purchasing a monthly subscription, you’ll receive an e-mail with a
                        voucher during the first week of every month.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                      <i className="fa fa-4x fa-map-marker text-primary sr-icons" />
                      <h3>Go Venture</h3>
                      <p className="text-muted">
                        Visit all of the locations on your curated list of destination dessert
                        spots. Your e-package will have a little background on each vendor as well.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                      <i className="fa fa-4x fa-shopping-basket text-primary sr-icons" />
                      <h3>Claim Desserts</h3>
                      <p className="text-muted">
                        Present your voucher at the participating locations to claim your treats.
                        Take a photo, put it on social media, and eat up!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                      <i className="fa fa-4x fa-share-alt text-primary sr-icons" />
                      <h3>Share It</h3>
                      <p className="text-muted">
                        If you enjoyed your experience, refer a friend for credit towards
                        your next e-package. If enough friends sign up, you’ll get a month free!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Element>

          <Element name="portfolio">
            <section id="portfolio">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Featured Products</h2>
                    <hr className="primary" />
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row no-gutter popup-gallery">
                  <div className="col-lg-3 col-sm-6">
                    {/* eslint-disable max-len */}
                    <img src="http://www.musicinmovement.com/blog/wp-content/uploads/2017/01/StockSnap_QFLIGL7A3M.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <img src="http://www.musicinmovement.com/blog/wp-content/uploads/2017/01/StockSnap_QFLIGL7A3M.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <img src="http://www.musicinmovement.com/blog/wp-content/uploads/2017/01/StockSnap_QFLIGL7A3M.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <img src="http://www.musicinmovement.com/blog/wp-content/uploads/2017/01/StockSnap_QFLIGL7A3M.jpg" className="img-responsive" alt="" />
                    {/* eslint-enable max-len */}
                  </div>
                </div>
              </div>
            </section>
            <aside className="bg-dark">
              <div className="container text-center">
                <div className="call-to-action">
                  <br />
                  <h2>Can&#39;t Wait?</h2>
                  <a
                    href="/register/signup"
                    className="btn btn-default btn-xl sr-button"
                  >
                    Sign Up Now
                  </a>
                  <br />
                  <br />
                </div>
              </div>
            </aside>
          </Element>
          <aside className="bg-darker">
            <div className="container text-center">
              <div>
                <h2>Featured On</h2>
                <hr className="primary" />
                <h4>Coming Soon...</h4>
              </div>
            </div>
          </aside>
          <Element name="contact">
            <section id="contact">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2 className="section-heading">Let&#39;s Get In Touch!</h2>
                    <hr className="primary" />
                    <p>
                      Interested in partnering with us? Inquiries? Questions? Press coverage?
                      That&#39;s great! We look forward to hearing from you! Send us an e-mail and
                      we will get back to you as soon as possible!
                    </p>
                  </div>
                  <div className="col-lg-6 col-lg-offset-3 text-center">
                    <i className="fa fa-envelope-o fa-3x sr-contact" />
                    <p>
                      <a href="mailto:administrator@mysugarpost.com">
                        administrator@mysugarpost.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Element>

        </Element>

        <Footer />
      </div>
    );
  }

}

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {};
}

export default HomeApp;
