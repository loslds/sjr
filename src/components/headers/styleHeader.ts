import styled from 'styled-components';
import semimg from '../../assets/images/svgs/semimg.svg';
import loginoff from '../../assets/images/svgs/loginbrcprt.svg';

export const ContainerHeard = styled.div`
  border: 2px red solid;
  padding: 0px 0px 0px 0px;
  margin: 3px 0px 3px 3px;
  background: transparent;
  min-width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const ContainerLogoSys = styled.div<{ img? : string; }>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 10px;
  background: transparent;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ img }) => img || semimg});
//  cursor: pointer;
  width: 150px;
  height: 55px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const ContainerLogoEmp = styled.div<{ img? : string; }>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  background: transparent;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ img }) => img || semimg});
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: left;
  align-items: center;
`;
//////////////////////////////////////////////////////

export const BarContainer = styled.div`
  /* border: 1px green solid; */
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  background: transparent;
`;

export const BarFlex = styled.div`
  border: none; /*1px violet solid;*/
  padding: 0px 0px 0px 0px;
  margin: 3px 10px 3px 3px;
  width: 100%;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const BarContainerRidth = styled.div`
  /* border: 1px yellow solid; */
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 3px 0px 3px 3px;
  min-width: 17%;
  background: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: right;
  align-items: center;
  align-content: center;
`;


export const BarContainerHLogin = styled.div`
  /* border: 1px blueviolet solid; */
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 3px 0px 3px 0px;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  label {
    padding: 0px 0px 0px 0px;
    margin: 3px 0px 3px 0px;
    font-style: normal;
    font-family: Verdana, Tahoma, sans-serif;
    font-weight: bold;
  }
`;

export const ButtonHLogin = styled.button<{ img?: string }>`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 0px 5px 0px 5px;
  color: red;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', 'Courier', 'monospace';
  background: transparent;
  background-color: transparent;
  background-image: url(${({ img }) => img || loginoff});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  min-height: 45px;
  width: 50px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  /* &:hover {
    border: 2px red solid;
    border-radius: 10px;
  } */
`;

export const BarContainerSwitch = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 5px 0px 5px;
  width: 55px;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

// export const BarColLeft = styled.div`
//   padding: 4px auto;
//   margin: 4px auto;
//   min-width: 49%;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
// `
// export const BarColHidth = styled.div`
//   /* border: 1px #ff0000 solid; */
//   padding: 4px auto;
//   margin: 4px auto;
//   min-width: 40%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: flex-end;
//   align-items: center;
//   align-content: center;
// `

// export const ConteinerItemLink = styled.div`
//   /* border: 1px blue solid; */
//   margin: 0px 4px 0px 4px;
//   padding: 0px 4px 0px 4px;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   justify-items: center;
//   font-size: 20px;
// `
// export const MainContainer = styled.div`
//   border: 1px #40f708 solid;
//   padding: 0;
//   margin: 0;
//   min-height: 100%;
//   width: 100%;
//   display: flex;

//   justify-content: center;
// `
// export const BtnBarMain = styled.button`
//   /* border: 1px blue solid; */
//   padding: 0px;
//   margin: 0 4px;
//   align-items: center;
//   align-content: center;
//   justify-content: center center;
//   width: 40px;
//   height: 40px;
//   background-color: transparent;
//   background-position: center;
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
// `
// export const ImagemButton = styled.button`
//   /* border: 1px blue solid; */
//   border: 1px transparent;
//   margin: 0 4px;
//   padding: 0;
//   display: block;
//   width: 40px;
//   height: 40px;
//   background-color: transparent;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   outline: none;
// `
// export const ConteinerFixButton = styled.div`
//   /* border: 2px #000000 dotted; */
//   margin: 0 auto;
//   min-width: 100%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: inline-flex;
//   align-content: center;
//   align-items: center;
//   div {
//     display: block;
//     padding: 0 8px 0 8px;
//     width: 33.333%;
//   }
// `
// export const ImagemLeftButtomLabel = styled.button`
//   padding-left: 44px;
//   margin: 0 auto;
//   height: 40px;
//   width: 100%;
//   border-radius: 5px;
//   background-color: #58b0f8;
//   background-repeat: no-repeat;
//   background-size: 40px;
//   background-position: left;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   display: block;
//   overflow-x: hidden;
//   color: black;
//   font-size: 16px;
//   font-family: 'Stencil';
// `
// export const ImgSys = styled.img`
//   max-height: 50px;
//   padding: 0 4 0 4;
//   margin: 2 auto;
//   display: block;
// `
// export const ImgEmp = styled.img`
//   max-height: 50px;
//   padding: 0 4 0 4;
//   margin: 2 auto;
//   display: block;
// `
// export const MenuBarFlex = styled.div`
//   border: 1px #f80606 dotted;
//   width: 900px;
//   padding: 0 auto;
//   margin: 0 auto;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   align-items: center;
//   align-content: center;
//   min-height: 100%;
//   font-size: 20px;
//   color: black;
//   /* background-color: white; */
//   @media (min-width: 350px) {
//     justify-content: center;
//     align-items: center;
//   }
// `


 