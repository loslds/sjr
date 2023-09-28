import React from 'react';
import * as B from './styleHeader';

type PropsBarHRidth = {
  children?: React.ReactNode | JSX.Element;
};
const BarHeaderRidth: React.FC<PropsBarHRidth> = ({ children }) => {
  return (
    <B.BarContainerRidth>
      <B.BarFlex>
      {children}
      </B.BarFlex>
    </B.BarContainerRidth>
  );
};
export default BarHeaderRidth;