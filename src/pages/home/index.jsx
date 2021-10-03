import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Products from '../../components/Products';
import BannerMain from '../../components/Banner';
import CartProvider from '../../context/Cart';

function App() {
  return (
    <CartProvider>
      <Header>
        IE Gamer
      </Header>
      <BannerMain
        title="IAI Gamer?"
        url="https://cdn2.unrealengine.com/Diesel%2Fblog%2Faccount-security-at-epic-games%2FEGS_Social_Update_News-2560x1440-128a69890d92407b815582c1deba54450e5645f9.jpg"
        description="Bem vindo a IE Gamer, o mais novo ecommerce especializado da venda de jogos em midia fisica."
      />
      <Products />
      <Footer>
        Copyright 2021 by Gilvan Gomes. All Rights Reserved.
      </Footer>
    </CartProvider>
  );
}

export default App;
