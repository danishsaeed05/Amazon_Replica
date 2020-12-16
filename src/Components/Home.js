import React from 'react';
import '../styles/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_FT_PVD6150._CB416179696_.jpg"
                alt="Banner"
            />

            <div className="home_row">
                <Product
                    id="234234"
                    title="OnePlus 8 Pro (5G) Dual-SIM IN2023 256GB/12GB RAM Factory Unlocked Android Smartphone (Ultramarine Blue)- International Version"
                    price={1164.52}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41qdBz5o-5L._AC_SY200_.jpg" />
                <Product
                    id="435643"
                    title="JBL Flip Essential Portable Waterproof Wireless Bluetooth Speaker with up to 10 Hours of Playtime - Gunmetal Grey"
                    price={99.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41jZ-mpzFvL._AC_SR400,600_.jpg" />
            </div>

            <div className="home_row">
                <Product
                    id="34554"
                    title="All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal"
                    price={89.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71at+SHImkL._AC_UL320_.jpg" />
                <Product
                    id="435643"
                    title="DualSense Wireless Controller - DualSense Controller Edition"
                    price={86.49}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._AC_UL320_SR320,320_.jpg" />
                <Product
                    id="456745"
                    title="Nest Learning Thermostat, 3rd Generation (Works with Amazon Alexa)"
                    price={309.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41wBYSwpKHL._AA218_.jpg" />
            </div>

            <div className="home_row">
                <Product
                    id="65675"
                    title="TCL 50S425-CA 4K Ultra HD Smart LED Television (2019), 50&quot;"
                    price={379.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71xkwNx-nfL._AC_UL320_.jpg" />
            </div>

        </div>
    )
}

export default Home
