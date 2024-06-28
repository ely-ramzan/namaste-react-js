import React from 'react';

function Card({ obj }) {
    return (
        <div className='card'>
            <h1 className="title">
                {obj.strCategory}
            </h1>
            <div className="food-img-container">
                <img src={obj.strCategoryThumb} alt={obj.strCategory} className='food-img' />
            </div>
            <h3 className='des'>
                {obj.strCategoryDescription}
            </h3>
        </div>
    );
}

export default Card;
