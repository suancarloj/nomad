import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Coverages } from './landing/Coverages';
import { Hero } from './landing/Hero';
import { Contact } from './landing/Contact';
import { Compare } from './landing/Compare';

import { Ambassador } from './landing/Ambassador';
import './styles.css';
import { Backers } from './landing/Backers';
import { Community } from './landing/Community';
import { Legal } from './landing/Legal';
import { Testimonial } from './landing/Testimonial';

function App() {
  return (
    <IntlProvider messages={{}} textComponent={React.Fragment}>
      <>
        <Hero />
        <Coverages />
        <Contact />
        <Compare />
        <Ambassador />
        <Testimonial />
        <Backers />
        <Community />
        <Legal />
      </>
    </IntlProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
