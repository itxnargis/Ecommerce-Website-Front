import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../../actions/cartAction";
import { useAlert } from "react-alert";

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const [quantity] = useState(1);

    const addToCartHandler = () => {
        dispatch(addItemsToCart(product._id, quantity));
        alert.success("Product added to cart");
    };

    const options = {
        size: "large",
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };

    return (
        <div>
            <Link className="productCard" to={`/product/${product._id}`}>
                <div className="image-wrapper">
                    <img src={product.images[0].url} alt={product.name} />
                </div>
                <div className="product-description">
                    <p className="product-name">{product.name}</p>
                    <div className="product-rating">
                        <Rating {...options} />
                        <span className="productCardSpan">({product.numOfReviews} Reviews)</span>
                    </div>
                    <span className="product-price">{`Rs ${product.price}`}</span>
                    <button onClick={addToCartHandler} className="cart-button">
                Add to cart
            </button>
                </div>
            </Link>
        </div>
    );
};

export default Product;
