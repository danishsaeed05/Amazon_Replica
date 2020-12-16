import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import '../styles/CheckoutProduct.css'
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        });
    }

    return (
        <div className="CheckoutProduct">
            <img className="CheckoutProduct_image" src={image} alt="Product Visual" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>

                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct_rating">
                    {
                        Array(rating)
                            .fill()
                            .map(() => <StarIcon className="product_starRating" />)
                    }
                </div>

                <button onClick={removeFromCart}>Remove from Cart</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
