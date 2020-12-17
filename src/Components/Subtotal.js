import React from 'react'
import '../styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getCartTotal } from '../reducer'
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>
                                {`${value}`}
                            </strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order contains gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={event => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
