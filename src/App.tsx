import React, { Dispatch } from 'react';
import './App.css';
import View from './components/view';

import { connect } from 'react-redux';

interface IStoreProps {
  loadEventTeams: (value: string[]) => void;
  loadPAPITeams: (value: string[]) => void;
}

const App: React.FunctionComponent<IStoreProps> = (props) => {
  return (
    <View />
  );
};

const matchDispatchToProps = (dispatch: Dispatch<any>) => ({
  loadEventTeams: (value: string[]) => dispatch({ type: 'UPDATE_EVENT_TEAMS', value }),
  loadPAPITeams: (value: string[]) => dispatch({ type: 'UPDATE_PAPI_TEAMS', value }),
});

export default connect(null, matchDispatchToProps)(App);
