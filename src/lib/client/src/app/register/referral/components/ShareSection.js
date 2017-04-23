import actionCreator from '../actioncreators/shareSection';
import CustomIcon from '../../../../common/components/CustomIcon';
import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import { ShareButtons, generateShareIcon } from 'react-share';
import { Modal, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class ShareSection extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_openModal', '_closeModal', '_sendEmailToReferral');
  }

  render() {
    const { FacebookShareButton, TwitterShareButton } = ShareButtons;
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const shareUrl = 'https://www.mysugarpost.com/register/signup?' +
      `refer_code=${this.props.userReferralCode}`;
    const facebookTitle = '50% Discount Off Your First Sugarpost Subscription';
    const facebookDescription = 'Here is a 50% discount off your first month of Sugarpost’s ' +
      'premium dessert subscription service! To claim your discount, sign up now and enter the ' +
      `following referral code on the payment page: ${this.props.userReferralCode}`;
    const twitterDescription = 'Get 50% off your first month\'s subscription with @mysugarpost. ' +
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
          </li>
        </ul>

        <Modal show={ this.props.isModalOpen } onHide={ this._closeModal }>
          <Modal.Header>
            <Modal.Title>Earn credit for every friend you refer!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={ (e) => e.preventDefault() }>
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
                value={ this.props.formReferralEmail }
                onChange={ this._onChange.bind(this, 'ReferralEmail') } /* eslint-disable-line react/jsx-no-bind */
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
      </div>
    );
  }

  _sendEmailToReferral() {
    if (this.referralEmail.isValid()) {
      this.props.dispatchSendEmailToReferral(this.props.formReferralEmail, this.props.userFullName);
    } else {
      this.referralEmail.isValid();
    }
  }

  _onChange(field, value) {
    this.props.dispatchSetFormField(field, value);
  }

  _openModal() {
    this.props.dispatchOpenModal();
  }

  _closeModal() {
    this.props.dispatchCloseModal();
  }

}
ShareSection.propTypes = {
  dispatchOpenModal: PropTypes.func.isRequired,
  dispatchCloseModal: PropTypes.func.isRequired,
  dispatchSendEmailToReferral: PropTypes.func.isRequired,

  isModalOpen: PropTypes.bool.isRequired,
  formReferralEmail: PropTypes.string.isRequired,
  userFullName: PropTypes.string,
  userReferralCode: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  isInfoVisible: PropTypes.bool.isRequired,
  isErrorVisible: PropTypes.bool.isRequired,
  infoMsg: PropTypes.string.isRequired,
  errorMsg: PropTypes.string.isRequired,
};
ShareSection.defaultProps = {
  userFullName: 'loading...',
  userReferralCode: 'loading...',
};

function mapStateToProps(state) {
  return {
    isModalOpen: state.referralShare.isModalOpen,
    formReferralEmail: state.referralShare.formReferralEmail,
    userFullName: state.auth.user.fullName,
    userReferralCode: state.auth.user.referralCode,
    isLoading: state.referralShare.isLoading,
    isInfoVisible: state.referralShare.info.isVisible,
    infoMsg: state.referralShare.info.message,
    isErrorVisible: state.referralShare.error.isVisible,
    errorMsg: state.referralShare.error.message,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchOpenModal() {
      dispatch(actionCreator.openModal());
    },

    dispatchCloseModal() {
      dispatch(actionCreator.closeModal());
    },

    dispatchSetFormField(field, value) {
      dispatch(actionCreator.setFormField(field, value));
    },

    dispatchSendEmailToReferral(emailTo, emailFromName) {
      dispatch(actionCreator.sendEmailToReferral(emailTo, emailFromName));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareSection);
