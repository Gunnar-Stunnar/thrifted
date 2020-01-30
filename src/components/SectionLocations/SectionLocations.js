import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import buffStuffImage from './images/BuffStuff.jpg';
import fancyShitImage from './images/fancyshit.jpg';
import funkyPrintsImage from './images/funkyPrints.jpg';
import handmadeImage from './images/handmade.jpg';
import retroSkiImage from './images/RetroSki.jpg';

//https://picsum.photos/200
class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

/*const ItemCatagory = (name, items, catagoryLink) => {
  const itemsRender = items.map(i => Item(i.name, i.image, i.searchQuery));
  return (
    <div>
      <h2 className={css.name}>{name}</h2>
      <div className={css.catagoryContainer}>
      {itemsRender}
      <NamedLink name="SearchPage" to={catagoryLink} className={css.moreLink}>MORE...</NamedLink>
      </div>
    </div>
  );
}

const Item = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ itemName: nameText }}
        />
      </div>
    </NamedLink>
  );
};
Build out actual items
*/

const catagoryObjects = (catagories) =>
{

return catagories.map(i => {
return(
  <NamedLink name="SearchPage" to={{ search: i.searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={i.img} alt={i.name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ itemName: i.name }}
        />
      </div>
  </NamedLink>
)});

}

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {catagoryObjects([
          {
            name:"Buff Stuff",
            img:buffStuffImage,
            searchQuery:"/"
          },          
          {
            name:"Fancy Sh*t",
            img:fancyShitImage,
            searchQuery:"/"
          },
          {
            name:"Funky Print",
            img:funkyPrintsImage,
            searchQuery:"/"
          },
          {
            name:"handmade",
            img:handmadeImage,
            searchQuery:"/"
          },
          {
            name:"Retro Ski Gear",
            img:retroSkiImage,
            searchQuery:"/"
          }
        ])}

      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
