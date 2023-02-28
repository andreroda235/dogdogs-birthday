import AbilityCard from './Abilities/AbilityCard';
import Numbers from './Numbers';
import classes from './Unlockable.module.css';

const Unlockable = ({children, highestStreak, threshold, flipped}) => {
    const isUnlocked = highestStreak >= threshold;

    return (
        <div className={classes.unlockable + ' ' + ( (!flipped || !isUnlocked) && classes.locked)}>
            <AbilityCard isFlipped={isUnlocked && flipped}>
                {children}
            </AbilityCard>
            <Numbers size='small' value={threshold}/>
        </div>
    );
};

export default Unlockable;