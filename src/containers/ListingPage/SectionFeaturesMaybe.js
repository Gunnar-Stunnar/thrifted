import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionFeaturesMaybe = props => {
  const { publicData, FeatureNameId, itemsFeatureName} = props;
  if (!publicData) {
    return null;
  }
  console.log(publicData);
  return itemsFeatureName ? (
    <div className={css.sectionFeatures}>
        <h2 className={css.featuresTitle}>
          <FormattedMessage id={FeatureNameId}/>
        </h2>
        <PropertyGroup
        id="ListingPage.features"
        publicData={publicData}
        selectedOptions={itemsFeatureName}
        twoColumns={true}
        />
    </div>
  ):null;
};

export default SectionFeaturesMaybe;
