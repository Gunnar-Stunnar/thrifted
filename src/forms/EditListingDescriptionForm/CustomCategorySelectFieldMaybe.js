import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';
import { FormSpy } from 'react-final-form';

const CustomCategorySelectFieldMaybe = props => {
  const { name, id, categories, intl} = props;
  const categoryLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.categoryLabel',
  });
  const categoryPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.categoryPlaceholder',
  });
  const categoryRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.categoryRequired',
    })
  );

  const categoryHeader = catgor =>{
    return(
      <option disabled value="">
        {catgor.label}
      </option>
    )
  };

  const categoryBuilder = (catgor) => {

    return catgor.subCategories.map((subC) => (
        <option key={subC.key} value={subC.key}>
          {subC.label}
        </option>
      )
    )

  };

  return categories ? (

    <FieldSelect
      className={css.category}
      name={name}
      id={id}
      updateParentSelect
      label={categoryLabel}
      validate={categoryRequired}
    >
      <option disabled value="">
        {categoryPlaceholder}
      </option>

      {
        categories.map((c) => {
          return(
            [
            categoryHeader(c),
            categoryBuilder(c)
            ]
          );
        })
      }
    </FieldSelect>
  ) : null;
};

export default CustomCategorySelectFieldMaybe;
