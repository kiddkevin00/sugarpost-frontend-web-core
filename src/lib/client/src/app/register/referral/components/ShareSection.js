import CustomIcon from '../../../../common/components/CustomIcon';
import BaseComponent from '../../../../common/components/BaseComponent';
import { ShareButtons, generateShareIcon } from 'react-share';
import { Modal } from 'react-bootstrap';
import React from 'react';

class ReferralSection extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_openModal', '_closeModal');
    this.state = {
      isModalOpen: false,
    };
  }

  render() {
    const { FacebookShareButton, TwitterShareButton } = ShareButtons;
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const shareUrl = 'https://www.mysugarpost.com/register/signup';
    const title = `Your friend ${this.props.myFullName} has given you 10% off discount ` +
      `for your first monthly dessert treats. To claim your the gift. sign up using ` +
      `the link: ${shareUrl} and enter the following refer code while paying:\n` +
      `${this.props.myReferCode}`;

    return (
      <div id="share-section">
        <p>Share the love</p>
        <ul className="list-inline">
          <li>
            <FacebookShareButton
              url={ shareUrl }
              title={ title }
            >
              <FacebookIcon size={ 34 } round={ true } />
            </FacebookShareButton>
          </li>
          <li>
            <TwitterShareButton
              url={ shareUrl }
              title={ title }
            >
              <TwitterIcon size={ 34 } round={ true } />
            </TwitterShareButton>
          </li>
          <li>
            <button
              type="button"
              className="btn-link btn-mail-modal"
              onClick={ this._openModal }
            >
              <CustomIcon type={ 'email' } />
            </button>
            <Modal show={ this.state.isModalOpen } onHide={ this._closeModal }>
              <Modal.Header>
                <Modal.Title>Earn Credit for every Friend you refer!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                One fine body...
              </Modal.Body>
              <Modal.Footer>
                <button className="btn" onClick={ this._closeModal }>Close</button>
              </Modal.Footer>
            </Modal>
          </li>
        </ul>
      </div>
    );
  }

  _openModal() {
    this.setState({ isModalOpen: true });
  }

  _closeModal() {
    this.setState({ isModalOpen: false });
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
