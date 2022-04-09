import React, { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IProductList } from "../../../@types/index";
import { ProductSelectionContext } from "../../../contextProvider/ProductSelectionProvider";

const SelectionHolder: React.FC<{ selectedItem: IProductList }> = ({
  selectedItem,
}) => {
  const { removeProduct } = useContext(ProductSelectionContext);

  return (
    <div className={"w-40 h-40 shadow rounded flex justify-center"}>
      {selectedItem ? (
        <div className={"flex flex-col text-center justify-center"}>
          <span
            className={
              "text-2xl flex justify-center p-1 text-black w-12 mx-auto"
            }
          >
            <img src={selectedItem.icon} alt={selectedItem.title} />
          </span>
          <p className={"text-black-600 font-bold mt-2"}>
            {selectedItem.title}
          </p>
          <button
            className={
              "flex items-center mt-4 text-gray-500 text-sm font-medium"
            }
            onClick={() => removeProduct(selectedItem)}
          >
            <AiOutlineClose className={"text-red-500 font-bold text-xs mr-1"} />
            {"Remove"}
          </button>
        </div>
      ) : (
        <div className={"flex flex-col text-center justify-center"}>
          <span
            className={
              "text-2xl flex justify-center rounded bg-slate-100 p-3 text-black w-12 mx-auto"
            }
          >
            <FiPlus className={"text-gray-400"} />
          </span>
        </div>
      )}
    </div>
  );
};

export default SelectionHolder;
