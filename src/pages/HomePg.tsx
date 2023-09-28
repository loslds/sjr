import React from 'react';
import { LayoutPg, LayoutPgHeader, LayoutPgMain } from '../components/layouts';
import { DivisionPgHztal, LayoutFoot } from '../components/layouts/styleLayouts';
import Header from '../components/headers/Header';
import BarHeaderMain from '../components/headers/BarHeaderMain';
import BarHeaderFlex from '../components/headers/BarHeaderFlex';

export const HomePg = () => {
  return (
    <LayoutPg>
      <LayoutPgHeader>
        <Header>
          <BarHeaderMain>
            <BarHeaderFlex>
              <h1>BarFlex</h1>
              <h2>BarFlex</h2>
              <h3>BarFlex</h3>
            </BarHeaderFlex>
          </BarHeaderMain>
          
        </Header>
      </LayoutPgHeader>
      <DivisionPgHztal />
      <LayoutPgMain>
        <h1>Corpo</h1>
        <h2>Corpo</h2>
        <h3>Corpo</h3>
        <h4>Corpo</h4>
        <h5>Corpo</h5>
      </LayoutPgMain>
      <DivisionPgHztal />
      <LayoutFoot>
        <h1>Rodapé</h1>
      </LayoutFoot>
    </LayoutPg>
      
  );
};
