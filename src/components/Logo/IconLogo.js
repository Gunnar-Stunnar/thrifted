import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = props => {
  const { className, ...rest } = props;

  return (
    <div className={className}>
    <svg
      {...rest}
      width="50"
      height="50"
      viewBox="0 0 2834 3319"
      xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="#FFF" stroke="#FFF"  >
        <path d="M1359.1,873.1c0,0-37.5,4.5-60,55.5s0,72-43.5,90c-43.5,18-165-25.5-147-79.5c18-54,49.5-180,249-222
          c199.5-42,345,106.5,366,241.5s-70.5,264-118.5,321c-48,57-87,135-202.5,84c-115.5-51-21-175.5,48-201c69-25.5,97.5-34.5,115.5-60
          c18-25.5,45-106.5-12-172.5C1497.1,864.1,1429.6,859.6,1359.1,873.1z"
           stroke="none"/>
        <path d="M1528.6,1545.1c0,0-49.5-93-106.5-82.5c-57,10.5-91.5,4.5-108,91.5c-88.5,54-996,672-996,672
          s-181.5,168,63,373.5c375,3,2026.4,0,2026.4,0s258-141,151.5-312C2331,2076.1,1524.1,1569.1,1528.6,1545.1z"
          fill="none"  stroke-width="150"/>
          </g>
    </svg>
    
    </div>
    
  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
