const filterReducer = (state, action) => {

  switch (action.type) {

    case "LOAD_FILTER":
      // let priceArr = action.payload.map((curElem) => curElem.price);
      // let maxPrice = Math.max(...priceArr);


      return {
        ...state,
        filter_Products: [...action.payload], //dont take a orginal data and take a duplicate
        all_products: [...action.payload],
        // filters: { ...state.filters, maxPrice, price: maxPrice }, //because user cannot change orginal data
  
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortProduct = [...action.payload];

      const { filter_Products, sorting_value } = state;
      let tempSortProduct = [...filter_Products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_Products: newSortData,
      };

    case "UPDAT_FILTER_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_UPDATE":
      let { all_products } = state;
      let tempfilter = [...all_products];

      const { text, category, company, color} = state.filters;

      if (text) {
        tempfilter = tempfilter.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "All") {
        tempfilter = tempfilter.filter((curelem) => {
          return curelem.category === category;
        });
      }
      if (company !== "All") {
        tempfilter = tempfilter.filter((curelem) => {
          return curelem.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color.toLowerCase() !== "all") {
        tempfilter = tempfilter.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }

      // if (price === 0) {
      //   tempfilter =   tempfilter .filter(
      //     (curElem) => curElem.price == price
      //   );
      // } else {
      //  tempfilter = tempfilter.filter(
      //     (curElem) => curElem.price <= price
      //   );
      // }

      return {
        ...state,
        filter_Products: tempfilter,
      };

    default:
      return state;
  }
};

export default filterReducer;
