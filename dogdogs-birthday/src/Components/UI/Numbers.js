import classes from './Numbers.module.css';
import numbers from '../../util/number-imports';

const Numbers = ({value, size}) => {
    const radix = Math.floor(value / 10);
    const digit = value % 10;

    return (
        <div className={classes.numbers + ' ' + classes[size]}>
                {radix !== 0 && <img src={numbers[radix]} alt={radix}/>}
                <img src={numbers[digit]} alt={digit}/>
        </div>
    );
};

export default Numbers;