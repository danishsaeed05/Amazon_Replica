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

            <Product 
            id="234234"
            title="OnePlus 8 Pro (5G) Dual-SIM IN2023 256GB/12GB RAM Factory Unlocked Android Smartphone (Ultramarine Blue)- International Version"
            price={1164.52}
            rating={5}
            image="https://m.media-amazon.com/images/I/41qdBz5o-5L._AC_SY200_.jpg" />

        </div>
    )
}

export default Home
