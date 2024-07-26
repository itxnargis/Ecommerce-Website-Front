import React, { useEffect, Fragment, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import Product from "../Home/Product.js";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../layout/metaData";

const Products = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const { products, loading, error, productsCount, resultPerPage, filteredProductsCount } = useSelector((state) => state.products);
  const { keyword } = useParams();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage));
  }, [dispatch, keyword, currentPage, alert, error]);

  let count = filteredProductsCount;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS --- ECOMMERCE" />
          <div className="Product">
            <h2 className="productsHeading">Products</h2>
            <div className="underline"></div>
            <div className="products" id="product">
              {products && products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
{/*
            <div className="filterBox">
              <Typography variant="h5" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Price
              </Typography>
              <Slider
                value={price}
                onChange={(e, newPrice) => setPrice(newPrice)}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={25000}
              />
              <Typography variant="h5" style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "11px", display: window.innerWidth > 768 ? 'block' : 'none' }}>
                Categories
              </Typography>
              <ul className="categoryBox" style={{ display: window.innerWidth > 768 ? 'block' : 'none' }}>
                {categories.map((cat) => (
                  <li
                    className="category-link"
                    key={cat}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
              <fieldset>
                <Typography component="legend" variant="h5" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Ratings Above
                </Typography>
                <Slider
                  value={ratings}
                  onChange={(e, newRating) => setRatings(newRating)}
                  aria-labelledby="continuous-slider"
                  min={0}
                  max={5}
                  valueLabelDisplay="auto"
                />
              </fieldset>
            </div> */}

            {resultPerPage < count && (
              <div className="PaginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={filteredProductsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
