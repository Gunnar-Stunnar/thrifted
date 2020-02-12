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

import css from './FAQPage.css';


const FAQPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="FAQ"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FAQ',
        description: 'Get qustions answered here',
        name: 'FAQ Page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Experience the unique Finnish home sauna.</h1>

          <div className={css.contentWrapper}>
            <p>
              <strong>FAQ</strong>
            </p>
            <ul>

              <li><strong>How do I sign up?</strong></li>
                <ul>

                  <li>All CU students can sign up for Thrift/ed from our home page. You will need to sign up with your colorado.edu email address. Once you verify your email you are ready to start shopping.
                  </li>
                </ul>

              <li><strong>How do I post an item for sale?</strong></li>
                  <ul>

                    <li>To post something for sale, you can click “Add listing” from the drop down menu. Take a few quality pics of your item (preferably on a body and against a neutral wall). Then fill out the information according to the items brand, condition, and set your own price. Lastly you will enter your payment information into our secure payment portal, Stripe. You will be notified when someone is interested in buying your item, and you can schedule a time and place to meet them. Once the transaction is complete then the money will be directly deposited into your account.
                    </li>
                  </ul>

              <li><strong>How do I buy something?</strong></li>
                    <ul>

                      <li>So you’ve found something you like, here’s how to purchase. Simply click “Buy” on the item’s listing page. You will need to enter your credit card information (but only once). Once you have purchased your item, your money will sit in escrow (fancy term meaning that your money will be held in our payment system, Stripe, until the seller has confirmed the sale. When the seller is notified of your purchase, they will message you through the website and you can determine a time and place to meet. When you meet up, it is important that you do not walk away with the item until you ensure it is in the condition and size that it was listed. If you are happy with your item, click confirmed and your money will be delivered to the seller.
                      </li>
                    </ul>

              <li><strong>Do I have to have an account to buy/sell?</strong></li>
                      <ul>

                        <li>Yes. In order to interact on Thrift/ed, you need to register your colorado email address.
                        </li>
                      </ul>

              <li><strong>Why do I have to enter my personal information to sell an item?</strong></li>
                        <ul>

                          <li>We use the Stripe payment portal, which is used by tech giants across industries including Lyft, Spotify, Doordash, and Glossier to name a few. In order to be a merchant on their portal, you must submit your SSN and bank information in order to protect against fraud. Thrift/ed never sees or holds this information. All of your information is securely handled by Stripe. You can read more about their policies before you enter this information while beginning to post your first listing.
                          </li>
                        </ul>

              <li><strong>How much money does Thrift/ed keep per sale?</strong></li>
                          <ul>

                            <li>Thrift/ed takes 7.5% from both the buyer and seller. Compared to other clothing exchange platforms, this is dirt cheap. Poshmark takes 20% from the seller, DePop takes 10% from the seller, and Buffalo Exchange takes 60% from the seller.
                            </li>
                          </ul>

              <li><strong>Is Thrift/ed online only?</strong></li>
                            <ul>

                              <li>Thrift/ed is CU’s online thrift store, so you can buy and sell completely online. Thrift/ed also has a HQ, in which you can come in as a seller and post your items directly from the store. We also sell exclusive items out of the shop but on a limited basis. You can find all of Thrift/ed’s available items online.
                              </li>
                            </ul>

              <li><strong>Is Thrift/ed only for CU students?</strong></li>
                              <ul>

                                <li>Sure is. In order to make our resale platform the safest and most convenient way to shop all buyers and sellers must be CU students with active colorado email addresses. This means you can shop and sell on your way to class, and without ever leaving campus.
                                </li>
                              </ul>

              <li><strong>How to decide what condition your clothes are in.</strong></li>
                                <ul>

                                  <li><strong>Perfect</strong></li>
                                    <ul>

                                      <li>Tags are still on, or it’s never been used/worn before. No stains, rips, or damage!
                                      </li>
                                    </ul>

                                    <li><strong>Great</strong></li>
                                      <ul>

                                        <li>May have been used/worn before, but has no stains, rips, or damage!
                                        </li>
                                      </ul>

                                      <li><strong>Lightly Used</strong></li>
                                        <ul>

                                          <li>Gently used/worn, with minimal signs of damage: light discoloration, minor tearing, stretched out seams, etc.
                                          </li>
                                        </ul>

                                        <li><strong>Used</strong></li>
                                          <ul>
                                            <li>Noticeable signs of use/wear. Visible stains, tears, split seams, etc.</li>
                                          </ul>
                                </ul>
            </ul>

          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;
