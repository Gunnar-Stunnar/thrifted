import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionFeaturesMaybe = props => {
  const { options, publicData, FeatureNameId, itemsFeatureName} = props;
  if (!publicData) {
    return null;
  }

  const selectedOptions = publicData && publicData[itemsFeatureName] ? publicData[itemsFeatureName] : [];
  return itemsFeatureName ? (
    <div className={css.sectionFeatures}>
        <h2 className={css.featuresTitle}>
          <FormattedMessage id={FeatureNameId}/>
        </h2>
        <PropertyGroup
        id="ListingPage.features"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={true}
        />
    </div>
  ):null;
};

export default SectionFeaturesMaybe;
