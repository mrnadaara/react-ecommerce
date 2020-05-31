import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items.filter((col, index) => index < 4).map(({
          id, name, price, imageUrl,
        }) => (
          <CollectionItem key={id} id={id} name={name} price={price} imageUrl={imageUrl} />
        ))
      }
    </div>
  </div>
);

export default CollectionPreview;
