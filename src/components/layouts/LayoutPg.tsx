import React from 'react';
import * as L from './styleLayouts';

type PropsLayoutPg = {
  children?: React.ReactNode | JSX.Element;
};
export const LayoutPg = ({ children }: PropsLayoutPg) => {
  return (
    <L.Container>
      {children}
    </L.Container>
  );
};
