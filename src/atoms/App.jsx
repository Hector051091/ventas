import React, { useEffect, useState, useCallback } from "react";
import { Fakestoreapi } from "../api/fakestoreapi";
import styles from "./particule/styles.module.css";
import Image from "../molecules/Image/Image";
import Title from "../molecules/Title/Title";
import Price from "../molecules/Price/Price";
import Category from "../molecules/Category/Category";
import NavBar from "../molecules/NavBar/NavBar";
import Footer from "../molecules/Footer/Footer";
import Header from "../molecules/Header/Header";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);
  const [categorySelected, setCategorySelected] = useState();
  const [data, setData] = useState([]);

  const getAllProducts = useCallback(async () => {
    const allProductData = await Fakestoreapi.getAllProducts();
    setAllProducts(allProductData);
  }, []);

  const getAllCategories = useCallback(async () => {
    const allCategories = await Fakestoreapi.getAllCategories();
    setAllCategories(allCategories);
  }, []);

  const getProductsSpecificCategory = useCallback(async () => {
    if (categorySelected) {
      const productos = await Fakestoreapi.getProductsSpecificCategory(
        categorySelected
      );
      setProductFiltered(productos);
    }
  }, [categorySelected]);

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, [getAllProducts, getAllCategories]);

  useEffect(() => {
    if (categorySelected) {
      getProductsSpecificCategory();
    }
  }, [getProductsSpecificCategory, categorySelected]);

  useEffect(() => {
    setData(allProducts);
  }, [allProducts]);

  useEffect(() => {
    if (productFiltered.length > 0) {
      setData(productFiltered);
    }
  }, [productFiltered]);

  return (
    <div className="App bg-light">
      <Header />
      <div className="text-center mt-5">
        <h1>Categorias</h1>
      </div>
      <div className="mt-5">
        <NavBar
          menuItems={allCategories}
          setCategorySelected={setCategorySelected}
        />
      </div>
      <div className="col-md-12 mb-4 mt-5">
        <div className="container">
          <div className="row">
            {data?.map((response, index) => (
              <div key={index} className="col-lg-4 col-sm-6 col-xs-12 mb-4">
                <div
                  className={`product-container shadow-sm p-4 bg-white text-center ${styles.container}`}
                >
                  <Image title={response?.title} image={response?.image} />

                  <div className="mt-4">
                    <Title title={response?.title} />
                  </div>
                  <div>
                    <Category category={response.category} />
                  </div>
                  <div className="">
                    <Price price={response?.price} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
