import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hasLocationPermission: false,
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        locationPermission: (state, action) => {
            console.log("inside the location slice", action.payload);
            state.value = action.payload;
        },
    },
})

export const { locationPermission } = locationSlice.actions

export default locationSlice.reducer