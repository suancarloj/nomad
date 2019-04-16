import React from 'react';
import { FormattedMessage } from 'react-intl';

export const testimonies = [
  {
    icon: '',
    location: (
      <FormattedMessage
        defaultMessage="Bruxelles"
        id="testimonies.0.location"
      />
    ),
    name: (
      <FormattedMessage defaultMessage="Nathalie" id="testimonies.0.name" />
    ),
    description: (
      <FormattedMessage
        defaultMessage="I broke my ankle in the middle of nowhere in Madagascar, Nomad got me help and treatment in no time. I truly don’t know how I would have done without you."
        id="testimonies.0.description"
      />
    ),
  },
  {
    icon: '',
    location: (
      <FormattedMessage
        defaultMessage="Braine-l'Alleud"
        id="testimonies.1.location"
      />
    ),
    name: <FormattedMessage defaultMessage="Morgane" id="testimonies.1.name" />,
    description: (
      <FormattedMessage
        defaultMessage="Thank you the Nomad Team for helping me out on the slopes and getting me back home safely!"
        id="testimonies.1.description"
      />
    ),
  },
  {
    icon: '',
    location: (
      <FormattedMessage defaultMessage="Wemmel" id="testimonies.2.location" />
    ),
    name: <FormattedMessage defaultMessage="Hamza" id="testimonies.2.name" />,
    description: (
      <FormattedMessage
        defaultMessage="I had booked a 3-week holiday in Thailand for me and my kids. We had to cancel everything 2 days before leaving as our house was robbed. Thanks to Nomad, I got a refund for all our bookings."
        id="testimonies.2.description"
      />
    ),
  },
];
