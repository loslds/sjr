import React from 'react';
import BarHeaderTxtLogin from './BarHearderTxtLogin';
import BarHeaderRidth from './BarHeaderHidth';
import HeaderSwitch from './HeaderSwitch';
import * as H from './styleHeader';
import Logosys from '../../assets/images/logosys.png';
import LogoEmp from '../../assets/images/logoemp.png';
import loginon from '../../assets/images/loginbrcprt.svg';
import loginoff from '../../assets/images/loginbrcverm.svg';
import BarHearderImgLogin from './BarHeaderImgLogin';
import ButtonHeaderLogin from './ButtonHeaderLogin';
type PropsHeader = {
    children?: React.ReactNode | JSX.Element;
  };

  const Header: React.FC<PropsHeader> = ({ children}) => {

  const [logado, setLogado]= React.useState(false);

  const handlerClickLogin = React.useCallback(() => {
    setLogado(oldState => !oldState)
    }, [])

    return (
      <H.BarContainer>
        <H.ContainerLogoSys img={Logosys} />
        <H.ContainerLogoEmp img={LogoEmp} />
        {children}
        <BarHeaderRidth>

          <BarHeaderTxtLogin>
            { logado ? (
              <label>Logado.</label>
            ) : (
              <label>Logar.</label>
            )}
          </BarHeaderTxtLogin>

          <BarHearderImgLogin logado={logado}>
            {logado ? (
              <ButtonHeaderLogin img={loginoff} title={'Sair...'} onclick={handlerClickLogin} />
            ) : (
              <ButtonHeaderLogin img={loginon} title={'Entrar.'} onclick={handlerClickLogin} />
            )}
            
          </BarHearderImgLogin>

          <HeaderSwitch onChanger={
            checked => {
              console.log('checked :', checked);
            }
          } />

        </BarHeaderRidth>
        
      </H.BarContainer>
    )
  };

  export default Header;