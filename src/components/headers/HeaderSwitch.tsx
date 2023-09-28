import React from 'react';
import Switch from 'react-switch';
import * as B from './styleHeader';

interface IProps {
  onChanger: (checked: boolean) => void;
};
const HeaderSwitch: React.FC<IProps> = ({ onChanger }) => {
  
  const [check, setCheck] = React.useState(false);

  const toogleSwhitch = () => {
    let newvalor = !check;
    setCheck(newvalor);
    onChanger(newvalor);
  };
  
  return (
    <B.BarContainerHLogin>
      <Switch onChange={toogleSwhitch} checked={check} title={'oi...'} />
    </B.BarContainerHLogin>
  );
};
export default HeaderSwitch;