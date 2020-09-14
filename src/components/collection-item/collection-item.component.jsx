import React from 'react';
import CollectionFooter from './collection-footer.component';
import './collection-item.styles.scss';

const CollectionItem = ({ id, imageUrl, name, price }) => (
    <div className="collection-item">
        <div 
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}>
        </div>
        <CollectionFooter key={id} name={name} price={price} />
    </div>
)

export default CollectionItem;