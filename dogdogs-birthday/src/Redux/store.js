import { configureStore } from '@reduxjs/toolkit'
import { gameStateSlice } from './gamestate-slice';



const store = configureStore({
    reducer: gameStateSlice.reducer
});

/* export const unsubscribe = store.subscribe(()=>{
  console.log('saving... ' + JSON.stringify(store.getState().auth));
  localStorage.setItem('reduxState-auth', JSON.stringify(store.getState().auth));
}); */

/* console.log(unsubscribe); */

export default store;