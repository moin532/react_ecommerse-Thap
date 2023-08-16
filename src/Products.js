import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import Productlist from "./components/Productlist";
// import { useFilterContext } from "./context/Filter_Context";


const Products = () => {
  // const { filter_Products} = useFilterContext();
  // console.log(filter_Products)

  
  return <Wrapper>
    <div className="container grid grid-filter-column">
      <div >
        <FilterSection/>
      </div>

    <section className="product-view--sort">
      <div className="sort-filter">
        <Sort/>
      </div>
    <div className="main-product">
      <Productlist/>
    </div>
    </section>
    </div>


  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
