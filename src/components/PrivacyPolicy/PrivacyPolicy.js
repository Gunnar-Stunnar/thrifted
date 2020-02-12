import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>This Policy was created/last updated on 2/12/20</p>

      <p>
        <strong>THRIFT/ED, LLC</strong>
      </p>
      <p>
        <strong>PRIVACY POLICY </strong>
      </p>
      <p>
        Thrift/ed, LLC (the “Company”) takes your privacy seriously. This privacy policy (the “Policy”) outlines the Company’s practices for protecting your private information. The Policy includes the types of information collected, used, and the choices individuals have regarding the use of their information.
      </p>
      <p>
        The Company provides a mobile and online marketplace for clothing, furniture, books and retail items which users upload photos of, list, and sell their items. Individuals can browse items through our website and mobile application and make an offer to purchase items.  Individuals communicate about the items and transaction through the mobile application.
      </p>
      <p>
        The Company provides its services through its mobile application and other software made available by the Company (together “Software”) and its website located at www.thrifted.app (the “Site”). The Software and Site are collectively known as the “Service”.  Individuals who use the Service are hereafter known as “Members”.
      </p>
      <p>
        <strong>INFORMATION COLLECTION, USE AND SHARING:</strong>
      </p>
      <p>
        The Company collects information from Members that subscribe to the Company’s Services. The Company collects information both actively and passively. The Company actively collects information Members provide in exchange for use of the Service. The information that is actively collected may include but is not limited to: Member name, address, email address, telephone number, date of birth, and other contact information (collectively, “Personal Information”). Information that is passively collected from Members may include but is not limited to: IP addresses and the type of device or browser the Member is using.
      </p>
      <p>
        The Company also passively collects non-personal information from Members through various technology, including cookies. The Company uses cookies to provide Members with a functional service. The Company is in no way monitoring Member activity outside of the Company’s website.
      </p>
      <p>
        The Company uses the Personal Information Members provide to create an account, to contact Members regarding the Service, and to make related announcements from time to time. The Company does not sell Member data or Personal Information. Member Personal Information is used for internal purposes only.
      </p>
      <p>
        If you choose to not provide the Company with any Personal Information, you may not use the Company’s Services.
      </p>
      <p>

        <strong>Children:</strong>
      </p>
      <p>

        The Company does not knowingly collect Personal Information from children under the age of 13. The Services is not intended to be used by, or targeted towards, children under the age of 13. By using the Site, Members are representing that they are above the age of 13. If you are under the age of 13, please do not submit any Personal Information through the Services.
      </p>
      <p>

        We encourage parents and legal guardians to monitor their child’s internet use and help enforce this Policy by instructing their child to never provide Personal Information to the Company without their permission. If you have reason to believe that a child under the age of 13 has provided Personal Information to the Company through the Services, please contact us and we will delete the information from our databases.
      </p>
      <p>
        <strong>WHEN INFORMATION IS SHARED:</strong>
      </p>
      <p>
        The Company is not in the business of selling Member’s Personal Information. There are certain circumstances in which the Company may provide Member’s Personal Information to certain third parties:
      </p>
      <p>

        <strong>Third Party Transfers:</strong>
      </p>
      <p>

        The Company may disclose your Personal Information when the Member requests the Company link their Member account with a third-party account. For example, if the Member requests their Member account be linked with their Facebook account, the Company may disclose information to the third party at that time.
      </p>
      <p>

        <strong>Legal Requirements:</strong>
      </p>
      <p>

        The Company may disclose your Personal Information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of the Company, act in urgent circumstances to protect the personal safety of users of the Services or the public, or to protect against legal liability.
      </p>
      <p>
        <strong>THIRD PARTY POLICIES:</strong>
      </p>
      <p>
        The Company’s Service provides links to other websites including social media platforms that may have their own information collection practices. To the extent that Members provide Personal Information to websites that link to or from the Company’s Service, different rules may apply to the use and disclosure of a Member’s Personal Information.
      </p>
      <p>
        This Policy does not apply to entities that the Company does not own or control, including third-party advertisers or developers associated with the Service. These entities are governed by their own privacy policies; therefore, Members should review those privacy policies to stay up to date.
      </p>
      <p>
        <strong>INFORMATION IN LISTING</strong>
      </p>
      <p>
        Any Personal Information that Members upload to the Service as content for a listing is done so at the Member’s own risk. The Company does not take responsibility for any information included in a Member’s listing and will not monitor listings on Member’s behalf.
      </p>
      <p>
        <strong>MEMBER CHOICE TO REMOVE INFORMATION</strong>
      </p>
      <p>
        If Members wish to remove any Personal Information provided to the Company, the Member may not use the Company’s Services after the removal.
      </p>
      <p>
        <strong>OTHER TERMS AND CONDITIONS </strong>
      </p>
      <p>
        Your access to and use of the Services is subject to the Thrift/ed Terms of Service.
      </p>
      <p>
        <strong>UPDATING AND REVISING PRIVACY POLICY</strong>
      </p>
      <p>
        As the Company updates and expands its Services, the Company may make changes to this Policy.  The Company reserves the right to change or modify this Policy and will do so from time to time. Each modification shall be effective immediately upon posting to the application as a alert notification.
      </p>
      <p>
        Members continued use of the Service after the revision date constitutes acceptance of the updated Policy. To stay up to date with the changes, Members should periodically visit this page to review the updated Policy.
      </p>
      <p>
      </p>
    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
