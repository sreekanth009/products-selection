import React, { createContext, useState } from "react";
import { ProductContextState, IProductList } from "../@types";

const contextDefaultValues: ProductContextState = {
  selectedProductList: [],
  addProduct: () => {},
  removeProduct: () => {},
};

export const ProductSelectionContext =
  createContext<ProductContextState>(contextDefaultValues);

const ProductSelectionProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [selectedProductList, setSelectedProductList] = useState<
    IProductList[]
  >([]);

  /**
   * Method to add product to list.
   */

  const addProduct = (newProduct: IProductList) => {
    setSelectedProductList([...selectedProductList, newProduct]);
  };

  /**
   * Method to remove product from list.
   */
  const removeProduct = (removeProduct: IProductList) => {
    const newList = selectedProductList.filter(
      (item) => item.id !== removeProduct.id
    );
    setSelectedProductList(newList);
  };

  return (
    <ProductSelectionContext.Provider
      value={{ selectedProductList, addProduct, removeProduct }}
    >
      {children}
    </ProductSelectionContext.Provider>
  );
};

export default ProductSelectionProvider;
