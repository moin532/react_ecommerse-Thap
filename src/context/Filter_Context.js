import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProdouctContext";
import reducer from "../reducer/Filter_reducer";

const FilterContext = createContext();

const initialState = {
  filter_Products: [],
  all_products: [],
  grid_view: true,

  sorting_value : "lowest",
  filters : {
    text: "",
    category: "all",
    company : "all",
    color:"all",
    // maxPrice: 0,
    // price: 0,
    // minPrice: 0,
  }

};

export const FilterContextProvider = ({ children }) => { //index.js wrap up

  const { prodoucts } = useProductContext();//from product context

  //accesing the data
  const [state, dispatch] = useReducer(reducer, initialState);

  //to set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };
  //to list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

//sorting function
const sorting = (event) => {
  let userValue = event.target.value;
  dispatch({ type: "GET_SORT_VALUE", payload: userValue });
};

//update the filter value
const updateFilterValue = (e)=>{
  let name = e.target.name;
  let value = e.target.value;

  return dispatch({type:"UPDAT_FILTER_VALUE", payload:{name,value}})

}

 //to sort the filter
 useEffect(() => {
  dispatch({type:"FILTER_UPDATE"})
  dispatch({ type: "SORTING_PRODUCTS" });
}, [prodoucts, state.sorting_value,state.filters]);
  
 
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER", payload: prodoucts });
  }, [prodoucts]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView ,setListView,sorting,updateFilterValue}}>
      {children}
    </FilterContext.Provider>
  );
};

//custom hooks
export const useFilterContext = () => {
  return useContext(FilterContext);
};
