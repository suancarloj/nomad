import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading2 } from '../components/Heading';
import { Text1, Text3, Text5, Text6 } from '../components/Text';
import { coverages } from './coveragesList';
import { InnerContainer, List, ListItem, Section } from './coverages.styles';

export function Coverages(props) {
  return (
    <Section>
      <InnerContainer>
        <div className="content">
          <Heading2>
            <FormattedMessage
              id="landing.coverage.title"
              defaultMessage="The best coverage for you"
            />
          </Heading2>
          <Text1>
            <FormattedMessage
              id="landing.coverage.description"
              defaultMessage="We designed a top-notch travel insurance and assistance for a fair price, so you can spend more on having fun. Your insurance travels with you all over the world, all year long."
            />
          </Text1>
          <List>
            {coverages.map((cov, idx) => (
              <ListItem key={idx}>
                <div>
                  <img src={cov.icon} alt="" />
                </div>
                <div>
                  {cov.optional && (
                    <Text6>
                      <FormattedMessage
                        defaultMessage="OPTIONNAL"
                        id="coverages.optional"
                      />
                    </Text6>
                  )}
                  <Text5>{cov.label}</Text5>
                  <Text3>{cov.description}</Text3>
                </div>
              </ListItem>
            ))}
          </List>
        </div>
        <div className="image">
          <picture>
            <source srcset="/images/valise@2x.jpg" media="(min-width: 800px)" />
            <source srcset="/images/valise@3x.jpg" media="(min-width: 600px)" />
            <img src="/images/valise.jpg" alt="" />
          </picture>
        </div>
      </InnerContainer>
    </Section>
  );
}
