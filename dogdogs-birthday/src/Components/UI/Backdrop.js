import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = ({children}) => {
   return (
      <div className={classes.backdrop + ' ' + classes.darken}>{children}</div>
   );
};

export default Backdrop;