import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = ({children}) => {
   return (
    <div className={classes.backdrop}>{children}</div>
   );
};

export default Backdrop;