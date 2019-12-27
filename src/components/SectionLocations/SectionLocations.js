import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';


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
            name:"Formal Attire",
            img:"https://picsum.photos/200",
            searchQuery:"/"
          },          
          {
            name:"Game Day Gear",
            img:"https://picsum.photos/200",
            searchQuery:"/"
          },
          {
            name:"Wheels",
            img:"https://picsum.photos/200",
            searchQuery:"/"
          },
          {
            name:"Climb",
            img:"https://picsum.photos/200",
            searchQuery:"/"
          },
          {
            name:"Snow",
            img:"https://picsum.photos/200",
            searchQuery:"/"
          }
        ])}
        <NamedLink name="SearchPage" to={"/"} className={css.moreLink}>MORE</NamedLink>
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
