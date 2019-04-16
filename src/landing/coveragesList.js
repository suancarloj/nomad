import React from 'react';
import { FormattedMessage } from 'react-intl';
// import medic from "./icons/medic.svg";
// import plane from "./icons/plane.svg";
// import world from "./icons/world.svg";
// import ski from "./icons/ski.svg";
// import legal from "./icons/legal.svg";
// import bagage from "./icons/bagage.svg";

export const coverages = [
  {
    label: (
      <FormattedMessage
        defaultMessage="Medical Expense"
        id="coverages.medicalExpense.title"
      />
    ),
    description: (
      <FormattedMessage
        defaultMessage="No stress about your medical costs."
        id="coverages.medicalExpense.description"
      />
    ),
    icon: './icons/medic.svg',
    optional: false,
  },
  {
    label: (
      <FormattedMessage
        defaultMessage="24/7 Emergency Assistance"
        id="coverages.emergencyAssistance.title"
      />
    ),
    description: (
      <FormattedMessage
        defaultMessage="Medical & travel assistance. Available when you need us. Whenever. Wherever."
        id="coverages.emergencyAssistance.description"
      />
    ),
    icon: './icons/icon-call-center.svg',
    optional: false,
  },
  {
    label: (
      <FormattedMessage
        defaultMessage="Flight Cancellation"
        id="coverages.flightCancellation.title"
      />
    ),
    description: (
      <FormattedMessage
        defaultMessage="Sometimes life just happens. Get a refund for your bookings. No sweat."
        id="coverages.flightCancellation.description"
      />
    ),
    icon: './icons/plane.svg',
    optional: false,
  },
  {
    label: (
      <FormattedMessage
        defaultMessage="Repatriation & Rescue"
        id="coverages.repatriation.title"
      />
    ),
    description: (
      <FormattedMessage
        defaultMessage="We come looking for you. We get you back home."
        id="coverages.repatriation.description"
      />
    ),
    icon: './icons/world.svg',
    optional: false,
  },
  {
    label: (
      <FormattedMessage
        defaultMessage="Winter Sports"
        id="coverages.winterSports.title"
      />
    ),
    description: (
      <FormattedMessage
        defaultMessage="Ski pass refund, emergency support on the slopes."
        id="coverages.winterSports.description"
      />
    ),
    icon: './icons/ski.svg',
    optional: false,
  },
  {
    label: (
      <FormattedMessage
        defaultMessage="Liability & Legal Costs"
        id="coverages.liability.title"
      />
    ),
    description: (
      <FormattedMessage
        defaultMessage="Personal liability and associated legal expenses coverage."
        id="coverages.liability.description"
      />
    ),
    icon: './icons/legal.svg',
    optional: false,
  },
  {
    label: (
      <FormattedMessage defaultMessage="Luggage" id="coverages.luggage.title" />
    ),
    description: (
      <FormattedMessage
        defaultMessage="Stolen, lost or damaged. We cover it."
        id="coverages.luggage.description"
      />
    ),
    icon: './icons/bagage.svg',
    optional: true,
  },
  {
    label: (
      <FormattedMessage
        defaultMessage="Accident"
        id="coverages.accident.title"
      />
    ),
    description: (
      <FormattedMessage
        defaultMessage="Covers the financial consequences of a serious accident."
        id="coverages.accident.description"
      />
    ),
    icon: './icons/icon-accident.svg',
    optional: true,
  },
];
