import React from 'react';
import * as L from './styleLayouts';

type PropsLayoutHeader = {
  children?: React.ReactNode | JSX.Element;
};
export const LayoutPgHeader = ({ children }: PropsLayoutHeader) => {
  return (
    <L.LayoutHeader>
      {children}
    </L.LayoutHeader>
  );
};
