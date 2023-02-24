import classes from './UI.module.css';

const UI = ({children}) => {
    return (
        <div className={classes.UI}> 
            {children}
        </div>
    );
};

export default UI;