import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './Aboutus.png';
import image2 from './Aboutus2.png';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Saunatime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>About Us</h1>
          <div className={css.imageContainer}>
          <img className={css.coverImage} src={image} alt="My first ice cream." />
          <img className={css.coverImage} src={image2} alt="My first ice cream." />
          </div>
          <div className={css.contentWrapper}>

            <div className={css.contentMain}>

              <p>
                Julie Kinsella and Marlee Durand met during one fateful summer when they
                became random roommates on Lincoln Pl. They became fast friends and both
                began their own sustainable clothing businesses. Marlee started a recycled
                apparel company called Pine Life and Julie began testing an online thrift
                store for Marquette University. After spending years on their independent
                projects, Marlee and Julie decided to join forces. As the co-founders of an
                online thrift store, it is their mission to make resale as accessible as
                possible for college students.
              </p>
                <p>Thrift/ed’s commitment to resale is based on
                Marlee and Julie’s passionate desire to eliminate clothing waste on college
                campuses and kill the industry of fast fashion <strong>...which contributes
                to 52 million TONS of waste every year!!!</strong> We want Thrift/ed to work
                for you, so if you have any suggestions on how we can better serve you please
                shoot us an email at info@thrifted.app.
              </p>

            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
