import React, { useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCart } from '../../context/Cart';
import products from '../../products.json';
import Cart from './styles';

const Cartt = () => {
  const [visibilityMenuCart, setVisibilityMenuCart] = useState(false);
  const {
    cartItens, purchaseValue, freight,
  } = useCart();
  return (
    <Cart>
      <Cart.Button onClick={() => setVisibilityMenuCart(true)}>
        <img
          src="/assets/cart-icon.svg"
          alt="cart"
          width="40"
        />
      </Cart.Button>
      {visibilityMenuCart ? (
        // eslint-disable-next-line react/jsx-pascal-case
        <Cart.opac>
          <Cart.Open>
            <Cart.Open.Title>
              Meu Carrinho
              <Cart.Close>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => setVisibilityMenuCart(false)}
                  style={{ width: '1.2rem' }}
                />
              </Cart.Close>
            </Cart.Open.Title>
            <hr />
            {purchaseValue ? cartItens.map((item) => {
              const product = products.find((elementP) => elementP.id === item.id);
              return (
                <Cart.Open.ItemInCart key={`item_${item.id * 58}`}>
                  <img
                    src={`/assets/${product.image}`}
                    style={{ width: '5rem' }}
                    alt={product.name}
                  />
                  <b>
                    {product.name}
                    :
                    {' '}
                  </b>
                  {item.qtd}
                  x
                  {' '}
                  R$
                  {product.price.toFixed(2)}
                </Cart.Open.ItemInCart>
              );
            }) : <Cart.Open.ItemInCart>Carrinho Vazio</Cart.Open.ItemInCart>}
            { purchaseValue
              ? (
                <>
                  <Cart.Open.Price>
                    <hr />
                    <span>
                      <b>
                        Valor da Compra:
                      </b>
                      {' R$'}
                      {purchaseValue.toFixed(2)}
                    </span>
                    <br />
                    <span>
                      <b>
                        Frete:
                      </b>
                      {' R$'}
                      {freight.toFixed(2)}
                    </span>
                  </Cart.Open.Price>
                  <Cart.Open.Button>
                    Finalizar Compra
                  </Cart.Open.Button>
                  <br />
                </>
              )
              : <></> }
          </Cart.Open>
        </Cart.opac>
      ) : (<></>)}
    </Cart>
  );
};

export default Cartt;
