
// create slice
// initialize initial state
// create action
// create reducer
// create store
// slice -> name, initial state, reducer, action


import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = []

const cartSlice = createSlice({ // create slice
    name: "cart", // name
    initialState, // initial state
    reducers: { // reducer
        addProduct: (state, action) => {
            // console.log(action);
            state.push(action.payload)
        },
        removeProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload.id)
        }
    },
})

// export reducer
export default cartSlice.reducer
// action
export const { addProduct, removeProduct } = cartSlice.actions

// initial state
// const initialState = {
//     quantity: 0,
//     total: 0,
//     products: [],
// }

// reducer
// reducers: {
//     addProduct: (state, action) => {
//         state.quantity += 1;
//         state.products.push(action.payload);
//         state.total += action.payload.price * action.payload.quantity;
//     },
// },


// const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "cart/addProduct":
//             return state;
//         default:
//             return state;
//     }
// }

// action
// export const cartActions = cartSlice.actions