import React from "react";
import SelectionPanel from "../molecules/SelectionPanel";
import SearchPanel from "../molecules/SearchPanel";

const ProductSelectionPage = () => {
  return (
    <div className={"container mx-auto px-4"}>
      <div className={"pt-16 flex flex-row"}>
        <h1 className={"basis-1/2 text-2xl font-bold text-black"}>Axiamatic</h1>
        <button className={"basis-1/2 text-slate-400 font-medium underline"}>
          Exit Setup
        </button>
      </div>
      <div className={"pt-20 flex flex-row justify-center"}>
        <SelectionPanel />
        <SearchPanel />
      </div>
    </div>
  );
};

export default ProductSelectionPage;
