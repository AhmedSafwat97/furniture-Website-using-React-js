import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
    favProducts : localStorage.getItem("favPro")
        ? JSON.parse(localStorage.getItem("favPro")) : []


   , favProductsId : localStorage.getItem("favProId")
   ? JSON.parse(localStorage.getItem("favProId")) : []


}



export const favSlice = createSlice({
  name: 'Fav',
  initialState,
  reducers: {
    AddToFav: (state , action) => {
      state.favProducts.push(action.payload)
      state.favProductsId.push(action.payload.id)

      toast.success(`You add  ${action.payload.Name} to the favourites`);



    localStorage.setItem("favPro" , JSON.stringify(state.favProducts)) 
    localStorage.setItem("favProId" , JSON.stringify(state.favProductsId)) 

      } ,
    deleteFromFav: (state , action) => {
      const NewfavProducts = state.favProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      const NewfavProductsId = state.favProductsId.filter((item) => {
          return item !== action.payload.id;
        })


        state.favProducts = NewfavProducts;
        state.favProductsId = NewfavProductsId;

        toast.success(`You deleted ${action.payload.Name} from favourites`);


        localStorage.setItem("favPro" , JSON.stringify(state.favProducts)) 
        localStorage.setItem("favProId" , JSON.stringify(state.favProductsId)) 
        


    },

  },
})

// Action creators are generated for each case reducer function
export const { AddToFav , deleteFromFav } = favSlice.actions

export default favSlice.reducer