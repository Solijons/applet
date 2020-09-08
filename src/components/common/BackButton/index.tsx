import Button from '@material-ui/core/Button';
import React from 'react';
import { IBackButtonProps } from './interfaces';

const BackButton: React.FunctionComponent<IBackButtonProps> = (props) => {
  const { dest, text } = props;

  return (
    <Button id="backToHome" variant="contained" href={`${dest}`}>{text}</Button>
  );
};

export default BackButton;
