import React from 'react'
import '../styles/Product.css'
import StarIcon from '@material-ui/icons/Star';

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating)
                    .fill()
                    .map(() =><StarIcon className="product_starRating"/>)
                }
            </div>
            <img src={image} alt="Product"/>
        </div>
    )
}

export default Product
