import React from 'react';
import * as B from './styleHeader';

type PropsBarHFlex = {
  children?: React.ReactNode | JSX.Element;
};
const BarHeaderFlex: React.FC<PropsBarHFlex> = ({ children }) => {
  return (
    <B.BarFlex>
      {children}
    </B.BarFlex>
  );
};
export default BarHeaderFlex;