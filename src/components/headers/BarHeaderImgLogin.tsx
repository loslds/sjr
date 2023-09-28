import React from 'react';
import * as B from './styleHeader';
// import logonprt from '../../assets/images/logonprt.svg';
// import logon from '../../assets/images/logon.svg';
type PropsBarHImgLogin = {
  children?: React.ReactNode | JSX.Element;
  logado?: boolean;
  onclick?: () => void;
};

const BarHearderImgLogin: React.FC<PropsBarHImgLogin> = ({ logado , children, onclick }) => {
  
  return (
    <B.BarContainerHLogin>
      {children}
    </B.BarContainerHLogin>
  );
};
export default BarHearderImgLogin;