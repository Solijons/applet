import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorIcon from '@material-ui/icons/Error';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import React from 'react';
import Colors from '../contains/Colors';
interface IStatusPillProps {
  avatar?: boolean;
  status: string;
}


const StatusPill: React.FunctionComponent<IStatusPillProps> = (props) => {
  const { status } = props;

  const pillStyles = {
    paid: {
      backgroundColor: Colors.ok,
      color: '#fff',
      paddingLeft: '.6em',
      paddingRight: '.6em',
      fontWeight: 700,
    },
    overdue: {
      backgroundColor: Colors.trouble,
      color: '#fff',
      paddingLeft: '.6em',
      paddingRight: '.6em',
      fontWeight: 700,
    },
    pending: {
      backgroundColor: Colors.warn,
      color: '#fff',
      paddingLeft: '.6em',
      paddingRight: '.6em',
      fontWeight: 700,
    },
    open: {
      backgroundColor: '#BAD7F2',
      color: '#fff',
      paddingLeft: '.6em',
      paddingRight: '.6em',
      fontWeight: 700,
    },
    closed: {
      backgroundColor: Colors.neutral,
      color: '#fff',
      paddingLeft: '.6em',
      paddingRight: '.6em',
      fontWeight: 700,
    },
    low: {
      backgroundColor: Colors.ok,
      color: '#fff',
      paddingLeft: '.6em',
      paddingRight: '.6em',
      fontWeight: 700,
    },
    high: {
      backgroundColor: Colors.trouble,
      color: '#fff',
      paddingLeft: '.6em',
      paddingRight: '.6em',
      fontWeight: 700,
    },
    medium: {
      backgroundColor: Colors.warn,
      color: '#fff',
      paddingLeft: '.6em',
      paddingRight: '.6em',
      fontWeight: 700,
    }
  } as any;

  const pillIcon = {
    pending: <QueryBuilderIcon />,
    paid: <CheckCircleOutlineIcon />,
    overdue: <ErrorIcon />,
    // open: <PlayCircleOutlineIcon />,
    closed: <CheckCircleOutlineIcon />,
    open: <QueryBuilderIcon />,
    low: <ArrowUpwardIcon />,
    high: <ArrowDownwardIcon />,
    medium: <RemoveCircleOutlineIcon />,
  } as any;

  const renderStatus = () => {
    if (status) { return status.toLowerCase(); }
    return 'insufficient';
  };

  const renderText = () => {
    return renderStatus();
  };

  const pillIconRadius = {
    paid: {
      backgroundColor: 'transparent',
      color: '#fff',
    },
    pending: {
      backgroundColor: 'transparent',
      color: '#fff',
    },
    overdue: {
      backgroundColor: 'transparent',
      color: '#fff',
    },
    open: {
      backgroundColor: 'transparent',
      color: '#fff',
    },
    closed: {
      backgroundColor: 'transparent',
      color: '#fff',
    },
    low: {
      backgroundColor: 'transparent',
      color: '#fff',
    },
    high: {
      backgroundColor: 'transparent',
      color: '#fff',
    },
    medium: {
      backgroundColor: 'transparent',
      color: '#fff',
    }
  } as any;

  return (
    <Chip
      style={pillStyles[renderStatus()]}
      size="small"
      avatar={
        <Avatar
          style={pillIconRadius[renderStatus()]}
        >
          {pillIcon[renderStatus()]}
        </Avatar>
      }
      label={renderText()}
    />

  );
};

export default StatusPill;
