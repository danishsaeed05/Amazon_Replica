import React from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Amazon Ad" />

            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Cart is empty</h2>
                    <p>You have no items in your Cart.
                    "Add to Cart" next to the item.
                    </p>
                </div>
            ) : (
                    <div>
                        <h2 className="checkout_title">Your Shopping Cart</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
        </div>

    )
}

export default Checkout
