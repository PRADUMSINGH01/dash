import {createSlice} from '@reduxjs/toolkit';

const initialState={
    data:[]
}

const wishlist = createSlice({
    name:"wishlist",
    initialState,
    reducers:{

        add:(state,action)=>{
           state.data = action.payload
            
        }
    }
}) 


export const {add} = wishlist.actions;
export default wishlist.reducer;
