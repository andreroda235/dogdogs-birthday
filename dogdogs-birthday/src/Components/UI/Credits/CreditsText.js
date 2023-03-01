import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newGameState, reset } from "../../../Redux/gamestate-slice";
import { GAMESTATE_CREDITS_VIDEO, GAMESTATE_START_MENU } from "../../../util/constants";

import classes from './Credits.module.css';

const credits = [
    'Creative Director:',
    'Production Director:',
    'Story by:',
    'Written by: Clue, Not_Sam &',
    'Technical Director:',
    'Art Director:',
    'Technical Art Director:',
    'Level Design Director:',
    'Animation Director:',
    'Progamming:',
    'Assitant Programming:',
    'A Game by:',
    'Director of André:',
    'André of André:',
    'André by André:',
    'André:',
    'Are you still watching:',
    'You know you can skip right?:',
    "It's in your bottom right corner:",
    'Ok, suit yourself:',
    'Still here?:',
    'Ok:',
    ':',
    ':',
    "Yes, i'm ignoring you:",
    "No, this does not count. I'm still ignoring you:",
    "Ugh:",
    "You're so annoying:",
    "Do you not care about how much time I spent programming that button??:",
    "Song's almost over..:",
    "Keep at it and see what happens.:",
    "Yes i'm threatening you.:",
    "Ok i'm hacking your computer now with this program.:",
    "Oh now you're scared?.:",
    "Good.:",
    "Anyway.:",
    "Hope you enjoyed this dogdog! Happy Birthday!:care:.:",
];

const CreditsText = () => {
    const [creditIndex, setCreditIndex] = useState(0);
    const dispatch = useDispatch();
    const highestStreak = useSelector(state => state.highestStreak);
    /* const [timeout, updateTimeout] = useState(); */

    useEffect(() => {
        if(creditIndex === credits.length){
            if(highestStreak >= 15)
                dispatch(newGameState(GAMESTATE_CREDITS_VIDEO));
            else {
                dispatch(newGameState(GAMESTATE_START_MENU));
                dispatch(reset());
            }
        }

        const timeout = setTimeout(() => {
          setCreditIndex(prevState => prevState + 1);
        }, 5999);
    
        return () => clearTimeout(timeout)
    
      }, [creditIndex]);

    return (
        <>
            <div className={classes.credits}>
                <p>{credits[creditIndex]}</p>
                <p>André</p>
            </div>
            <button className={classes.skip}
               onClick={() => setCreditIndex(credits.length)} >Skip Credits</button>
        </>
    );
};

export default CreditsText;