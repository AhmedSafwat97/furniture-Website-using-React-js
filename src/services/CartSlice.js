import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    SelectedProducts : localStorage.getItem("SelectedPro")
        ? JSON.parse(localStorage.getItem("SelectedPro")) : []


   , SelectedProductsId : localStorage.getItem("SelectedProId")
   ? JSON.parse(localStorage.getItem("SelectedProId")) : []


}




export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    AddToCart: (state , action) => {
      const ProductWithCount = {...action.payload , quantity : 1}
      state.SelectedProducts.push(ProductWithCount)
      state.SelectedProductsId.push(action.payload.id)


    localStorage.setItem("SelectedPro" , JSON.stringify(state.SelectedProducts)) 
    localStorage.setItem("SelectedProId" , JSON.stringify(state.SelectedProductsId)) 


      },
    increment: (state , action) => {

      const incrementProduct = state.SelectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      incrementProduct.quantity += 1;

      localStorage.setItem("SelectedPro" , JSON.stringify(state.SelectedProducts)) 
      localStorage.setItem("SelectedProId" , JSON.stringify(state.SelectedProductsId)) 


    },
    decrement: (state , action) => {
      
      const decrementProduct = state.SelectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      
      // to remove item from array we use
    // we make a filter on selectedproduct and selectedproductid to remove this product from the array 
  

    decrementProduct.quantity -= 1;


      if (decrementProduct.quantity === 0) {
        const NewSelectedproducts = state.SelectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        const NewSelectedproductsId = state.SelectedProductsId.filter((item) => {
            return item !== action.payload.id;
          }
        );
        state.SelectedProducts = NewSelectedproducts;
        state.SelectedProductsId = NewSelectedproductsId;


        localStorage.setItem("SelectedPro" , JSON.stringify(state.SelectedProducts)) 
        localStorage.setItem("SelectedProId" , JSON.stringify(state.SelectedProductsId)) 


    }} ,

    deleteFromCart: (state , action) => {
      const NewSelectedproducts = state.SelectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      const NewSelectedproductsId = state.SelectedProductsId.filter((item) => {
          return item !== action.payload.id;
        })


        state.SelectedProducts = NewSelectedproducts;
        state.SelectedProductsId = NewSelectedproductsId;

        localStorage.setItem("SelectedPro" , JSON.stringify(state.SelectedProducts)) 
        localStorage.setItem("SelectedProId" , JSON.stringify(state.SelectedProductsId)) 
        


    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, AddToCart , deleteFromCart } = CartSlice.actions

export default CartSlice.reducer