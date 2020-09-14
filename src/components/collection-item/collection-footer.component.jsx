import React from 'react';

const CollectionFooter = ({name, price}) => (
    <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
);

export default CollectionFooter;