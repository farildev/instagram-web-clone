import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toggle : false,
    sidebar : false
}

const siteSlice = createSlice({
    name : 'site',
    initialState,
    reducers : {
        setToggle : (state , action) => {
            state.toggle = action.payload
        },
        setSidebar : (state , action) => {
            state.sidebar = action.payload
        }
    }
})

export const {
    setToggle,
    setSidebar
} = siteSlice.actions

export default siteSlice.reducer