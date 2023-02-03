import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    data : []
}

const filter = createSlice({
    name:"filter",
    initialState,
    reducers:{
        filter_data:(state,action)=>{
            console.log("filter")
            state.data.push(action.payload)

        }
    }
})


export const {filter_data} = filter.actions;
export default filter.reducer;