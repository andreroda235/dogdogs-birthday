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
    {duration:true , prize: "You get to change Andre's profile picture for "},
    {duration:true , prize: "You get to customize André's status for "},
    {duration:true , prize: "You get to customize André's about section for "},
    {duration:true , prize: "You get to steal Mango's birds for "},
    {duration:false , prize: "You will get a custom role on the server!"},
    {duration:false , prize: "You get to make everyone vote for someone of your choosing in Amongus! (3 uses)"},
    {duration:true , prize: "You get to change André's channel description for "},
    {duration:false , prize: "You win any argument against André! (2 uses)"},
    {duration:false , prize: "TTS generated Amongus song with accusations of your choosing!(unlimited)"},
    {duration:true , prize: "André will have to address you in the way you choose for "},
    {duration:false , prize: "Clue will watch 3 episodes of Naruto with you!:eyes:"},
    {duration:false , prize: "You will get a Barbie movie party!"},
    {duration:true , prize: "André will send you 3 pics of his dogs everyday for "},
    {duration:false , prize: "You will get a certificate with title and recipient of your choosing!"},
    {duration:false , prize: "André will make a form about you and make everyone say nice things or :ban:"},
    {duration:false , prize: "You get a dramatic reading of big foot erotica!"},
    {duration:false , prize: "Andre will read Book Lovers!"},
    {duration:false , prize: "You get to demand pet pictures from everyone! (unlimited use)"},
    {duration:false , prize: "You get to change the general chat emoji!"},
    {duration:false , prize: "You get to make a poll in #polls! (1 use)"},
    {duration:false , prize: "You get to pick your own -dogdog command!"},
    {duration:false , prize: "We will do a bread tier list!"},
    {duration:false , prize: "We will do a Barbie tier list!"},
    {duration:false , prize: "You will get a buddy read of your choosing!"},
    {duration:false , prize: "You will get a Scribbl.io game with words of your choosing!"},
    {duration:false , prize: "André will go to bed. (5 uses)"},
    {duration:false , prize: "You will get 30 minutes of watching any random youtube video you want in vc!"},
    {duration:false , prize: "You will get a png of anyone's pfp with a poorly placed mustache! (unlimited use)"},
    {duration:false , prize: 'Any prize with a limited time is now 1 Month!', stacking: 1},
    {duration:false , prize: 'Any prize with a limited time is now 1 Year!', stacking: 2},
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