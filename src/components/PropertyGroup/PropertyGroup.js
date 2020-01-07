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

const checkSelected = (options, selectedOptions) => {
  //console.log(selectedOptions);
  let items = [];
  options.forEach(option => {
    if (includes(selectedOptions, option.key)) {
      items.push({
        key: option.key,
        label: option.label
      });
    }
  });
  return items;
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
  const { rootClassName, className, id, options, selectedOptions, twoColumns } = props;
  const classes = classNames(rootClassName || css.root, className);
  const listClasses = twoColumns ? classNames(classes, css.twoColumns) : classes;

  const checked = checkSelected(options, selectedOptions);
  //console.log(checked);
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
