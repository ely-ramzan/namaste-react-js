import React from 'react';
import Card from './Card';

function CardsContainer({ categories }) {
    return (
        <>
            {categories.map(category => (
                <Card key={category.idCategory} obj={category} />
            ))}
        </>
    );
}

export default CardsContainer;