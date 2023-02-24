import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    health: 100,
    giftStreak: 0,
    enemyStreak: 0
};

export const gameStateSlice = createSlice({
    name: 'gameState',
    initialState: initialState,
    reducers: {
        /* increment: state => {
        state.value += 1
        },
        decrement: state => {
        state.value -= 1
        },
        incrementByAmount: (state, action) => {
        state.value += action.payload
        } */
        attack(state, action) {
            state.enemyStreak++;
            state.giftStreak = 0;
            let remainingHealth = state.health - state.enemyStreak*action.payload.damage;
            if(remainingHealth < 0) remainingHealth = 0;
            state.health = remainingHealth;
        },

        reward(state, action) {
            state.enemyStreak = 0;
            state.giftStreak++;
        }
    }
})

// Action creators are generated for each case reducer function
export const { attack, reward } = gameStateSlice.actions

export default gameStateSlice.reducer