import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newGameState } from "../../../Redux/gamestate-slice";
import { GAMESTATE_CREDITS_VIDEO, GAMESTATE_START_MENU } from "../../../util/constants";

import classes from './Credits.module.css';

const credits = [
    'Creative Director:',
    'Produced by:',
    'Story by:',
    'Technical Director:',
    'Art Direction:',
    'Progamming Direction:',
    'Assitant Programming:',
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
            else
                dispatch(newGameState(GAMESTATE_START_MENU))
        }

        const timeout = setTimeout(() => {
          setCreditIndex(prevState => prevState + 1);
        }, creditIndex === 0 ? 8000 : 5000);
    
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