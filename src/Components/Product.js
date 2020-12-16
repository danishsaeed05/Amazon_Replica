import React from 'react'
import '../styles/Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ }, dispatch] = useStateValue();


    const addToBasket = () => {
        // Adding item to basket
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                            .fill()
                            .map(() => <StarIcon className="product_starRating" />)
                    }
                </div>
            </div>
            <img src={image} alt="Product" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
