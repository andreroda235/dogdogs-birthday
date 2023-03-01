import { createSlice } from '@reduxjs/toolkit'
import { ANIMATION_TYPE_ABILITY, ANIMATION_TYPE_CARDFLIP, GAMESTATE_GAME_OVER, GAMESTATE_PLAYING, GAMESTATE_START_MENU, GAMESTATE_WIN, LEVEL_TOTAL_GIFTS, PLAYER_MUSIC, PLAYER_SOUNDEFFECTS } from '../util/constants';

const initialState = {
    player: '',
    health: 100,
    totalGiftsOpened: 0,
    playEnemySFX: false,
    giftStreak: 0,
    enemyStreak: 0,
    streak1: false,
    streak2: false,
    streak3: false,
    durationStacking: 0,
    highestStreak: 0,
    abilityCounter: 0,
    abilityStreak: 0,
    animationLayer_Card: undefined,
    animationLayer_Ability: undefined,
    musicPlayer: undefined,
    soundEffects: undefined,
    gifts: [],
    gameState: GAMESTATE_START_MENU
};

export const gameStateSlice = createSlice({
    name: 'gameState',
    initialState: initialState,
    reducers: {

        //
        reset(state, action) {
            return initialState;
        },

        retry(state, action) {
            return { ...initialState, player: state.player,  gameState: GAMESTATE_PLAYING};
        },

        attack(state, action) {
            if(state.abilityCounter > 0){
                if(state.streak1){
                    state.streak1 = false;
                } else if(state.streak2) {
                    state.streak2 = false;
                }
                else if(state.streak3) {
                    state.streak3 = false;
                }

                state.abilityCounter = state.abilityCounter - 1 === 0 ? 0 : state.abilityCounter - 1;
                return;
            }

            state.enemyStreak++;
            state.giftStreak = 0;
           /*  state.abilityStreak = 0; */
            let remainingHealth = state.health - state.enemyStreak*action.payload.damage;
            if(remainingHealth < 0) remainingHealth = 0;
                state.health = remainingHealth;
            if(remainingHealth === 0)
                state.gameState = GAMESTATE_GAME_OVER;
        },

        reward(state, action) {
            state.enemyStreak = 0;
            state.giftStreak++;
            state.totalGiftsOpened++;
            state.abilityStreak++;

            /* if(state.abilityStreak === 5) {
                state.abilityCounter++;
                state.abilityStreak = 0;
            } */

            if(state.giftStreak === 5){
                state.streak1 = true;
                state.abilityCounter++;
            }
            else if(state.giftStreak === 10){
                state.streak2 = true;
                state.abilityCounter++;
            }
            else if(state.giftStreak === 15){
                state.streak3 = true;
                state.abilityCounter++;
            }
            
            if(state.giftStreak > state.highestStreak)
                state.highestStreak = state.giftStreak;
            if(state.totalGiftsOpened === LEVEL_TOTAL_GIFTS){
                state.gameState = GAMESTATE_WIN;
                return;
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
        },

        newGameState(state, action) {
            state.gameState = action.payload;
        },

        setPlayerName(state, action) {
            console.log(action.payload);
            state.player = action.payload;
        },

        playEnemySFX(state, action) {
            state.playEnemySFX = true;
        },

        resetPlayEnemySFX(state, action) {
            state.playEnemySFX = false;
        },

        saveGift(state, action) {
            state.gifts.push(action.payload);
        },

        updateCurrentCardDuration(state, action) {
            state.durationStacking = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { attack, reward, initAnimationLayer, requestAnimation, initSound,
    newGameState, setPlayerName, reset, retry, playEnemySFX, resetPlayEnemySFX,
    saveGift, updateCurrentCardDuration } = gameStateSlice.actions;

export default gameStateSlice.reducer;