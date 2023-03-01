import GuessCard from '../Components/Cards/GuessCard';
import Page from './Page';
import UI from '../Components/UI/UI';
import HealthBar from '../Components/UI/HealthBar';

import classes from './GuessGame.module.css';
import { generateLevelMatrix } from '../util/Level';
import { useRef } from 'react';
import AnimationLayer from '../Components/UI/Animation/AnimationLayer';
import Abilities from '../Components/UI/Abilities/Abilities';
import StreakCounter from '../Components/UI/StreakCounter';
import { useSelector } from 'react-redux';
import { GAMESTATE_CREDITS, GAMESTATE_CREDITS_SECRET, GAMESTATE_GAME_OVER, GAMESTATE_PLAYING, GAMESTATE_START_MENU, GAMESTATE_WIN, PLAYER_MUSIC, PLAYER_SOUNDEFFECTS } from '../util/constants';
import GameOver from '../Components/UI/GamerOver';

import Background from '../Components/UI/Background';
import GameWon from '../Components/UI/GameWon';
import Credits from '../Components/UI/Credits/Credits';
import StartMenu from '../Components/UI/StartMenu';

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
        <Page>
            {gameState === GAMESTATE_START_MENU && 
                <StartMenu/>
            }
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
            {gameState === GAMESTATE_WIN &&
                <GameWon/>
            }
            {gameState >= GAMESTATE_CREDITS && gameState <= GAMESTATE_CREDITS_SECRET &&
                <Credits/>
            }
        </Page>
    );
};

export default GuessGame;