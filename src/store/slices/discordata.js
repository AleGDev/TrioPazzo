import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: []
}

const cardSlice = createSlice({
    name: "cards",
    initialState: initialState,
    reducers: {
        addCard(state, action) {
            state.cards.push(action.payload)
        },
        removeCard(state, action) {
            const fixedCards = state.cards.filter((card) => {
                return card !== action.payload.id
            });
            state.cards = fixedCards;
        }
    }
})

export const cardActions = cardSlice.actions;

export default cardSlice.reducer