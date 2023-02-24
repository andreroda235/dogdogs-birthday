import GuessCard from '../Components/Cards/GuessCard';
import Page from './Page';
import UI from '../Components/UI/UI';
import HealthBar from '../Components/UI/HealthBar';

import classes from './GuessGame.module.css';
import { generateLevelMatrix } from '../util/Level';
import { useRef } from 'react';

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

    const levelMatrix = useRef(undefined);
    if(!levelMatrix.current)
        levelMatrix.current = generateLevelMatrix(6, 6, 6);
 
    return (
        <Page gradient>
            <UI>
                <HealthBar/>
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
                
            </UI>
        </Page>
    );
};

export default GuessGame;