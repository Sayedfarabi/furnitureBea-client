import React from 'react';
import bannerImg from "../../../Assets/banner.png";


const Banner = () => {
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-base-100">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello Users</h1>
                        <p className="mb-5">This is our used furniture buying or selling site. Buying used furniture can be awesome or not so awesome.
                            So, select your Categories and buy or sell your furniture .</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;