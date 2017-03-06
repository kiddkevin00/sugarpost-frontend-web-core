import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';


class ReferralDiv extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      submitText: 'Send',
    };
  }

  render() {
    const { FacebookShareButton, TwitterShareButton } = ShareButtons;
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const shareUrl = 'https://www.mysugarpost.com/'
    const title = "Here's $2.5 to spend at MYSUGAROPST"
    return (
      <div>
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
          </li>
        </ul>
      </div>
    )
  }
}

ReferralDiv.propTypes = {
  email: React.PropTypes.string,
};

export default ReferralDiv;
