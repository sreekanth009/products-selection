import React from "react";
import SearchBar from "../../atoms/SearchBar";

const SearchPanel = () => {
  return (
    <div className={"flex flex-col basis-1/2 pt-16 text-left"}>
      <div className={"max-w-sm"}>
        <button
          className={
            "w-20 h-10 px-4 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-indigo-500 to-pink-500"
          }
        >
          {"1 of 3"}
        </button>
        <h1
          className={"text-2xl mt-4 text-black-600 font-bold"}
        >{`Let's add your internal tools`}</h1>
        <p className={"text-sm mt-3 text-gray-600 font-medium"}>
          {
            "Search to quickly add products your team uses today. You'll be able to add as many as you need later but for now let's add four"
          }
        </p>
      </div>
      <SearchBar />
    </div>
  );
};

export default SearchPanel;
