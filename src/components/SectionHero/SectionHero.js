import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

import css from './SectionHero.css';

import video_thrif from './video/video.mp4';
import background_lazyload from '../../assets/background-1440.jpg';

const SectionHero = props => {
  const { rootClassName, className, loggedIn } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>

        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>

        <video className={css.VideoPlayer} autoplay="autoplay" loop="loop" poster={background_lazyload} muted>
          <source src={video_thrif} type="video/mp4"></source>
          Video could not load
        </video>

        <NamedLink
          name={loggedIn ? "SearchListingsPage":"SignupPage"}
          className={css.heroButton}
        >

          <FormattedMessage id= {loggedIn ? "SectionHero.browseButton":"SectionHero.SignUpButton"}/>
        </NamedLink>
      </div>
    </div>
  );
};


SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;

/*
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h2>

          <NamedLink
            name={loggedIn ? "SearchListingsPage":"SignupPage"}
            className={css.heroButton}
          >

            <FormattedMessage id= {loggedIn ? "SectionHero.browseButton":"SectionHero.SignUpButton"}/>
          </NamedLink>
                </div>

 */
