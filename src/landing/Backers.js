import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading2 } from '../components/Heading';
import { Text1, Text2 } from '../components/Text';
import { InnerContainer } from '../components/InnerContainer';
import { Section } from './backers.styles';

export function Backers() {
  return (
    <Section>
      <InnerContainer>
        <Heading2>
          <FormattedMessage
            id="landing.backers.title"
            defaultMessage="Backed by the world’s best partners"
          />
        </Heading2>
        <Text1 as="p">
          <FormattedMessage
            id="landing.backers.description"
            defaultMessage="We're all about fun and holidays but we take your protection very seriously.  This is why we teamed up with the most reliable partners to create your coverage."
          />
        </Text1>
        <div className="partner-logo-container">
          <div className="backer">
            <img src="/images/logo-qover.svg" alt="" />
            <Text2>
              <FormattedMessage
                id="landing.backers.qover"
                defaultMessage="Our mother company, Qover is the world’s first insurance-as-a-service. 100% certified by the FSMA (Financial Services & Markets Authority)."
              />
            </Text2>
          </div>

          <div className="backer">
            <img
              src="/images/logo-allianz.svg"
              srcSet="/images/logo-allianz@2x.jpg 2x, /images/logo-allianz@3x.jpg 3x"
              alt=""
            />
            <Text2>
              <FormattedMessage
                id="landing.backers.allianz"
                defaultMessage="A no-brainer. Allianz Global Assistance is one of the best travel assistance companies in the world."
              />
            </Text2>
          </div>
          <div className="backer">
            <img src="/images/logo-lloyds.svg" alt="" />
            <Text2>
              <FormattedMessage
                id="landing.backers.lloyds"
                defaultMessage="The world’s specialist insurance market. We outsourced the insurance risk to the best."
              />
            </Text2>
          </div>
        </div>
      </InnerContainer>
    </Section>
  );
}
