import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  PrimaryButton,
  SecondaryButton,
  NamedLink
} from '../../components';

import css from './UserTrustPage.css';
import { FormattedMessage } from 'react-intl';
import routeConfiguration from '../../routeConfiguration';


const UserTrustPage = (props) => {

  const {closeFn, goHome} = props;

  return (
    <div className={css.PopupContainer}>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Security & Safety</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentabove}>
              <p>“Protecting, securing, and maintaining the information processed and handled through the Services is one of our top priorities, and it should be yours too.” -Stripe</p>
            </div>

            <div className={css.contentMain}>
              <h2>
              Keeping your sensitive information safe is our #1 priority.
              </h2>
              <p>
              This is why we have integrated Stripe as our payment system. Stripe is an online payment processing service you’ve probably run into before; it serves online giants like Google, Spotify, Uber, and Lyft, to name a few. It has received the most strict level of certification available in the payments industry.
              “Protecting, securing, and maintaining the information processed and handled through the Services is one of our top priorities, and it should be yours too.” -Stripe
              Thrift/ed never sees or touches your bank account information or social security number;
                this data is sent securely and directly to Stripe and is never stored on our site.
                In staying up to date with rigorous security standards and fraud protection protocols,
                <b>Stripe requires that users submit their bank account information (account number and routing number)
                as well as their social security number before they can sell an item.
                </b>
                  This guarantees
                that all transactions are protected, and efficient, safe payments on our site are ensured.
                You can read more about Stripe’s policy on sensitive information <a href="https://support.stripe.com/questions/date-of-birth-and-last-4-digits-of-social-security-number-ssn-requirement-for-us-stripe-accounts">here</a>
              </p>

              <p>
              If you aren’t yet comfortable entering your information, don’t worry: Thrift/ed is still for you! You will still be able to shop your campus thrift store as a buyer. You only need to enter your SSN and bank information once you wish to post something of your own for sale.
                You can read more about Stripe’s policies <a href="https://stripe.com/ssa">here</a>
                <br/>
                  <h1>Or</h1>
              reach out to us at Thrift/ed with any questions via email: info@thrifted.app
              </p>
              <div className={css.ButtonContainer}>
              <PrimaryButton
                className={css.getVerifiedButton}
                type="button"
                onClick={closeFn}
              >
                <FormattedMessage id="StripeConnectAccountStatusBox.getVerifiedButton" />
              </PrimaryButton>

              <SecondaryButton
                className={css.goBackToHome}
                type="button"
              >
                <FormattedMessage id="UserTrustPage.HomeButton" />
              </SecondaryButton>
              </div>
            </div>

          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </div>
  );
};

export default UserTrustPage;
