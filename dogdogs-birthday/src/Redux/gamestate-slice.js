import { createSlice } from '@reduxjs/toolkit'
import { ANIMATION_TYPE_ABILITY, ANIMATION_TYPE_CARDFLIP, GAMESTATE_GAME_OVER, GAMESTATE_PLAYING, PLAYER_MUSIC, PLAYER_SOUNDEFFECTS } from '../util/constants';

const initialState = {
    player: 'DOGDOG',
    health: 100,
    giftStreak: 0,
    enemyStreak: 0,
    highestStreak: 0,
    abilityCounter: 0,
    animationLayer_Card: undefined,
    animationLayer_Ability: undefined,
    musicPlayer: undefined,
    soundEffects: undefined,
    gameState: /* GAMESTATE_GAME_OVER */ GAMESTATE_PLAYING
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
            if(remainingHealth === 0)
                state.gameState = GAMESTATE_GAME_OVER;
        },

        reward(state, action) {
            state.enemyStreak = 0;
            state.giftStreak++;
            if(state.giftStreak > state.highestStreak)
                state.highestStreak = state.giftStreak;
            state.abilityCounter = Math.floor(state.giftStreak / 5);

            if(state.abilityCounter >= 1){
                /* state.musicPlayer.play('../Assets/sound/music/connected.mp3'); */
                console.log(state.musicPlayer);
            }
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
        },

        initSound(state, action) {
            const payload = action.payload;
            if(payload.type === PLAYER_SOUNDEFFECTS)
                state.soundEffects = payload.player;
            else if(payload.type === PLAYER_MUSIC)
                state.musicPlayer = payload.player;
        }
    }
})

// Action creators are generated for each case reducer function
export const { attack, reward, initAnimationLayer, requestAnimation, initSound } = gameStateSlice.actions

export default gameStateSlice.reducer