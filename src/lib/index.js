const { configureStore } = require("@reduxjs/toolkit");
const { default: userSlice } = require("./slices/user");
const { default: productSlice } = require("./slices/product");

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        product: productSlice.reducer
    }
})
export default store