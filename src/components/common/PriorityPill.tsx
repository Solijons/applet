import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import React from 'react';
import Colors from './contains/Colors';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

interface IPriorityPillProps {
  priority: string;
}

const PriorityPill: React.FunctionComponent<IPriorityPillProps> = (props) => {
  const { priority } = props;

  const pillStyles = {
    na: {
      backgroundColor: Colors.neutral,
      color: '#fff',
    },
    low: {
      backgroundColor: Colors.ok,
      color: '#fff',
    },
    high: {
      backgroundColor: Colors.trouble,
      color: '#fff',
    },
    med: {
      backgroundColor: Colors.warn,
      color: '#fff',
    },
  };

  const renderPriority = () => {
    if (priority.toLowerCase() === 'high') {
      return (
        <Chip
          style={pillStyles.high}
          size="small"
          avatar={
            <Avatar
              style={pillStyles.high}
            >
              <NotificationsActiveIcon />
            </Avatar>
          }
          label="high"
        />
      );
    }
    if (priority.toLowerCase() === 'med') {
      return (
        <Chip
          style={pillStyles.med}
          size="small"
          avatar={
            <Avatar
              style={pillStyles.med}
            >
              <PriorityHighIcon />
            </Avatar>
          }
          label="med"
        />
      );
    }
    if (priority.toLowerCase() === 'low') {
      return (
        <Chip
          style={pillStyles.low}
          size="small"
          avatar={
            <Avatar
              style={pillStyles.low}
            >
              <FiberManualRecordIcon />
            </Avatar>
          }
          label="low"
        />
      );
    }
    return '';
  };

  return (
    <>
      {renderPriority()}
    </>
  );
};



export default PriorityPill;
