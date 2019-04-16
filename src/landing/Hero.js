import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PrimaryButton } from '../components/Button';
import { Heading1, Subheading1 } from '../components/Heading';
import { Text2 } from '../components/Text';
import { InnerContainer, Section } from './hero.styles';

export function Hero() {
  return (
    <Section>
      <InnerContainer>
        <div className="image">
          <picture>
            <source
              srcset="/images/coconut-mint-2@2x.jpg 2x"
              media="(min-width: 600px)"
            />
            <img src="/images/coconut-mint-2@2x.jpg" alt="coconut" />
          </picture>
        </div>
        <div className="content">
          <Heading1>
            <FormattedMessage
              id="landing.hero.title"
              defaultMessage="Finally, a well-designed travel insurance."
            />
          </Heading1>
          <Subheading1>
            <FormattedMessage
              id="landing.hero.subtitle"
              defaultMessage="Tailored for you. Simple. From 5€/month."
            />
          </Subheading1>
          <div>
            <PrimaryButton>
              <FormattedMessage
                id="landing.hero.callToAction"
                defaultMessage="Check my price"
              />
            </PrimaryButton>
          </div>
          <div className="backed-by">
            <Text2>
              <FormattedMessage
                id="landing.hero.backedby"
                defaultMessage="Backed by"
              />
            </Text2>
            <img src="/images/logo-lloyds.svg" alt="Lloyds syndicate logo" />
          </div>
        </div>
      </InnerContainer>
    </Section>
  );
}
