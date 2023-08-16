import React from 'react'
import { useFilterContext } from '../context/Filter_Context'
import Gridview from './Gridview';
import ListView from './ListView';

const Productlist = () => {

  const {filter_Products , grid_view } = useFilterContext();
   
  if (grid_view === true ){
    return <Gridview prodouct={filter_Products}/>
  }

  if (grid_view === false){
    return <ListView prodoucts={filter_Products} />
  }
  
}

export default Productlist
