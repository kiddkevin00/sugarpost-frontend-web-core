import reducers from '../../../../../../../lib/client/src/common/reducer/';

test('Home App reducer :: @@INIT', () => {
  let state = reducers(undefined, { type: '@@INIT' });

  expect(state).toEqual({
      home: { isModalOpen: true },
      auth: { isLoggedIn: false, forceUpdate: false, user: {} },
      signup: {
        formFullName: '',
        formEmail: '',
        formPassword: '',
        formConfirmPassword: '',
        isLoading: false,
        error: {
          isVisible: false,
          message: 'Something went wrong while signing up. Please try again.'
        }
      },
      login: {
        formEmail: '',
        formPassword: '',
        isLoading: false,
        error: { isVisible: false, message: 'The username or password is incorrect.' }
      },
      forgotPassword: {
        formEmail: '',
        isLoading: false,
        info: {
          isVisible: false,
          message: 'If a matching account was found, an email was sent to allow you to reset your password.'
        }
      },
      accountProfile: {
        formPassword: '',
        formNewPassword: '',
        formConfirmNewPassword: '',
        isLoading: false,
        info: { isVisible: false, message: 'Your profile has been updated.' },
        error: { isVisible: false, message: 'The original password is incorrect.' }
      },
      accountSubscription: {
        isLoading: false,
        info: {
          isVisible: false,
          message: 'Your subscription has been cancelled. Your vouchers will remain available until the end of current cycle.'
        },
        error: { isVisible: false, message: 'You haven\'t paid for the subscription yet.' }
      },
      payment: {
        isLoading: false,
        formReferralCode: '',
        isReferralCodeValid: false,
        info: { isVisible: false, message: 'Thank you! We have received your payment.' },
        error: { isVisible: false, message: 'Proceeding payment fails. Please try again.' }
      },
      referral: {
        isLoading: false,
        info: {
          isVisible: false,
          message: 'You have redeemed your next free e-package successfully.'
        },
        error: {
          isVisible: false,
          message: 'Something went wrong while redeeming. Please try again.'
        }
      },
      referralShare: {
        isModalOpen: false,
        formReferralEmail: '',
        isLoading: false,
        error: {
          isVisible: false,
          message: 'Something went wrong while sending referral email. Please try again.'
        },
        info: { isVisible: false, message: 'Referral email has sent out successfully.' }
      }
    });
});

test('Home App reducer :: HOME.CLOSE_MODAL', () => {
  const state = reducers({
    home: { isModalOpen: true },
    auth: { isLoggedIn: false, forceUpdate: false, user: {} },
    signup: {
      formFullName: '',
      formEmail: '',
      formPassword: '',
      formConfirmPassword: '',
      isLoading: false,
      error: {
        isVisible: false,
        message: 'Something went wrong while signing up. Please try again.'
      }
    },
    login: {
      formEmail: '',
      formPassword: '',
      isLoading: false,
      error: { isVisible: false, message: 'The username or password is incorrect.' }
    },
    forgotPassword: {
      formEmail: '',
      isLoading: false,
      info: {
        isVisible: false,
        message: 'If a matching account was found, an email was sent to allow you to reset your password.'
      }
    },
    accountProfile: {
      formPassword: '',
      formNewPassword: '',
      formConfirmNewPassword: '',
      isLoading: false,
      info: { isVisible: false, message: 'Your profile has been updated.' },
      error: { isVisible: false, message: 'The original password is incorrect.' }
    },
    accountSubscription: {
      isLoading: false,
      info: {
        isVisible: false,
        message: 'Your subscription has been cancelled. Your vouchers will remain available until the end of current cycle.'
      },
      error: { isVisible: false, message: 'You haven\'t paid for the subscription yet.' }
    },
    payment: {
      isLoading: false,
      formReferralCode: '',
      isReferralCodeValid: false,
      info: { isVisible: false, message: 'Thank you! We have received your payment.' },
      error: { isVisible: false, message: 'Proceeding payment fails. Please try again.' }
    },
    referral: {
      isLoading: false,
      info: {
        isVisible: false,
        message: 'You have redeemed your next free e-package successfully.'
      },
      error: {
        isVisible: false,
        message: 'Something went wrong while redeeming. Please try again.'
      }
    },
    referralShare: {
      isModalOpen: false,
      formReferralEmail: '',
      isLoading: false,
      error: {
        isVisible: false,
        message: 'Something went wrong while sending referral email. Please try again.'
      },
      info: { isVisible: false, message: 'Referral email has sent out successfully.' }
    }
  }, { type: 'HOME.CLOSE_MODAL' });

  expect(state).toEqual({
      home: { isModalOpen: false },
      auth: { isLoggedIn: false, forceUpdate: false, user: {} },
      signup: {
        formFullName: '',
        formEmail: '',
        formPassword: '',
        formConfirmPassword: '',
        isLoading: false,
        error: {
          isVisible: false,
          message: 'Something went wrong while signing up. Please try again.'
        }
      },
      login: {
        formEmail: '',
        formPassword: '',
        isLoading: false,
        error: { isVisible: false, message: 'The username or password is incorrect.' }
      },
      forgotPassword: {
        formEmail: '',
        isLoading: false,
        info: {
          isVisible: false,
          message: 'If a matching account was found, an email was sent to allow you to reset your password.'
        }
      },
      accountProfile: {
        formPassword: '',
        formNewPassword: '',
        formConfirmNewPassword: '',
        isLoading: false,
        info: { isVisible: false, message: 'Your profile has been updated.' },
        error: { isVisible: false, message: 'The original password is incorrect.' }
      },
      accountSubscription: {
        isLoading: false,
        info: {
          isVisible: false,
          message: 'Your subscription has been cancelled. Your vouchers will remain available until the end of current cycle.'
        },
        error: { isVisible: false, message: 'You haven\'t paid for the subscription yet.' }
      },
      payment: {
        isLoading: false,
        formReferralCode: '',
        isReferralCodeValid: false,
        info: { isVisible: false, message: 'Thank you! We have received your payment.' },
        error: { isVisible: false, message: 'Proceeding payment fails. Please try again.' }
      },
      referral: {
        isLoading: false,
        info: {
          isVisible: false,
          message: 'You have redeemed your next free e-package successfully.'
        },
        error: {
          isVisible: false,
          message: 'Something went wrong while redeeming. Please try again.'
        }
      },
      referralShare: {
        isModalOpen: false,
        formReferralEmail: '',
        isLoading: false,
        error: {
          isVisible: false,
          message: 'Something went wrong while sending referral email. Please try again.'
        },
        info: { isVisible: false, message: 'Referral email has sent out successfully.' }
      }
    });
});
