import React from 'react';
import { createListing } from '../../util/test-data';
import { LISTING_STATE_CLOSED } from '../../util/types';
import BiddingPanel from './BiddingPanel';
import css from './BiddingPanelExample.css';

export const Default = {
  component: BiddingPanel,
  props: {
    className: css.example,
    listing: createListing('listing_1'),
    onSubmit: values => console.log('Submit:', values),
    title: <span>Booking title</span>,
    subTitle: 'Hosted by Author N',
    authorDisplayName: 'Author Name',
    onManageDisableScrolling: () => null,
  },
};

export const WithClosedListing = {
  component: BiddingPanel,
  props: {
    className: css.example,
    listing: createListing('listing_1', { state: LISTING_STATE_CLOSED }),
    onSubmit: values => console.log('Submit:', values),
    title: <span>Booking title</span>,
    subTitle: 'Hosted by Author N',
    authorDisplayName: 'Author Name',
    onManageDisableScrolling: () => null,
  },
};
