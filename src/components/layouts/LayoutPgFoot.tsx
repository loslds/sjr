import React from 'react';
import * as L from './styleLayouts';

type PropsLayoutFoot = {
  children?: React.ReactNode | JSX.Element;
};
export const LayoutPgFoot = ({ children }: PropsLayoutFoot) => {
  return (
    <L.LayoutFoot>
      {children}
    </L.LayoutFoot>
  );
};
