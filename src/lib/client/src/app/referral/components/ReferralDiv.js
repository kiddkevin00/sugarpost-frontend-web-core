import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import { Modal, Form } from 'react-bootstrap';
import Icon from '../../../common/components/Icon';
import FormInput from '../../../common/components/FormInput';


class ReferralDiv extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('_openModal', 'closeModal', 'handleToEmail', 'sendReferEmail');
    this.state = {
      modalIsOpen: false,
      friendEmail: '',
    };
  }

  render() {
    const { FacebookShareButton, TwitterShareButton } = ShareButtons;
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const shareUrl = 'https://www.mysugarpost.com/'
    const title = "Here's $2.5 to spend at MYSUGAROPST"

    return (
      <div className="refer-div">
        <p>Share my codes with friend's via social media</p>
        <ul className="list-inline">
          <li>
            <FacebookShareButton
              url={ shareUrl }
              title={ title }
            ><FacebookIcon size={ 34 } round={ true } />
            </FacebookShareButton>
          </li>
          <li>
            <TwitterShareButton
              url={ shareUrl }
              title={ title }
            ><TwitterIcon size={ 34 } round={ true } />
            </TwitterShareButton>
          </li>
          <li>
            <div>
              <button
                type="button"
                className="btn-link btn-mail-modal"
                onClick={ this._openModal }
              ><Icon iconType={ 'refer-mail' } />
              </button>
              <div className="static-modal">
                <Modal show={ this.state.modalIsOpen} onHide={ this.closeModal }>
                  <Modal.Header>
                    <Modal.Title>Earn Credit for every Friend you refer!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body bsClass="refer-modal">
                    <Form horizontal={ true }>
                      <FormInput
                        text="Friend's Email Address"
                        ref={ (formInputObj) => { this.friendEmail = formInputObj; } }
                        validate={ FormInput.validateEmailField }
                        value={ this.state.friendEmail }
                        onChange={ this.handleToEmail } /* eslint-disable-line react/jsx-no-bind */
                        errorMessage="Email is invalid"
                        emptyMessage="Email can't be empty"
                      />
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <button
                      className="btn btn-primary"
                      onClick={ this.sendReferEmail }
                    >Refer
                    </button>
                    <button className="btn" onClick={ this.closeModal }>Cancel</button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }

  _openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  handleToEmail(value) {
    this.setState({ friendEmail: value });
  }
  sendReferEmail() {
    if (this.friendEmail.isValid()) {
      //this will create action to send email
    }
  }
}

ReferralDiv.propTypes = {
  email: React.PropTypes.string,
};

export default ReferralDiv;
