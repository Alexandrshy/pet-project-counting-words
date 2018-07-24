// @flow

import { connect } from 'react-redux';

import Header from '../components/ui/Header/Header';
import {
  refTimerRunning,
  refTimerVisible,
  refActiveTextID,
  saveResult,
  navChange,
} from '../actions';

const mapStateToProps = state => (
  {
    options: state.fragments,
    timerRunning: state.timerRunning,
    timerVisible: state.timerVisible,
    activeTextID: state.activeID,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onChangeTimerRunning: (item) => {
      dispatch(refTimerRunning(item));
    },
    onChangeTimerVisible: (item) => {
      dispatch(refTimerVisible(item));
    },
    onChangeActiveTextID: (activeTextID) => {
      dispatch(refActiveTextID(activeTextID));
    },
    onSaveResult: (data) => {
      dispatch(saveResult(data));
    },
    onChangeNav: (name) => {
      dispatch(navChange(name));
    },
  }
);

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
