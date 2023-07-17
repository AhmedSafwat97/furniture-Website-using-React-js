import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'


const initialState = {
    SelectedProducts : localStorage.getItem("SelectedPro")
        ? JSON.parse(localStorage.getItem("SelectedPro")) : []


   , SelectedProductsId : localStorage.getItem("SelectedProId")
   ? JSON.parse(localStorage.getItem("SelectedProId")) : []

 , disable : localStorage.getItem("copon") ? JSON.parse(localStorage.getItem("copon")) : false
,
 proadata : localStorage.getItem("newdata")
 ? JSON.parse(localStorage.getItem("newdata")) : []

}

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    AddToCart: (state , action) => {
      const ProductWithCount = {...action.payload , quantity : 1}
      state.SelectedProducts.push(ProductWithCount)
      state.SelectedProductsId.push(action.payload.id)


      toast.success(`You add  ${action.payload.Name} to the cart`);



    localStorage.setItem("SelectedPro" , JSON.stringify(state.SelectedProducts)) 
    localStorage.setItem("SelectedProId" , JSON.stringify(state.SelectedProductsId)) 



      },

    increment: (state , action) => {

      const incrementProduct = state.SelectedProducts.find((item) => {
        return item.id === action.payload.id;
      });



      // this condition to not increse the quantity if the quantity > product Count
    if (incrementProduct.quantity >= incrementProduct.count) {
      toast.error(`Sorry there are only ${action.payload.count} pieces of ${action.payload.Name} `, {
        // toastId to we give each of them an id so that it cant be repeated again when we click in the button
        theme: "colored" , toastId: incrementProduct.id });
      incrementProduct.quantity =  incrementProduct.count -1
    } 



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
    // state.disablebutton = false

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

      
        toast.success(`You have removed ${action.payload.Name} From The Cart`);


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

        toast.success(`You deleted ${action.payload.Name} from the cart`);


        localStorage.setItem("SelectedPro" , JSON.stringify(state.SelectedProducts)) 
        localStorage.setItem("SelectedProId" , JSON.stringify(state.SelectedProductsId)) 
        


    },

    CoponCoode: (state , action) => {

     state.disable = action.payload

     localStorage.setItem("copon" , JSON.stringify(state.disable))


    } ,

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, AddToCart , deleteFromCart , CoponCoode } = CartSlice.actions

export default CartSlice.reducer