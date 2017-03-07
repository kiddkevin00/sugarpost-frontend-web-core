import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import Icon from '../../../common/components/Icon';


class ReferralDiv extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('_onClick');
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
            <div onClick={ this._onClick }>
              <Icon iconType={ 'refer-mail' } />
            </div>
          </li>
        </ul>
      </div>
    )
  }

  _onClick() {
    // this will open mail modal
    console.log('herere in on click')
  }
}

ReferralDiv.propTypes = {
  email: React.PropTypes.string,
};

export default ReferralDiv;
