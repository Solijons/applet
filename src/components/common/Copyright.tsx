import { Link, Typography } from '@material-ui/core';
import React from 'react';

/**
 * Produces a copyright string (centered) with the current year and a
 * clickable link to Bayer Crop Science.
 * @returns {React.FunctionComponent}
 */
const Copyright: React.FunctionComponent = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.cropscience.bayer.com/">
        Soliev
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
