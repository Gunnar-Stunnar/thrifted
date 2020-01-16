import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { PrimaryButton, SecondaryButton } from '../../components';

import css from './TransactionPanel.css';

// Functional component as a helper to build ActionButtons for
// provider when state is preauthorized
const SaleActionButtonsMaybe = props => {
  const {
    className,
    rootClassName,
    showButtons,
    ReceivedInProgress,
    IssueInProgress,
    receivedSaleError,
    IssueSaleError,
    onReceivedSale,
    onIssueWithSale,
  } = props;

  const buttonsDisabled = ReceivedInProgress || IssueInProgress;

  const acceptErrorMessage = receivedSaleError ? (
    <p className={css.actionError}>
      <FormattedMessage id="TransactionPanel.receivedFailed" />
    </p>
  ) : null;
  const declineErrorMessage = IssueSaleError ? (
    <p className={css.actionError}>
      <FormattedMessage id="TransactionPanel.IssueFailed" />
    </p>
  ) : null;

  const classes = classNames(rootClassName || css.actionButtons, className);

  return showButtons ? (
    <div className={classes}>
      <div className={css.actionErrors}>
        {acceptErrorMessage}
        {declineErrorMessage}
      </div>
      <div className={css.actionButtonWrapper}>
        <SecondaryButton
          inProgress={IssueInProgress}
          disabled={buttonsDisabled}
          onClick={onIssueWithSale}
        >
          <FormattedMessage id="TransactionPanel.notReceivedButton" />
        </SecondaryButton>
        <PrimaryButton
          inProgress={ReceivedInProgress}
          disabled={buttonsDisabled}
          onClick={onReceivedSale}
        >
          <FormattedMessage id="TransactionPanel.receivedButton" />
        </PrimaryButton>
      </div>
    </div>
  ) : null;
};

export default SaleActionButtonsMaybe;
