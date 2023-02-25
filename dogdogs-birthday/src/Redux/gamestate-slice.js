import { createSlice } from '@reduxjs/toolkit'
import { ANIMATION_TYPE_ABILITY, ANIMATION_TYPE_CARDFLIP } from '../util/constants';

const initialState = {
    health: 100,
    giftStreak: 0,
    enemyStreak: 0,
    abilityCounter: 0,
    animationLayer_Card: undefined,
    animationLayer_Ability: undefined
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
            state.abilityCounter = state.abilityCounter - 1 === 0 ? 0 : state.abilityCounter - 1;
            let remainingHealth = state.health - state.enemyStreak*action.payload.damage;
            if(remainingHealth < 0) remainingHealth = 0;
            state.health = remainingHealth;
        },

        reward(state, action) {
            state.enemyStreak = 0;
            state.giftStreak++;
            state.abilityCounter = Math.floor(state.giftStreak / 5);
        },

        /* animationType: ANIMATION_TYPE_CARDFLIP,
                postAnimationAction: cardAction,
                data: {
                    type: type,
                    content: prize,
                } */

        initAnimationLayer(state, action) {
            const payload = action.payload;
            if(payload.type === ANIMATION_TYPE_CARDFLIP)
                state.animationLayer_Card = payload.startAnimation;
            else if(payload.type === ANIMATION_TYPE_ABILITY)
                state.animationLayer_Ability = payload.startAnimation;
        },
        
        requestAnimation(state, action) {
            const payload = action.payload;
            if(payload.animationType === ANIMATION_TYPE_CARDFLIP)
                state.animationLayer_Card(payload.data, payload.postAnimationAction);
            else if(payload.animationType === ANIMATION_TYPE_ABILITY)
                console.log('ability!');
        }
    }
})

// Action creators are generated for each case reducer function
export const { attack, reward, initAnimationLayer, requestAnimation } = gameStateSlice.actions

export default gameStateSlice.reducer