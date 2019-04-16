import React from "react";
import { FormattedMessage } from "react-intl";
import { Heading2 } from "../components/Heading";
import { Section } from "./compare.styles";
import { InnerContainer } from "../components/InnerContainer";

export function Compare() {
  return (
    <Section>
      <InnerContainer>
        <Heading2>
          <FormattedMessage
            id="landing.comparaison.title"
            defaultMessage="Not convinced? Compare for yourself"
          />
        </Heading2>
      </InnerContainer>
    </Section>
  );
}
