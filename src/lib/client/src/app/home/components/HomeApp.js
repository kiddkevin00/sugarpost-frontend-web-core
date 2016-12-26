import homeStore from '../stores/homeStore';
import homeActionCreator from '../actions/homeActionCreator';
import SubscribeForm from './SubscribeForm';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';

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
      <div className="container-fluid">
        <div className="row">
          <div className="jumbotron jumbotron-custom">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h1 className="headline-custom">SUGARPOST</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h2 className="sub-headline-custom">
                    Premium subscription service to a sweet
                    adventure
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="lines-break-custom" />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-7">
                  <p className="subscribe-text">
                    For exclusive offers and updates on the launch,please subscribe by entering
                    your e-mail below.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-7">
                  <SubscribeForm onSubmit={ HomeApp._onSubmit } />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-7">
                  <h6 className={ `${this.state.subscribeFeedbackCssClass} subscribe-fb-custom` }>
                    { this.state.subscribeFeedbackTxt }
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xs-12 col-sm-9 col-md-8 col-lg-10 text-left"
          >
            <h3 className="about-us-custom">
              Sugarpost is a New York based online monthly premium subscription service that
              provides its customers with e-packages of trendy and innovative dessert deals
              ranging from frozen treats to baked goods. We have scoured the internet and
              attained insight from various food bloggers and dessert connoisseurs to deliver
              our subscribers a selection of unique desserts around New York City!
            </h3>
          </div>
          <div
            className="col-xs-offset-8 col-sm-offset-0 col-md-offset-1 col-lg-offset-0
              col-xs-4 col-sm-3 col-md-3 col-lg-2"
          >
            <img className="logo-custom" src="/assets/images/sugarpost-logo.png" alt="SUGARPOST" />
          </div>
        </div>
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
