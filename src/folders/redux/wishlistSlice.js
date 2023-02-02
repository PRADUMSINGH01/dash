import {createSlice} from '@reduxjs/toolkit';



const initialState ={
    data : []
}

const wishlistdata  = createSlice({
    name:"wishlistdata",
    initialState,
    reducers:{
        Add_wishList :(state, action)=>{
            state.data .push(action.payload);
        }
    }
})

export const {Add_wishList} = wishlistdata.actions;
export default wishlistdata.reducer;