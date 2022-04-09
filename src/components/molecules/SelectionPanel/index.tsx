import React, { useContext } from "react";
import SelectionHolder from "../../atoms/SelectionHolder";
import { ProductSelectionContext } from "../../../contextProvider/ProductSelectionProvider";

const SelectionPanel = () => {
  const { selectedProductList } = useContext(ProductSelectionContext);

  return (
    <div className={"basis-1/2"}>
      <div className="flex grid grid-cols-2 gap-8 max-w-fit mx-auto">
        {[...Array(4)].map((_, index) => (
          <SelectionHolder
            key={index}
            selectedItem={selectedProductList[index]}
          />
        ))}
      </div>
      {selectedProductList.length ? (
        <p className={"text-sm text-slate-400 mt-4"}>
          {selectedProductList.length > 1
            ? `${selectedProductList.length} Products added`
            : `${selectedProductList.length} Product added`}
        </p>
      ) : (
        <p className={"text-sm text-slate-400 mt-4"}>{"0 Products added"}</p>
      )}
    </div>
  );
};
export default SelectionPanel;
