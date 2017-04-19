import actionCreator from '../actionCreator';
import BaseComponent from '../../../common/components/BaseComponent';
import Footer from '../../../common/components/Footer';
import { Thumbnail, Modal } from 'react-bootstrap';
import { Element } from 'react-scroll';
import { connect } from 'react-redux';
import React from 'react';

class HomeApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_closeModal');
  }

  render() {
    return (
      <div id="home-template">
        <Modal id="promotion-modal" className="text-center" show={ this.props.isModalOpen } onHide={ this._closeModal }>
          <Modal.Header>
            <Modal.Title>Try Our Premium Dessert Subscription Today!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Thumbnail className="text-center" src="/assets/images/sugarpost-logo.png" alt="">
              <div className="row">
                <div className="col-xs-12">
                  <h2>50% OFF</h2>
                  <h4>Use <b>U50VRR</b> Code for Your First Month</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <p>Limited Edition</p>
                </div>
              </div>
            </Thumbnail>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={ this._closeModal }
              className="btn btn-default center-block"
              type="button"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <header>
          <div className="header-content">
            <div className="header-content-inner">
              <h1>SUGARPOST</h1>
              <hr />
              <p>
                Discover hidden gems to Manhattan&#39;s trendiest desserts! Subscribe and receive an
                e-package which will contain vouchers that can claim in-store desserts or
                <b><i>&nbsp;Sugarpost exclusives&nbsp;</i></b>
                from
                <b><i>&nbsp;different featured dessert vendors every month!&nbsp;</i></b>
              </p>
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
            <section id="about" className="bg-primary">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2 className="section-heading">Got a sweet tooth? We&#39;ve got the cure!</h2>
                    <hr className="light" />
                    <p className="text-faded">
                      We are a New York based online monthly premium subscription service that
                      provides you with e-packages of trendy and innovative desserts. These
                      e-packages have been assembled by our curators who have scoured the internet
                      and attained insight from influential foodies to dessert connoisseurs,
                      providing you with the city&#39;s best dessert discovery experience!
                    </p>
                    <a href="/#services" className="btn btn-default btn-xl sr-button page-scroll">
                      Learn More
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
                      <h3>Subscribe</h3>
                      <p className="text-muted">
                        After purchasing a monthly subscription, you will receive an email with
                        vouchers during the first day of every month.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                      <i className="fa fa-4x fa-map-marker text-primary sr-icons" />
                      <h3>Discover</h3>
                      <p className="text-muted">
                        Venture out to all of the locations we&#39;ve hand-picked for you. We even
                        included a little background on each featured dessert vendor.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                      <i className="fa fa-4x fa-shopping-basket text-primary sr-icons" />
                      <h3>Enjoy</h3>
                      <p className="text-muted">
                        Present your vouchers at the participating locations to claim your in-store
                        or Sugarpost exclusive desserts - snap it, share it, and enjoy it!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                      <i className="fa fa-4x fa-share-alt text-primary sr-icons" />
                      <h3>Share</h3>
                      <p className="text-muted">
                        Refer your friends and earn credits. If enough friends sign up, you will get
                        a month free!
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
                    <h2 className="section-heading">Upcoming Vendors</h2>
                    <hr className="primary" />
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row no-gutter popup-gallery">
                  <div className="col-lg-offset-2 col-lg-8 col-md-12">
                    <img src="/assets/images/june-featured-desserts.png" className="img-responsive" alt="" />
                  </div>
                </div>
              </div>
            </section>
            <aside className="bg-dark">
              <div className="container text-center">
                <div className="call-to-action">
                  <br />
                  <h2>Subscribe Today</h2>
                  <a
                    href="/register/signup"
                    className="btn btn-default btn-xl sr-button"
                  >
                    Unlock Now
                  </a>
                  <br />
                  <br />
                </div>
              </div>
            </aside>
          </Element>
          {/* <aside className="bg-darker">
             <div className="container text-center">
               <div>
                 <h2>Featured On</h2>
                 <hr className="primary" />
                 <h4>Coming Soon...</h4>
               </div>
             </div>
          </aside> */}
          <Element name="contact">
            <section id="contact">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2 className="section-heading">Let&#39;s Get In Touch!</h2>
                    <hr className="primary" />
                    <p>
                      Interested in partnering with us? Inquiries? Questions? Press coverage?
                      That&#39;s great! We look forward to hearing from you! Send us an email and
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

  _closeModal() {
    this.props.dispatchCloseModal();
  }

}
HomeApp.propTypes = {
  dispatchCloseModal: React.PropTypes.func.isRequired,
  
  isModalOpen: React.PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isModalOpen: state.home.isModalOpen,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchCloseModal() {
      dispatch(actionCreator.closeModal());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeApp);
