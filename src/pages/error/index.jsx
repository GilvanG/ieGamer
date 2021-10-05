import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BannerMain from '../../components/Banner';

function PageError() {
  return (
    <>
      <Header>
        IE Gamer
      </Header>
      <BannerMain
        title="Algum Problema Aconteceu"
        url="https://tpfcu.com/wp-content/uploads/2019/09/sad-man-has-problems-with-billing-and-debts.jpg"
        description="Por favor, volte para nossa Home ou entre em contato com nosso time de Dev's."
      />
      <Footer>
        Copyright 2021 by Gilvan Gomes. All Rights Reserved.
      </Footer>
    </>
  );
}

export default PageError;
