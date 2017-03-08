import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import { Modal } from 'react-bootstrap';
import Icon from '../../../common/components/Icon';


class ReferralDiv extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('_openModal', 'closeModal');
    this.state = {
      modalIsOpen: false,
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
                <Modal show={ this.state.modalIsOpen} onHide={this.closeModal}>
                  <Modal.Header>
                    <Modal.Title>Earn Credit for every Friend you refer!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    One fine body...
                  </Modal.Body>
                  <Modal.Footer>
                    <button className="btn" onClick={this.closeModal}>Close</button>
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
}

ReferralDiv.propTypes = {
  email: React.PropTypes.string,
};

export default ReferralDiv;
