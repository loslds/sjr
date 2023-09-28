import styled from 'styled-components';

export const Container = styled.div`
  border: none; 
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: 100%;
  scroll-behavior: auto;
  background: transparent;
  p {
     margin: 0px 0px 0px 10px;
     padding: 0px 0px 0px 5px;
     font-size: 13px;
     display: flex;
   }
   h1,
   h2,
   h3,
   h4,
   h5 {
     margin: 0px 5px 0px 5px;
     padding: 0px 0px 0px 5px;
     font-style: normal;
   }
   h1 {
     font-size: 24px;
     line-height: 26px;
   }
   h2 {
     font-size: 22px;
     line-height: 24px;
   }
   h3 {
     font-size: 20px;
     line-height: 22px;
   }
   h4 {
     font-size: 18px;
     line-height: 20px;
   }
   h5 {
     font-size: 16px;
     line-height: 18px;
   }
   label {
     margin: 0px 5px 0px 10px;
     padding: 0px 0px 0px 5px;
     font-size: 14px;
     line-height: 16px;
   }

`;
export const LayoutHeader = styled.div`
  border: none; 
  min-width: 100%;
  display: flex;
  background: transparent;
`;
export const LayoutMain = styled.div`
  border: none;
  flex-grow: 1;
  min-height: 100%;
  background: Transparent;
  scroll-behavior: auto;
`;
export const LayoutFoot = styled.div`
  border: none;
  min-height: 50px;
  width: 100%;
  background: Transparent;
`;
export const DivisionPgHztal = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 1px 0px 1px 0px;
  height: 3px;
  width: 100%;
  display: flex;
  background-color: #7f7fbb;
`;
//////////////////////////////////////////////////////
export const ContainerMainLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  height: 100%;
  /* height: 100vh; */
  /* display: flex;
  align-self: center;
  align-items: center;
  background: transparent;*/ 
 `;

export const ContainerLayout = styled.div`
   border: none;
   padding: 0px 5px 0px 5px;
   margin: 5px 5px 5px 5px;
   width: 900px;
   font-size: 15px;
   line-height: 20px;
   display: flex;
   flex-flow: row wrap;
   //justify-content: space-between;
   //align-items: center;
   //align-content: center;
   background: transparent;
   @media (min-width: 350px) {
     justify-content: center;
     align-items: center;
   }

   p {
     margin: 0px 0px 0px 10px;
     padding: 0px 0px 0px 5px;
     font-size: 13px;
     display: flex;
   }
   h1,
   h2,
   h3,
   h4,
   h5 {
     margin: 0px 5px 0px 10px;
     padding: 0px 0px 0px 5px;
     font-style: normal;
   }
   h1 {
     font-size: 22px;
     line-height: 24px;
   }
   h2 {
     font-size: 20px;
     line-height: 22px;
   }
   h3 {
     font-size: 18px;
     line-height: 20px;
   }
   h4 {
     font-size: 14px;
     line-height: 16px;
   }
   h5 {
     font-size: 10px;
     line-height: 12px;
   }

   label {
     margin: 0px 5px 0px 10px;
     padding: 0px 0px 0px 5px;
     font-size: 13px;
     line-height: 15px;
   }
 `;

export const ContainerPg = styled.div`
  border: 2px yellow solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const ContainerPgFlexBetween = styled.div`
  border: 2px black dashed;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`;
