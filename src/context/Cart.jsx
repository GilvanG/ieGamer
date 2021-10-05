/* eslint-disable no-unused-expressions */
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

  const insertInCart = async (itemId) => {
    if (itemIsCart(itemId)) {
      setCartItens([...cartItens.filter((element) => element.id !== itemId),
        { id: itemId, qtd: qtdItem(itemId) + 1 }]);
    } else {
      setCartItens([...cartItens, { id: itemId, qtd: 1 }]);
    }

    setFreight(qtdItemTotal * 10 + 10);
    if (purchaseValue + products.find((element) => element.id === itemId).price > 250) {
      setFreight(0);
    }
    setQtdItemTotal(qtdItemTotal + 1);
    setPurchaseValue(purchaseValue + products.find((element) => element.id === itemId).price);
  };

  const removeInCart = async (itemId) => {
    if (itemIsCart(itemId)) {
      const qtd = qtdItem(itemId);
      if (qtd > 1) {
        setCartItens([...cartItens.filter((element) => element.id !== itemId),
          { id: itemId, qtd: qtdItem(itemId) - 1 }]);
      } else {
        setCartItens([...cartItens.filter((element) => element.id !== itemId)]);
      }

      const priceItem = products.find((element) => element.id === itemId).price;
      setFreight(qtdItemTotal * 10 - 10);
      setQtdItemTotal(qtdItemTotal - 1);
      if (purchaseValue - priceItem > 250) {
        setFreight(0);
      }
      setPurchaseValue(purchaseValue - priceItem);
    }
  };

  return (
    <CartContext.Provider value={{
      cartItens, insertInCart, qtdItem, removeInCart, qtdItemTotal, freight, purchaseValue,
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
