/*
 * Renders a set of options with selected and non-selected values.
 *
 * The corresponding component when selecting the values is
 * FieldCheckboxGroup.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import includes from 'lodash/includes';

import css from './PropertyGroup.css';

const checkSelected = (publicData,selectedOptions) => {
  console.log(typeof publicData[selectedOptions] , publicData[selectedOptions] instanceof Array);

  if ((publicData[selectedOptions]) instanceof Array){
    let items = [];
    let key = 0;
    publicData[selectedOptions].forEach(option => {

      items.push({
        key: `${selectedOptions}-${key}`,
        label: option
      });
      key++;
    });
    return items;
  }

  return [{
    key:`${selectedOptions}-${0}`,
    label: publicData[selectedOptions]
  }];
};


const Item = props => {
  const { label } = props;
  const labelClass = css.selectedLabel;
  return (
    <li className={css.item}>
      <div className={css.labelWrapper}>
        <span className={labelClass}>{label}</span>
      </div>
    </li>
  );
};

const PropertyGroup = props => {
  const { rootClassName, className, id, publicData, selectedOptions, twoColumns } = props;
  const classes = classNames(rootClassName || css.root, className);
  const listClasses = twoColumns ? classNames(classes, css.twoColumns) : classes;

  const checked = checkSelected(publicData, selectedOptions);
  console.log(checked);
  return (
    <ul className={listClasses}>
      {checked.map(option => (
        <Item key={`${id}.${option.key}`} label={option.label} />
      ))}
    </ul>
  );
};

PropertyGroup.defaultProps = {
  rootClassName: null,
  className: null,
  selectedOptions: [],
  twoColumns: false,
};

const { arrayOf, bool, node, shape, string } = PropTypes;

PropertyGroup.propTypes = {
  rootClassName: string,
  className: string,
  id: string.isRequired,
  options: arrayOf(
    shape({
      key: string.isRequired,
      label: node.isRequired,
    })
  ),
  selectedOptions: arrayOf(string),
  twoColumns: bool,
};

export default PropertyGroup;
