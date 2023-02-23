
import classes from './Page.module.css';

const Page = ({children, className, gradient}) => {


    return (
        <div className={'page ' + (gradient && classes['gradient-page']) + ' ' + className}>
            {children}
        </div>
    );
};

export default Page;