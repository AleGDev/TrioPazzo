import { configureStore } from "@reduxjs/toolkit";

import discordata from "./slices/discordata";



const store = configureStore({
    reducer: { card: discordata }
})


export default store;