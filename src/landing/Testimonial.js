import React from 'react';
import { InnerContainer } from '../components/InnerContainer';
import { Text3 } from '../components/Text';
import { testimonies } from './testimonies';

export function Testimonial() {
  return (
    <section>
      <InnerContainer>
        {testimonies.map((t, idx) => (
          <Text3>{t.description}</Text3>
        ))}
      </InnerContainer>
    </section>
  );
}
