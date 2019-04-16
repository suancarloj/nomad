import React from 'react';
import { FormattedMessage } from 'react-intl';
import { InnerContainer } from '../components/InnerContainer';
import { Heading2 } from '../components/Heading';
import { Text1, Text2, Text3 } from '../components/Text';
import { Section, RuleList } from './legal.styles';

export function Legal() {
  return (
    <Section>
      <InnerContainer>
        <Heading2>
          <FormattedMessage
            id="landing.legal.title"
            defaultMessage="If you really insist 🤦‍♀"
          />
        </Heading2>
        <Text1>
          <FormattedMessage
            id="landing.legal.description"
            defaultMessage="Insurance is boring, we know… but let’s make sure you are eligible before you buy."
          />
        </Text1>
        <strong>
          <Text2>
            <FormattedMessage
              id="landing.legal.rules.title"
              defaultMessage="Rules to become a Nomad insured"
            />
          </Text2>
        </strong>
        <RuleList>
          <Text3 as="li">
            <FormattedMessage
              defaultMessage="You are a Belgian resident"
              id="landing.legal.rules.item.0"
            />
          </Text3>
          <Text3 as="li">
            <FormattedMessage
              defaultMessage="You have not yet started your trip"
              id="landing.legal.rules.item.1"
            />
          </Text3>
          <Text3 as="li">
            <FormattedMessage
              defaultMessage="Your trips are not longer than 90 or 180 days (subject to plan choice)"
              id="landing.legal.rules.item.1"
            />
          </Text3>
          <Text3 as="li">
            <FormattedMessage
              defaultMessage="High risk activities are not covered (eg. jet skiing, diving, etc.)"
              id="landing.legal.rules.item.3"
            />
          </Text3>
          <Text3 as="li">
            <FormattedMessage
              defaultMessage="Trips in Belgium are covered if at least one night accommodation is booked before the start of the trip"
              id="landing.legal.rules.item.4"
            />
          </Text3>
          <Text3 as="li">
            <FormattedMessage
              defaultMessage="You never had a cancelled or denied kidnaping insurance "
              id="landing.legal.rules.item.5"
            />
          </Text3>
          <Text3 as="li">
            <FormattedMessage
              defaultMessage="You don’t already have a reason to make a claim"
              id="landing.legal.rules.item.6"
            />
          </Text3>
        </RuleList>
        <strong>
          <Text2>
            <FormattedMessage
              id="landing.legal.mentions.title"
              defaultMessage="Legal Mentions (the even more boring stuff)"
            />
          </Text2>
        </strong>
        <ul>
          <Text3 as="li">
            <FormattedMessage
              defaultMessage="This Travel Insurance is underwritten by Lloyd’s Insurance Company S.A., registered at Bastion Tower, Marsveldplein 5, 1050 Brussels, Belgium and registered with the company registry under number 682.594.839 RLE (Brussels). It is an insurance company subject to the supervision of the National Bank of Belgium. Its Firm Reference Number(s) and other details can be found on www.nbb.be."
              id="landing.legal.mentions.item.0"
            />
          </Text3>
          <Text3 as="li">
            <FormattedMessage
              defaultMessage="It is administered by Qover S.A. - FSMA 115284A."
              id="landing.legal.mentions.item.1"
            />
          </Text3>
          <Text3 as="li">
            <FormattedMessage
              defaultMessage="The travel insurance is a non-life insurance product (Branch 18)."
              id="landing.legal.mentions.item.2"
            />
          </Text3>
          <Text3 as="li">
            <FormattedMessage
              defaultMessage="This insurance contract is for a period of one year. It shall be tacitly renewed for consecutive periods of one year."
              id="landing.legal.mentions.item.3"
            />
          </Text3>
          <Text3 as="li">
            <FormattedMessage
              defaultMessage="This insurance is subject to Belgian law."
              id="landing.legal.mentions.item.4"
            />
          </Text3>
        </ul>
      </InnerContainer>
    </Section>
  );
}
