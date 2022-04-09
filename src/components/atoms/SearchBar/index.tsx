import React, { useState, useContext, useRef, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { productList } from "../../../constants/productList";
import { IProductList } from "../../../@types/index";
import { ProductSelectionContext } from "../../../contextProvider/ProductSelectionProvider";

const SearchBar: React.FC = () => {
  const { selectedProductList, addProduct } = useContext(
    ProductSelectionContext
  );
  const [active, setActive] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [searchedResultList, setSearchedResultList] = useState(productList);

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  // Handle input change.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActive(true);
    if (!e.target.value) {
      setSearchedResultList(productList);
      setActive(false);
      setSearchWord("");
    } else {
      setSearchWord(e.target.value);
      const filteredList = productList.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchedResultList(filteredList);
    }
  };

  // Handle product selection from the dropdown.
  const productSelection = (product: IProductList) => {
    if (!product) {
      return;
    }
    addProduct(product);
  };

  // Set selected products in local storage.
  const handleNext = () => {
    localStorage.setItem(
      "selected_products",
      JSON.stringify(selectedProductList)
    );
  };

  return (
    <div className={"flex max-w-sm"}>
      <div className={"relative mt-4 w-full"}>
        <span className={"text-2xl text-gray-500 absolute top-2 left-3"}>
          <AiOutlineSearch />
        </span>
        <input
          type={"search"}
          value={searchWord}
          placeholder={"Search for any software..."}
          className={
            "min-w-0 w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-slate-100 bg-clip-padding m-0 focus:text-gray-700 focus:bg-white focus:border-blue-700 focus:border-solid focus:border focus:outline-none pl-10 rounded py-3 text-sm"
          }
          onChange={handleChange}
        />

        {/* Search result drop down */}
        {active && (
          <ul
            ref={ref}
            className={"absolute mt-6 w-full bg-white shadow rounded p-4 z-10"}
          >
            {searchedResultList.length > 0 ? (
              searchedResultList.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`items-center mb-2 p-2 cursor-pointer ${
                      selectedProductList && selectedProductList.includes(item)
                        ? "bg-blue-700 text-white rounded pointer-events-none"
                        : "text-black"
                    }`}
                    onClick={(_) => {
                      productSelection(item);
                      setActive(false);
                      setSearchWord("");
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className={"w-5 h-5 float-left mr-2"}
                    />
                    <p className={"text-sm text-black-600"}>{item.title}</p>
                  </li>
                );
              })
            ) : (
              <li className={"text-sm"}>
                <p>{"No Products."}</p>
              </li>
            )}
          </ul>
        )}

        <button
          className={`rounded bg-blue-700 w-full mt-8 h-10 text-white font-bold p-2 ${
            selectedProductList.length < 4 ? "opacity-20" : "opacity-1"
          }`}
          disabled={selectedProductList.length < 4 ? true : false}
          onClick={() => handleNext()}
        >
          {"Next"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
