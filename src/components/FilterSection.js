import styled from "styled-components";
import { useFilterContext } from "../context/Filter_Context";
import { FaCheck } from "react-icons/fa";
// import FormatPrice from '../components/helpers/FormatPrice'

const FilterSection = () => {
  const {
    filters: { text, category, color},
    updateFilterValue,
    all_products,
  } = useFilterContext();

  //to get uniquedata
  const getUniqueData = (data, attr) => {
    let newValue = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      // return (newValue = ["All", ...new Set([].concat(...newValue))])  //removes all duplicate value in colors
      newValue = newValue.flat(); //it also a same
    }
    return (newValue = ["All", ...new Set(newValue)]);
  };

  //we need ab unique data;
  const categorydata = getUniqueData(all_products, "category");
  const companydata = getUniqueData(all_products, "company");
  const colorsdata = getUniqueData(all_products, "colors");
  // console.log(colorsdata)
  // console.log(compony)

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categorydata.map((curelem, ind) => {
            return (
              <button
                key={ind}
                type="button"
                name="category"
                onClick={updateFilterValue}
                value={curelem}
              >
                {curelem}
              </button>
            );
          })}
        </div>

        <div className="filter-compony">
          <h3>Components</h3>
          <form action="#">
            <select
              name="company"
              id="company"
              className="filter-company-select"
              onClick={updateFilterValue}
            >
              {companydata.map((curElem, inde) => {
                return (
                  <option key={inde} value={curElem} name="company">
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style ">
          {colorsdata.map((curColor, index) => {
            if (curColor.toLowerCase() === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

       {/* <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>  */}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection;
