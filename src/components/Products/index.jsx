/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import products from '../../products.json';
import { ListItem, Filter } from './styles';

const Products = () => {
  const [filter, setFilter] = useState('Name');
  const [items, setItems] = useState(products.map((product) => (
    <CardItem
      {...product}
    />
  )));
  useEffect(() => {
    setItems('Carregando');
    if (filter === 'MPrice') {
      products.sort((a, b) => a.price - b.price);
    } else if (filter === 'LPrice') {
      products.sort((a, b) => b.price - a.price);
    } else if (filter === 'Score') {
      products.sort((a, b) => a.score - b.score);
    } else if (filter === 'Name') {
      products.sort((a, b) => a.name.localeCompare(b.name) * -1);
    }
    setItems(products.map((product) => (
      <CardItem
        {...product}
      />
    )));
  }, [filter]);
  return (
    <div>
      <Filter>
        <Filter.Title>Ordenar Por:</Filter.Title>
        <Filter.List id="mySelect" onChange={() => setFilter(document.getElementById('mySelect').value)}>
          <Filter.Item value="MPrice" className="Price">
            Maior Preço
          </Filter.Item>
          <Filter.Item value="LPrice" className="Price">
            Menor Preço
          </Filter.Item>
          <Filter.Item value="Score" className="Score">
            Popularidade
          </Filter.Item>
          <Filter.Item value="Name" className="Name" selected>
            Ordem Alfabetica
          </Filter.Item>
        </Filter.List>
      </Filter>
      <ListItem>
        {items}
      </ListItem>
    </div>
  );
};

export default Products;
