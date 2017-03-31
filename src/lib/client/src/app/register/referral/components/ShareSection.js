import referralActionCreator from '../actions/referralActionCreator';
import CustomIcon from '../../../../common/components/CustomIcon';
import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import { ShareButtons, generateShareIcon } from 'react-share';
import { Modal, Form } from 'react-bootstrap';
import React from 'react';
import classNames from 'classnames';

class ShareSection extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_openModal', '_closeModal', '_onChange', '_sendEmailToReferral');
    this.state = {
      referralEmail: '',
      isModalOpen: false,
    };
  }

  render() {
    const { FacebookShareButton, TwitterShareButton } = ShareButtons;
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const shareUrl = 'https://www.mysugarpost.com/register/signup?' +
      `refer_code=${this.props.myReferralCode}`;
    const facebookTitle = '10% Discount Off Your First Sugarpost Subscription';
    const facebookDescription = 'Here is a 10% discount off your first month of Sugarpost’s ' +
      'premium dessert subscription service! To claim your discount, sign up now and enter the ' +
      `following referral code on the payment page: ${this.props.myReferralCode}`;
    const twitterDescription = 'Get 10% off your first month\'s subscription with @mysugarpost. ' +
      'Claim this offer now:';
    const alertSuccessBoxClasses = classNames({
      alert: true,
      'alert-success': true,
      'alert-dismissible': true,
      collapse: !this.props.isInfoVisible,
    });
    const alertErrorBoxClasses = classNames({
      alert: true,
      'alert-danger': true,
      'alert-dismissible': true,
      collapse: !this.props.isErrorVisible,
    });

    return (
      <div id="share-section">
        <p>Share with Friends</p>
        <ul className="list-inline">
          <li>
            <FacebookShareButton
              url={ shareUrl }
              title={ facebookTitle }
              description={ facebookDescription }
            >
              <FacebookIcon size={ 34 } round={ true } />
            </FacebookShareButton>
          </li>
          <li>
            <TwitterShareButton
              url={ shareUrl }
              title={ twitterDescription }
            >
              <TwitterIcon size={ 34 } round={ true } />
            </TwitterShareButton>
          </li>
          <li>
            <button
              onClick={ this._openModal }
              className="btn-link"
              type="button"
            >
              <CustomIcon type={ 'email' } />
            </button>
            <Modal show={ this.state.isModalOpen } onHide={ this._closeModal }>
              <Modal.Header>
                <Modal.Title>Earn credit for every friend you refer!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <div className={ alertSuccessBoxClasses } role="alert">
                    <a className="close" data-dismiss="alert">×</a>
                    <i className="fa fa-check-square-o" />
                    &nbsp; { this.props.infoMsg }
                  </div>
                  <div className={ alertErrorBoxClasses } role="alert">
                    <a className="close" data-dismiss="alert">×</a>
                    <i className="fa fa-exclamation-triangle" />
                    &nbsp; { this.props.errorMsg }
                  </div>
                  <FormInput
                    text="Friend's Email Address"
                    ref={ (formInputObj) => { this.referralEmail = formInputObj; } }
                    validate={ FormInput.validateEmailField }
                    value={ this.state.referralEmail }
                    onChange={ this._onChange } /* eslint-disable-line react/jsx-no-bind */
                    errorMessage="Email is invalid"
                    emptyMessage="Email can't be empty"
                  />
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <button
                  onClick={ this._sendEmailToReferral }
                  className="btn btn-primary"
                  type="button"
                >
                  Refer Now
                </button>
                <button
                  onClick={ this._closeModal }
                  className="btn btn-default"
                  type="button"
                >
                  Close
                </button>
              </Modal.Footer>
            </Modal>
          </li>
        </ul>
      </div>
    );
  }

  _sendEmailToReferral() {
    if (this.referralEmail.isValid()) {
      referralActionCreator.sendEmailToReferral(this.state.referralEmail, this.props.myFullName);
    } else {
      this.referralEmail.isValid();
    }
  }

  _onChange(value) {
    this.setState({
      referralEmail: value,
    });
  }

  _openModal() {
    referralActionCreator.openModal();

    this.setState({
      isModalOpen: true,
      referralEmail: '',
    });
  }

  _closeModal() {
    referralActionCreator.closeModal();

    this.setState({
      isModalOpen: false,
    });
  }

}
ShareSection.propTypes = {
  isInfoVisible: React.PropTypes.bool.isRequired,
  isErrorVisible: React.PropTypes.bool.isRequired,
  infoMsg: React.PropTypes.string.isRequired,
  errorMsg: React.PropTypes.string.isRequired,
  myFullName: React.PropTypes.string,
  myReferralCode: React.PropTypes.string,
};
ShareSection.defaultProps = {
  infoMsg: 'Request has been completed.',
  errorMsg: 'Oops! Something went wrong. Please try again.',
  myFullName: 'Loading...',
  myReferralCode: '',
};

export default ShareSection;
