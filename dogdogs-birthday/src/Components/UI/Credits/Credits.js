
import { useDispatch, useSelector } from 'react-redux';

import { newGameState } from '../../../Redux/gamestate-slice';
import { GAMESTATE_CREDITS, GAMESTATE_CREDITS_SECRET, GAMESTATE_CREDITS_VIDEO } from '../../../util/constants';

import CreditsText from './CreditsText';
import Secret from './Secret';

import classes from './Credits.module.css';
import backDropClasses from '../../UI/Backdrop.module.css';

import oneMoreThing from '../../../Assets/video/one-more-thing.mp4';

const Credits = () => {

    const gameState = useSelector(state => state.gameState);
    const dispatch = useDispatch();

    const onVideoEnd = () => {
        console.log('end');
        dispatch(newGameState(GAMESTATE_CREDITS_SECRET))
    };

    return (
        <div className={classes.credits + ' ' + 
            backDropClasses.backdrop + ' ' + 
            backDropClasses.black}>
            {gameState === GAMESTATE_CREDITS && <CreditsText/>}
            {gameState === GAMESTATE_CREDITS_VIDEO &&
                <video autoPlay onEnded={onVideoEnd}>
                    <source src={oneMoreThing} type="video/mp4" />
                </video>
            }
            {gameState === GAMESTATE_CREDITS_SECRET &&
                <Secret/>
            }
        </div>
    );
};

export default Credits;