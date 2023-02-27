import GuessCard from '../Components/Cards/GuessCard';
import Page from './Page';
import UI from '../Components/UI/UI';
import HealthBar from '../Components/UI/HealthBar';

import classes from './GuessGame.module.css';
import { generateLevelMatrix } from '../util/Level';
import { useEffect, useRef, useState } from 'react';
import AnimationLayer from '../Components/UI/Animation/AnimationLayer';
import Abilities from '../Components/UI/Abilities/Abilities';
import StreakCounter from '../Components/UI/StreakCounter';
import { useDispatch, useSelector } from 'react-redux';
import { GAMESTATE_GAME_OVER, GAMESTATE_PLAYING, PLAYER_MUSIC, PLAYER_SOUNDEFFECTS } from '../util/constants';
import GameOver from '../Components/UI/GamerOver';
import { useMusic } from '../hooks/music-hook';
import { initSound } from '../Redux/gamestate-slice';

import track from '../Assets/sound/music/connected-loop.mp3';
import Background from '../Components/UI/Background';

const prizes = [
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
];

const GuessGame = () => {
    const gameState = useSelector(state => state.gameState);


    const levelMatrix = useRef(undefined);
    if(!levelMatrix.current)
        levelMatrix.current = generateLevelMatrix(6, 6, 6);
 

    return (
        <Page gradient>
           {gameState === GAMESTATE_PLAYING && 
            <>
            <Background/>
            <AnimationLayer/>
                <UI>
                    <HealthBar/>
                    <Abilities/>
                </UI>
                <div className={classes['guess-game']}>
                    {levelMatrix.current.map((value) => (
                        <GuessCard
                            prize={prizes[value]}
                            type={value}
                        />
                    ))}
                </div>
                <UI>
                    <StreakCounter/>
                </UI>
            </>}
            {gameState === GAMESTATE_GAME_OVER &&
                <GameOver/>
            }
        </Page>
    );
};

export default GuessGame;