const Cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(
    //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
    //   product
    // );

    //tackle the existing product
    let existproduct = state.cart.find((curitem) => curitem.id === id + color);

    if (existproduct) {
      let updatedproducr = state.cart.map((cuelem) => {
        if ((cuelem.id = id + color)) {
          let newAmount = cuelem.amount + amount;

          if(newAmount >= cuelem.max){
            newAmount = cuelem.max
          }

          return {
            ...cuelem,
            amount: newAmount,
          };
        } else {
          return cuelem;
        }
      });
      return{
        ...state,
          cart: updatedproducr
      }
    }
     else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  //set increment and decrement
  if(action.type === "DECREASE"){
    let updatePro = state.cart.map((curElem)=>{
      if (curElem.id === action.payload){
        let decamount = curElem.amount-1;

        if(decamount <= 1){
          decamount = 1;
        }

        return{
          ...curElem,
          amount: decamount
        };
      
      }
      else{
        return curElem

      }
    })
    return {...state,cart:updatePro}
  }



    //increment
    if(action.type === "INCREASE"){
      let updatePro = state.cart.map((curElem)=>{
        if (curElem.id === action.payload){
          let increment = curElem.amount+1;
  
          if(increment >= curElem.max){
            increment = curElem.max;
          }
  
          return{
            ...curElem,
            amount: increment
          };
        
        }
        else{
          return curElem
  
        }
      })
      return {...state,cart:updatePro}
    }


  if (action.type === "REMOVE_ITEM") {
    let updataecart = state.cart.filter(
      (curElem) => curElem.id !== action.payload //if id match dont delete
    );
    return {
      ...state,
      cart: updataecart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if(action.type === "CART_TOTAL"){
    let updateditem = state.cart.reduce((initialval, curElem)=> {
      let {amount} = curElem;
      initialval = initialval + amount;
      return initialval
    } , 0)

    return {
      ...state,
      total_item: updateditem
    }
  }

  if(action.type === "TOTTAL_PRICE"){
    let total_price = state.cart.reduce((initial,curElem)=>{

      let {price,amount} = curElem;
      initial = initial + price * amount;

      // 25000+ 0 = 25000
      //10199 + 2500 =zz
      return initial

    },0) 
    return{
      ...state,
      total_price : total_price
    }
  }
  return state;
};

export default Cart_reducer;
