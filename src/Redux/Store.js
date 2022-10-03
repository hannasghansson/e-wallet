import { configureStore } from "@reduxjs/toolkit";
import SliceUser from "./SliceUser";
import SliceCards from "./SliceCards";

const Store = configureStore({

    reducer: {
        user: SliceUser,
        cards: SliceCards,
    }

})

export default Store