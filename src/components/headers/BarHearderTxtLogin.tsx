import React from 'react';
import * as B from './styleHeader';

type PropsBarHLogin = {
  children?: React.ReactNode | JSX.Element;
  // logado?: boolean;
};
const BarHearderTxtLogin: React.FC<PropsBarHLogin> = ({ children }) => {
  
  return (
    <B.BarContainerHLogin>
      { children }
    </B.BarContainerHLogin>
  );
};
export default BarHearderTxtLogin;