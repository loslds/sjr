import React from 'react';
import { LayoutPgHeader } from './LayoutPgHeader';
import * as L from './styleLayouts';

type PropsLayoutMain = {
  children?: React.ReactNode | JSX.Element;
};
export const LayoutPgMain = ({ children }: PropsLayoutMain) => {
  return (
    <L.LayoutMain>
      {children}
    </L.LayoutMain>          
  );
};