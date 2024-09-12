'use client'

import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

function TransitionalText() {
    const TEXTS = ['Appoinment', 'Consultant', 'Therapist',];
    const [index, setIndex] = React.useState(0); // Move this outside return

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearInterval(intervalId); // Changed to clearInterval
    }, []);

    return (
      <h1>
        <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </h1>
    );
}

export default TransitionalText;
