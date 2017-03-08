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
    const shareUrl = 'https://www.mysugarpost.com/';
    const title = 'Here\'s $2.5 to spend at MYSUGAROPST';

    return (
      <div>
        <p>Share the love with my friends via social media</p>
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
              <CustomIcon iconType={ 'email' } />
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
  email: React.PropTypes.string,
};

export default ReferralSection;
