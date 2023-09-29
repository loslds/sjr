import React from 'react';
import * as F from './stylesfoot';
import { useNavigate } from 'react-router-dom';
// import { MenuPgUseForm } from '../menus/MenuPgContext';

import BarCabecalho from './BarCabecalho';
import BarMainFoot from './BarMainFoot';
import BarColunsFoot from './BarColunsFoot';
import BarAreaContent from './BarAreaContentFoot';
import BarDivImgFoot from './BarDivImgFoot';

import home from '../../assets/images/svgs/home.svg';

import local from '../../assets/images/svgs/local.svg';
import fone from '../../assets/images/svgs/telefone.svg';
import email from '../../assets/images/svgs/email.svg';
import watszapp from '../../assets/images/svgs/watszapp.svg';
import instagram from '../../assets/images/svgs/instagram.svg';
import facebook1 from '../../assets/images/svgs/facebook1.svg';
import twiter from '../../assets/images/svgs/twiter.svg';
import tiktok from '../../assets/images/svgs/tiktok.svg';
import telegram from '../../assets/images/svgs/telegram.svg'
import internet from '../../assets/images/svgs/internet.svg';
import b_bordado from '../../assets/images/svgs/b_bordado.svg';
import l_laser from '../../assets/images/svgs/l_laser.svg';
import g_laser from '../../assets/images/svgs/g_laser.svg';
import d_diverso from '../../assets/images/svgs/d_diverso.svg';

import PageModal from '../Modal/PageModal';
import CardDesemvolver from '../contentHelp/CardDesenvolver';




type CharOpc =
    'Sobre'|
    'Localizacao'|
    'Telefone'|
    'Email'|
    'Watszapp'|
    'Instagram'|
    'Faceboock'|
    'Twitter'|
    'TikTok'|
    'Telegram'|
    'Internet';

  export type SumaryOpc = {
    item: Number;
    descr: string;
    onoff: boolean;
  };

  export type OpcaoSumary = Record<CharOpc, SumaryOpc>;

  export const initialState: OpcaoSumary  = {
    Sobre: { item: 1, descr: 'Sobre.', onoff: false },
    Localizacao: { item: 2, descr: 'Localização', onoff: false },
    Telefone: { item: 3, descr: 'Telefone', onoff: false },
    Email: { item: 4, descr: 'Email', onoff: false },
    Watszapp: { item: 5, descr: 'Watszapp', onoff: false },
    Instagram: { item: 6, descr: 'Instagram', onoff: false },
    Faceboock: { item: 7, descr: 'Faceboock', onoff: false },
    Twitter: { item: 8, descr: 'Twitter', onoff: false },
    TikTok: { item: 9, descr: 'TikTok', onoff: false },
    Telegram: { item: 10, descr: 'Telegram', onoff: false },
    Internet: { item: 11, descr: 'Internet', onoff: false }
   };




type PropsFootHome = {
  children?: React.ReactNode | JSX.Element;
};
const FootHome: React.FC<PropsFootHome> = ({ children }) => {
  const [issobre, setIsSobre ] = React.useState(false);
  const [islocal, setIsLocal ] = React.useState(false);
  const [istelef, setIsTelef ] = React.useState(false);
  const [isemail, setIsEmail ] = React.useState(false);
  const [iswatsz, setIsWatsz ] = React.useState(false);
  const [isinsta, setIsInsta ] = React.useState(false);
  const [isfaceb, setIsFaceb ] = React.useState(false);
  const [istwite, setIsTwite ] = React.useState(false);
  const [istikto, setIsTikto ] = React.useState(false);
  const [isinter, setIsInter ] = React.useState(false);
  const [isteleg, setIsTeleg ] = React.useState(false);
  const [isempre, setIsEmpre ] = React.useState(false);
  const [isborda, setIsBorda ] = React.useState(false);
  const [iscorta, setIsCorta ] = React.useState(false);
  const [isgrava, setIsGrava ] = React.useState(false);
  const [isdiver, setIsDiver ] = React.useState(false);
  const [isopcao, setIsOpcao ] = React.useState(false);


  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };


  // React.useEffect( () => {
  //   let nmmod = state.nm_modulo;
  //   let nmpth = state.path_modulo;

  //   setIsOpcao(false);
  //   if (nmmod === 'Recepção.') {
  //     setOnRecep(true);
  //   } else if (nmmod === 'Design.') {
  //     setOnDesig(true);
  //   } else if (nmmod === 'Produção.') {
  //     setOnProdu(true);
  //   } else if (nmmod === 'Acabamento.') {
  //     setOnAcaba(true);
  //   } else if (nmmod === 'Expedição.') {
  //     setOnExped(true);
  //   } else if (nmpth === 'Administração.') {
  //     setOnAdmin(true);
  //   }
  // }, []);

  const handlerClickButton = ( e?: string ) => {
    let rtn = 0;
    if ( e === '' ) { rtn = 0;
    } else {rtn = Number(e);
    };
    setIsSobre(false);
    setIsLocal(false);
    setIsTelef(false);
    setIsEmail(false);
    setIsWatsz(false);
    setIsInsta(false);
    setIsFaceb(false);
    setIsTwite(false);
    setIsTikto(false);
    setIsTeleg(false);
    setIsInter(false);
    setIsBorda(false);
    setIsCorta(false);
    setIsGrava(false);
    setIsDiver(false);
    setIsOpcao(false);

    if (rtn > 0) {
      if (rtn === 1){
        setIsSobre(true);
      } else if (rtn === 2){
        setIsLocal(true);
      } else if (rtn === 3){
        setIsTelef(true);
      } else if (rtn === 4){
        setIsEmail(true);
      } else if (rtn === 5){
        setIsWatsz(true);
      } else if (rtn === 6){
        setIsInsta(true);
      } else if (rtn === 7){
        setIsFaceb(true);
      } else if (rtn === 8){
        setIsTwite(true);
      } else if (rtn === 9){
        setIsTikto(true);
      } else if (rtn === 10){
        setIsTeleg(true);
      } else if (rtn === 11){
        setIsInter(true);
      } else if (rtn === 12){
        setIsBorda(true);
      } else if (rtn === 13){
        setIsCorta(true);
      } else if (rtn === 14){
        setIsGrava(true);
      } else if (rtn === 15){
        setIsDiver(true);
      };
    };
  };

  return (
    <BarMainFoot>
      <BarColunsFoot>
        <BarCabecalho title={'Sobre.'} />
        <BarAreaContent>
          <BarDivImgFoot heightdiv={'50px'} widthdiv={'50px'} imgdiv={home} />
          <F.ButtonsBnt id={'1'}  onClick={() => {handlerClickButton('1')}} title={'Sobre.'}>Nossa Empresa.</F.ButtonsBnt>
          {issobre ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsSobre(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
        </BarAreaContent>
      </BarColunsFoot>

      <BarColunsFoot pwidth={'35%'}>
        <BarCabecalho title={'Contatos.'} />
        <F.AreaContainerButton >
          <F.ButtonImgFoot id={'2'} img={local} title='Localização' onClick={() => {handlerClickButton('2')}} />
          {islocal ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsLocal(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
          <F.ButtonImgFoot id={'3'} img={fone} title='Telefone' onClick={() => {handlerClickButton('3')}} />
          {istelef ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsTelef(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
          <F.ButtonImgFoot id={'4'} img={email} title='Email' onClick={() => {handlerClickButton('4')}} />
          {isemail ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsEmail(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
          <F.ButtonImgFoot id={'5'} img={watszapp} title='Watszapp' onClick={() => {handlerClickButton('5')}} />
          {iswatsz ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsWatsz(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
          <F.ButtonImgFoot id={'6'} img={instagram} title='Instagram' onClick={() => {handlerClickButton('6')}} />
          {isinsta ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsInsta(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
          <F.ButtonImgFoot id={'7'} img={facebook1} title='Faceboock' onClick={() => {handlerClickButton('7')}} />
          {isfaceb ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsFaceb(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
          <F.ButtonImgFoot id={'8'} img={twiter} title='Twitter' onClick={() => {handlerClickButton('8')}} />
          {istwite ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsTwite(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
          <F.ButtonImgFoot id={'9'} img={tiktok} title='TikTok' onClick={() => {handlerClickButton('9')}} />
          {istikto ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsTikto(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
          <F.ButtonImgFoot id={'10'} img={telegram} title='Telegram' onClick={() => {handlerClickButton('10')}} />
          {isteleg ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsTeleg(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
          <F.ButtonImgFoot id={'11'} img={internet} title='Internet' onClick={() => {handlerClickButton('11')}} />
          {isinter ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsInter(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
        </F.AreaContainerButton>
      </BarColunsFoot>

      <BarColunsFoot pwidth={'35%'}>
        <BarCabecalho title={'Produtos.'} />
        <F.AreaContainerButton>
          <F.ButtonImgFoot height={'60px'} width={'55px'} id={'12'} img={b_bordado} title='Bodados' onClick={() => {handlerClickButton('12')}} />
          {isborda ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsBorda(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
          <F.ButtonImgFoot height={'60px'} width={'55px'} id={'13'} img={l_laser} title='Corte Laser' onClick={() => {handlerClickButton('13')}} />
          {iscorta ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsCorta(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
          <F.ButtonImgFoot height={'60px'} width={'55px'} id={'14'} img={g_laser} title='Gravação Laser' onClick={() => {handlerClickButton('14')}} />
          {isgrava ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsGrava(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
          <F.ButtonImgFoot height={'60px'} width={'55px'} id={'15'} img={d_diverso} title='Diversos'  onClick={() => {handlerClickButton('15')}} />
          {isdiver ? (
              <PageModal
                ispx={true}
                ptop={'25%'}
                pwidth={'50%'}
                pheight={'50%'}
                titulo={'Em Acesso Negado'}
                onClose={() => setIsDiver(false)}
              >
              <CardDesemvolver />
              </PageModal>
            ): null }
        </F.AreaContainerButton>
      </BarColunsFoot>
    </BarMainFoot>
  );
};
export default FootHome;
