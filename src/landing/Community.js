import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading2 } from '../components/Heading';
import { Text1 } from '../components/Text';
import { InnerContainer } from '../components/InnerContainer';
import { Section } from './community.styles';

export function Community() {
  return (
    <Section>
      <InnerContainer>
        <Heading2>
          <FormattedMessage
            id="landing.community.title"
            defaultMessage="Join our community"
          />
        </Heading2>
        <Text1>
          <FormattedMessage
            id="landing.community.description"
            defaultMessage="We’re building a community of Nomads who love to travel.
          Welcome 👋"
          />
        </Text1>
        <div>
          <form method="POST">
            <input type="email" name="email" required />
            <button type="submit">
              <FormattedMessage
                id="landing.community.send"
                defaultMessage="Send"
              />
            </button>
          </form>
        </div>
      </InnerContainer>
    </Section>
  );
}
