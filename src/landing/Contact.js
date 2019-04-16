import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading2 } from '../components/Heading';
import { Text1 } from '../components/Text';
import { InnerContainer, Section } from './contact.styles';

export function Contact() {
  return (
    <Section>
      <InnerContainer>
        <div className="image" />
        <div className="content">
          <Heading2>
            <FormattedMessage
              id="landing.contact.title"
              defaultMessage="We are where you are"
            />
          </Heading2>
          <Text1>
            <FormattedMessage
              id="landing.contact.description"
              defaultMessage="Talk to us whenever you need to on whatever channel you prefer. 24/7 emergency assistance on 0800/xx xxx."
            />
          </Text1>
          <Text1>
            <strong style={{ fontWeight: 500 }}>
              <FormattedMessage
                id="landing.contact.claim"
                defaultMessage="Claim via your mobile in just 5 mins."
              />
            </strong>
          </Text1>
        </div>
      </InnerContainer>
    </Section>
  );
}
