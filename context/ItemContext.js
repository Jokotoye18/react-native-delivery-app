import React, { createContext, useReducer } from "react";
import { itemCategories } from "../data";
import { ItemReducer } from "../reducer/ItemReducer";

const initialState = itemCategories;

export const ItemContext = createContext(initialState);

export const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);

  const getCategory = (id) => {
    let categories = [...state.items];
    return categories.find((category) => category.id == id);
  };

  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        getCategory,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
