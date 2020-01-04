/* eslint-disable no-console */
import { types as sdkTypes } from '../../util/sdkLoader';
import { LINE_ITEM_NIGHT } from '../../util/types';
import BiddingForm from './BiddingForm';

const { Money } = sdkTypes;

export const Form = {
  component: BiddingForm,
  props: {
    unitType: LINE_ITEM_NIGHT,
    onSubmit: values => {
      console.log('Submit BookingDatesForm with values:', values);
    },
    price: new Money(1099, 'USD'),
  },
  group: 'forms',
};
