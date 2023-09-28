import React from 'react';
import * as B from './styleHeader';

type PropsBarHMain = {
  children?: React.ReactNode | JSX.Element;
};
const BarHeaderMain: React.FC<PropsBarHMain> = ({ children }) => {
  return (
    <B.BarContainer>
      {children}
    </B.BarContainer>
  );
};
export default BarHeaderMain;