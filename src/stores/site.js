import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toggle : false
}

const siteSlice = createSlice({
    name : 'site',
    initialState,
    reducers : {
        setToggle : (state , action) => {
            state.toggle = action.payload
        }
    }
})

export const {
    setToggle
} = siteSlice.actions

export default siteSlice.reducer