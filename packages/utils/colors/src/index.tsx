import * as React from 'react';

export const Foobar: React.FunctionComponent = () => <div>Foobar</div>;

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

// comment
