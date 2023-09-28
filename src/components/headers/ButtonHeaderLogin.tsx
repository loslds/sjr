import React from 'react';

import * as B from './styleHeader';

type PropsHButtonLogin = {
  logado?: boolean;
  img?: string;
  title?: string;
  onclick?: () => void;
};
const ButtonHeaderLogin: React.FC<PropsHButtonLogin> = ({ logado, img, title , onclick }) => {
  return (
    <B.ButtonHLogin>
      <B.ButtonHLogin img={img} title={title} onClick={onclick} />
    </B.ButtonHLogin>
  )
};
export default ButtonHeaderLogin;