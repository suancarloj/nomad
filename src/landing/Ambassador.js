import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading2 } from '../components/Heading';

import { PrimaryButton } from '../components/Button';
import { Description, InnerContainer, Section } from './ambassador.styles';

export function Ambassador() {
  return (
    <Section>
      <InnerContainer>
        <div className="image">
          <picture>
            <source
              srcset="/images/ambassador@3x.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcset="/images/ambassador@2x.jpg"
              media="(min-width: 600px)"
            />
            <source srcset="/images/ambassador-mobile@2x.jpg" />
            <img src="/images/ambassador@2x.jpg" alt="" />
          </picture>
        </div>
        <div className="content">
          <Heading2>
            <FormattedMessage
              id="landing.ambassador.title"
              defaultMessage="Become a Nomad Ambassador & win 20€"
            />
          </Heading2>
          <Description>
            <FormattedMessage
              id="landing.ambassador.description"
              defaultMessage=""
            />
          </Description>
          <PrimaryButton>
            <FormattedMessage
              id="landing.ambassador.getMyInsurance"
              defaultMessage="Get my insurance"
            />
          </PrimaryButton>
        </div>
      </InnerContainer>
    </Section>
  );
}
