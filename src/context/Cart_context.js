import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/Cart_reducer'
import { useEffect } from "react";


const cartContext = createContext();

const getLocalCartData = ()=>{  //get the data from localstorage 
    let newCart = localStorage.getItem("mmCart");
    if(newCart === []){
        return [];
    } 
    else{
        return JSON.parse(newCart);
    }
}
const initialState = {
    // cart : [],
    cart: getLocalCartData(),
    total_item: "",
    total_price:"",
    shipping_fee: 5000,

}

const CartProvider = ({children})=>{ //index.js wrap

    const [state,dispatch] = useReducer(reducer,initialState)

    const AddToCart=(id,color,amount,product) =>{
        dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}})
    }
    
   const removeItem = (id)=>{
     dispatch({type: "REMOVE_ITEM", payload:id})
    }

    //adding cart data on LOCAL Storage
    useEffect(()=>{
        dispatch({type:"CART_TOTAL"}) //calling dynamically
        dispatch({type:"TOTTAL_PRICE"}) //cart total
        localStorage.setItem("mmCart",JSON.stringify(state.cart))
    },[state.cart])

    //clear the cart
    const clearcart = ()=>{
        dispatch({type:"CLEAR_CART"})
    }

    //setDecrease and increwaein a cart
    const setDecrease = (id) =>{
        dispatch({type:"DECREASE", payload:id})
    }
    const setIncrease = (id) =>{
        dispatch({type:"INCREASE", payload:id})
    }

    return <cartContext.Provider value={{...state,AddToCart,removeItem,clearcart,  setDecrease,setIncrease}}>
        {children}
    </cartContext.Provider>
}

//context hook
const useCartContext = ()=>{
    return useContext(cartContext)
}

 export {CartProvider,useCartContext} ;