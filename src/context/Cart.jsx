/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from 'react';
import products from '../products.json';

const CartContext = createContext({
  cartItens: Array.prototype,
  insertInCart: Function.prototype,
  qtdItem: Function.prototype,
  removeInCart: Function.prototype,
  qtdItemTotal: Number.prototype,
  freight: Number.prototype,
  purchaseValue: Number.prototype,
});

const CartProvider = ({ children }) => {
  const [cartItens, setCartItens] = useState([]);
  const [qtdItemTotal, setQtdItemTotal] = useState(0);
  const [freight, setFreight] = useState(0);
  const [purchaseValue, setPurchaseValue] = useState(0);

  const itemIsCart = (id) => id === { ...cartItens.find((element) => element.id === id) || { id: 'q' } }.id;

  const qtdItem = (id) => (
    itemIsCart(id)
      ? cartItens.find((element) => element.id === id).qtd
      : 0
  );

  const insertInCart = (itemId) => {
    if (itemIsCart(itemId)) {
      setCartItens([...cartItens.filter((element) => element.id !== itemId),
        { id: itemId, qtd: qtdItem(itemId) + 1 }]);
    } else {
      setCartItens([...cartItens, { id: itemId, qtd: 1 }]);
    }

    setQtdItemTotal(qtdItemTotal + 1);
    setPurchaseValue(purchaseValue + products.find((element) => element.id === itemId).price);

    if (purchaseValue > 250) {
      setFreight(0);
    } else {
      setFreight(freight + 10);
    }
  };

  const removeInCart = (itemId) => {
    if (itemIsCart(itemId)) {
      const qtd = qtdItem(itemId);
      if (qtd > 2) {
        setCartItens([...cartItens.filter((element) => element.id !== itemId),
          { id: itemId, qtd: qtdItem(itemId) - 1 }]);
      } else {
        setCartItens([...cartItens.filter((element) => element.id !== itemId)]);
      }

      setQtdItemTotal(qtdItemTotal - 1);
      const priceItem = products.find((element) => element.id === itemId).price;
      setPurchaseValue(purchaseValue - priceItem);

      if (purchaseValue + priceItem > 250 && purchaseValue <= 250) {
        for (let i = 0; i < cartItens.length; i += 1) {
          setFreight(freight + cartItens[i].qtd
              * products.find((element) => element.id === cartItens[i].id).price);
        }
      } else if (purchaseValue + priceItem <= 250) {
        setFreight(freight - 10);
      }
    }
  };

  return (
    <CartContext.Provider value={{
      cartItens, insertInCart, qtdItem, removeInCart,
    }}
    >
      { children }
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  const Cart = useContext(CartContext);
  const {
    cartItens, insertInCart, qtdItem, removeInCart, qtdItemTotal, freight, purchaseValue,
  } = Cart;
  return {
    cartItens, insertInCart, qtdItem, removeInCart, qtdItemTotal, freight, purchaseValue,
  };
};
