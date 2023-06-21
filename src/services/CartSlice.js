import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedProducts : [
      {
        id: 8,
        Name: "Bed",
      category : "Tables"  ,
      description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
        price: 400,
        discount : false ,
        rate : 4.5 ,
        imageLink: "../../Imgs/Products/Bed room.png" ,
        count : 11 ,
        sold : 10 ,
        tags : "Bed , wooden Bed , steel  Bed" ,
        reviews : 14 ,
      },

    ]

   , selectedProductsId : []


}

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    AddToCart: (state , action) => {
      const ProductWithCount = {...action.payload , quantity : 1}
      state.selectedProducts.push(ProductWithCount)

      state.selectedProductsId.push(action.payload.id)





      },
    increment: (state) => {
    },
    decrement: (state) => {
    },
    deleteFromCart: (state) => {
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, AddToCart , deleteFromCart } = CartSlice.actions

export default CartSlice.reducer