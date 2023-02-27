
import classes from './Page.module.css';



const Page = ({children, className}) => {

    return (
        <div className={classes.page + ' ' + className}>
            {children}
        </div>
    );
};

export default Page;