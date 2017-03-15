import CustomIcon from '../../../../common/components/CustomIcon';
import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import { ShareButtons, generateShareIcon } from 'react-share';
import { Modal, Form } from 'react-bootstrap';
import React from 'react';

class ReferralSection extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_openModal', '_closeModal', '_onChange', '_sendReferralEmail');
    this.state = {
      friendEmail: '',
      isModalOpen: false,
    };
  }

  render() {
    const { FacebookShareButton, TwitterShareButton } = ShareButtons;
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const shareUrl = 'https://www.mysugarpost.com/register/signup?' +
      `refer_code=${this.props.myReferCode}`;
    const title = 'Here\'s 10% discount at Sugarpost';
    const description = `Your friend ${this.props.myFullName} has given you 10% off discount ` +
      'for your first monthly dessert treats. To claim your the gift. Sign up now and ' +
      `enter the following refer code in the payment page: ${this.props.myReferCode}\n\n`;

    return (
      <div id="share-section">
        <p>Share the love</p>
        <ul className="list-inline">
          <li>
            <FacebookShareButton
              url={ shareUrl }
              title={ title }
              description={ description }
            >
              <FacebookIcon size={ 34 } round={ true } />
            </FacebookShareButton>
          </li>
          <li>
            <TwitterShareButton
              url={ shareUrl }
              title={ description }
            >
              <TwitterIcon size={ 34 } round={ true } />
            </TwitterShareButton>
          </li>
          <li>
            <button
              onClick={ this._openModal }
              type="button"
              className="btn-link btn-mail"
            >
              <CustomIcon type={ 'email' } />
            </button>
            <Modal show={ this.state.isModalOpen } onHide={ this._closeModal }>
              <Modal.Header>
                <Modal.Title>Earn credit for every friend you refer!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <FormInput
                    text="Friend's Email Address"
                    ref={ (formInputObj) => { this.friendEmail = formInputObj; } }
                    validate={ FormInput.validateEmailField }
                    value={ this.state.friendEmail }
                    onChange={ this._onChange } /* eslint-disable-line react/jsx-no-bind */
                    errorMessage="Email is invalid"
                    emptyMessage="Email can't be empty"
                  />
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <button
                  onClick={ this._sendReferralEmail }
                  type="click"
                  className="btn btn-primary"
                >
                  Refer Now
                </button>
                <button className="btn btn-default" onClick={ this._closeModal }>Close</button>
              </Modal.Footer>
            </Modal>
          </li>
        </ul>
      </div>
    );
  }

  _openModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  _closeModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  _onChange(value) {
    this.setState({
      friendEmail: value,
    });
  }

  _sendReferralEmail() {
    if (this.friendEmail.isValid()) {
      //[TODO] This will create action to send email.
    } else {
      this.friendEmail.isValid();
    }
  }

}
ReferralSection.propTypes = {
  myEmail: React.PropTypes.string,
  myFullName: React.PropTypes.string,
  myReferCode: React.PropTypes.string,
};
ReferralSection.defaultProps = {
  myEmail: 'Loading...',
  myFullName: 'Loading...',
  myReferCode: 'N/A',
};

export default ReferralSection;
