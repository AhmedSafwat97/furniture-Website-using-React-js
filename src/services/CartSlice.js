import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // selectedProducts = []
}

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    AddToCart: (state) => {






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