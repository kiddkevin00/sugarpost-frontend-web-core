import CustomIcon from '../../../../common/components/CustomIcon';
import BaseComponent from '../../../../common/components/BaseComponent';
import { ShareButtons, generateShareIcon } from 'react-share';
import React from 'react';

class ReferralSection extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onClick');
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
      <div>
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
            <div onClick={ this._onClick }>
              <CustomIcon type="email" />
            </div>
          </li>
        </ul>
      </div>
    );
  }

  _onClick() {
    // this will open mail modal
    console.log('herere in on click');
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
  myReferCode: 'N/A (In order start earning referral credits, please subscribe to our service.)',
};

export default ReferralSection;
