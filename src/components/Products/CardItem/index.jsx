import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import Input from '../../Input';
import { Item, ContainerText } from './styles';
import { useCart } from '../../../context/Cart';

const CardItem = ({
  name, image, score, price, id,
}) => {
  const { insertInCart, qtdItem, removeInCart } = useCart();
  return (
    <>
      <Item>
        <Item.Img src={`/assets/${image}`} loading="lazy" />
        <ContainerText>
          <Item.Title>
            <p style={{ marginTop: 0, marginBottom: 0 }}>
              <b>
                {name}
              </b>
            </p>
          </Item.Title>
          <Item.Description>
            <p style={{ marginBottom: 0, marginTop: 0 }}>
              <b>Score:</b>
              {' '}
              {score}
              {' '}
              <b>Price:</b>
              {' '}
              {price}
            </p>
            {qtdItem(id) > 0 ? (
              <Item.Qtd>
                <Button onClick={() => removeInCart(id)}> - </Button>
                <Input value={qtdItem(id)} />
                <Button onClick={() => insertInCart(id)}> + </Button>
              </Item.Qtd>
            )
              : <Button onClick={() => insertInCart(id)}>Comprar</Button>}
          </Item.Description>
        </ContainerText>
      </Item>
    </>
  );
};
CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardItem;
