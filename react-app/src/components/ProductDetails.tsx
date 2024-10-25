// import React from 'react'
import './ProductDetails.css'
import converse from '../assets/converse.jpg';

const ProductDetails = () => {
    return (
        <div>
            <div className="main-container">
                <div className="image-container">
                    {/* <img src="https://images.app.goo.gl/GStqLbVMTuYygZGTA" alt="" /> */}
                    <img src={converse} alt="" />
                </div>
                <div className="product-container">
                    <div className="productname">
                        <h2>Product Name</h2>

                        <div className="more-info">
                            <p>More info</p>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        <div className="colors">
                            <p>COLOUR</p>
                            <div className="circlecolours">
                                <div className="col black"></div>
                                <div className="col blue"></div>
                                <div className="col orange"></div>
                                <div className="col pink"></div>
                                <div className="col yellow"></div>
                            </div>
                            <div className="size-info">
                                <p>SIZE</p>
                                <div className="size">
                                    <p>40</p>
                                    <p>41</p>
                                    <p>42</p>
                                    <p>43</p>
                                    <p>44</p>
                                    <p>45</p>
                                </div>
                            </div>
                            <div className="buy-info">
                                <button>BUY</button>
                                <p>$45,95</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
