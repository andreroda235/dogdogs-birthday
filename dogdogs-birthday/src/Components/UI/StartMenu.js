
import classes from './StartMenu.module.css';
import backDropClasses from './Backdrop.module.css';


import akamaru from '../../Assets/Images/akamaru-start.jpg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newGameState, setPlayerName } from '../../Redux/gamestate-slice';
import { GAMESTATE_PLAYING } from '../../util/constants';

const StartMenu = () => {

    const [player, setPlayer] = useState();
    const dispatch = useDispatch();

    const startGameHandler = () => {
        console.log(player)
        dispatch(setPlayerName(!player ? 'DogDog' : player));
        dispatch(newGameState(GAMESTATE_PLAYING));
    };

    const changePlayerName = (event) => {
        setPlayer(event.target.value);
    };

    return (
        <div className={classes['start-menu'] + ' ' + 
        backDropClasses.backdrop + ' ' + 
        backDropClasses.black}>
            <div className={classes.wp}>
                <img src={akamaru} alt="something went wrong while loading akamaru"/>
            </div>
            <div className={classes.menu}>
                <h1>Dogdog: The Game</h1>
                <div className={classes.group}>
                    <label for="player">Player:</label>
                    <input onChange={changePlayerName} type="text" placeholder='(15 chars max)' name="player" id="player" maxLength={15}/>
                </div>
                <button onClick={startGameHandler}>Start Game</button>
            </div>
        </div>
    );
};

export default StartMenu;