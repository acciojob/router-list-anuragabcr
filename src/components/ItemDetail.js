import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const { itemId } = useParams();

  const items = {
    1: { name: 'Item 1', description: 'Description for Item 1' },
    2: { name: 'Item 2', description: 'Description for Item 2' },
    3: { name: 'Item 3', description: 'Description for Item 3'},
  };

  const item = items[itemId];

  if (!item) return <div>Item not found</div>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetail;