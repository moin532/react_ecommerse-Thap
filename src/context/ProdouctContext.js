// create a context
//provider
//consumer => usecontext hook


import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducer/ProdouctReducer'

const AppContext = createContext(); // craeting a context  1

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  prodoucts: [],
  featureProducts: [], 
  isSingleLoading : false,
  singleProduct: {}
};

const AppProvider = ({ children }) => {   //wrap to a index.js  2

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const prodoucts1 = await res.data;
      dispatch({ type: "SET_API_DATA", payload: prodoucts1 }); //payload means = data
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };


//single prod data 2nd data

const getSingleProduct = async (url) => {
  dispatch({ type: "SET_SINGLE_LOADING" });
  try {
    const res = await axios.get(url);
    const singleProduct = await res.data;
    dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
  } catch (error) {
    dispatch({ type: "SET_SINGLE_ERROR" });
  }
};


  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state ,getSingleProduct}}>{children}</AppContext.Provider> //3 provider is like delevery boy
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };